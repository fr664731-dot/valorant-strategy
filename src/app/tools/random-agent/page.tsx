'use client';

import { useState } from 'react';
import { agents } from '@/data/agents';
import Link from 'next/link';

export default function RandomAgentPage() {
  const [selectedAgent, setSelectedAgent] = useState<typeof agents[0] | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string>('all');

  const roles = ['all', '타격대', '척후대', '전략가', '감시자'];

  const spinRoulette = () => {
    setIsSpinning(true);
    
    const filteredAgents = selectedRole === 'all' 
      ? agents 
      : agents.filter(a => a.role === selectedRole);

    let count = 0;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * filteredAgents.length);
      setSelectedAgent(filteredAgents[randomIndex]);
      count++;
      
      if (count > 20) {
        clearInterval(interval);
        setIsSpinning(false);
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#0f1923]">
      <section className="bg-gradient-to-b from-[#1a2634] to-[#0f1923] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🎰 랜덤 요원 <span className="text-[#ff4655]">룰렛</span>
          </h1>
          <p className="text-xl text-gray-400">
            어떤 요원을 플레이할지 고민될 때! 운명에 맡겨보세요
          </p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 py-12">
        {/* Role Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              disabled={isSpinning}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedRole === role
                  ? 'bg-[#ff4655] text-white'
                  : 'bg-[#1a2634] text-gray-400 hover:bg-[#2a3644]'
              } ${isSpinning ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {role === 'all' ? '전체' : role}
            </button>
          ))}
        </div>

        {/* Roulette Display */}
        <div className={`bg-[#1a2634] rounded-2xl p-8 text-center mb-8 ${isSpinning ? 'animate-pulse' : ''}`}>
          {selectedAgent ? (
            <div className="space-y-4">
              <div className={`text-8xl ${isSpinning ? 'animate-bounce' : ''}`}>
                {selectedAgent.icon}
              </div>
              <h2 className="text-3xl font-bold text-white">{selectedAgent.name}</h2>
              <span className={`inline-block px-3 py-1 rounded text-sm ${
                selectedAgent.role === '타격대' ? 'bg-red-500/20 text-red-400' :
                selectedAgent.role === '척후대' ? 'bg-blue-500/20 text-blue-400' :
                selectedAgent.role === '전략가' ? 'bg-purple-500/20 text-purple-400' :
                'bg-green-500/20 text-green-400'
              }`}>
                {selectedAgent.role}
              </span>
              <p className="text-gray-400 text-sm mt-4">{selectedAgent.description}</p>
              {!isSpinning && (
                <Link 
                  href={`/agents/${selectedAgent.id}`}
                  className="inline-block mt-4 px-4 py-2 bg-[#ff4655] text-white rounded-lg hover:bg-[#ff5566] transition-colors"
                >
                  {selectedAgent.name} 가이드 보기 →
                </Link>
              )}
            </div>
          ) : (
            <div className="py-12">
              <div className="text-6xl mb-4">❓</div>
              <p className="text-gray-400">버튼을 눌러 랜덤 요원을 뽑아보세요!</p>
            </div>
          )}
        </div>

        {/* Spin Button */}
        <button
          onClick={spinRoulette}
          disabled={isSpinning}
          className={`w-full py-4 rounded-xl text-xl font-bold transition-all ${
            isSpinning
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-[#ff4655] hover:bg-[#ff5566] hover:scale-105'
          } text-white`}
        >
          {isSpinning ? '🎰 돌리는 중...' : '🎲 랜덤 요원 뽑기!'}
        </button>

        {/* Tips */}
        <div className="mt-8 bg-[#1a2634] rounded-xl p-6">
          <h3 className="font-semibold text-white mb-3">💡 팁</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>• 역할을 선택하면 해당 역할의 요원만 나와요</li>
            <li>• 팀원들과 함께 돌려서 팀 조합을 정해보세요</li>
            <li>• 새로운 요원을 연습할 때 활용해보세요</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
