'use client';

import { useState } from 'react';

export default function EconomyCalculatorPage() {
  const [currentMoney, setCurrentMoney] = useState(3000);
  const [roundResult, setRoundResult] = useState<'win' | 'loss' | null>(null);
  const [lossStreak, setLossStreak] = useState(0);
  const [hasSpike, setHasSpike] = useState(false);

  const calculateNextRound = () => {
    let nextMoney = currentMoney;
    
    if (roundResult === 'win') {
      nextMoney += 3000; // 승리 보너스
    } else if (roundResult === 'loss') {
      // 패배 시 연패 보너스
      const lossBonus = Math.min(1900 + (lossStreak * 500), 2900);
      nextMoney += lossBonus;
    }
    
    if (hasSpike) {
      nextMoney += 300; // 스파이크 설치 보너스
    }

    return nextMoney;
  };

  const getBuyRecommendation = (money: number) => {
    if (money >= 4700) return { type: '풀바이', color: 'text-green-400', desc: '팬텀/밴달 + 풀실드 + 스킬' };
    if (money >= 3900) return { type: '포스바이', color: 'text-yellow-400', desc: '스펙터/마샬 + 라이트실드 + 스킬' };
    if (money >= 2600) return { type: '하프바이', color: 'text-orange-400', desc: '스펙터 + 스킬 또는 쉐리프' };
    return { type: '에코', color: 'text-red-400', desc: '클래식/고스트만 또는 저축' };
  };

  const recommendation = getBuyRecommendation(currentMoney);
  const nextRoundMoney = calculateNextRound();
  const nextRecommendation = getBuyRecommendation(nextRoundMoney);

  return (
    <div className="min-h-screen bg-[#0f1923]">
      <section className="bg-gradient-to-b from-[#1a2634] to-[#0f1923] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            💰 경제 <span className="text-[#ff4655]">계산기</span>
          </h1>
          <p className="text-xl text-gray-400">
            현재 크레딧으로 최적의 바이 전략을 추천해드려요
          </p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 py-12">
        {/* Current Money Input */}
        <div className="bg-[#1a2634] rounded-xl p-6 mb-6">
          <label className="block text-gray-400 mb-2">현재 크레딧</label>
          <input
            type="number"
            value={currentMoney}
            onChange={(e) => setCurrentMoney(Math.max(0, Math.min(16000, parseInt(e.target.value) || 0)))}
            className="w-full px-4 py-3 bg-[#0f1923] border border-gray-700 rounded-lg text-white text-2xl font-bold text-center focus:outline-none focus:border-[#ff4655]"
          />
          <input
            type="range"
            min="0"
            max="16000"
            step="100"
            value={currentMoney}
            onChange={(e) => setCurrentMoney(parseInt(e.target.value))}
            className="w-full mt-3 accent-[#ff4655]"
          />
        </div>

        {/* Current Recommendation */}
        <div className="bg-[#1a2634] rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-white mb-4">📊 현재 라운드 추천</h2>
          <div className={`text-3xl font-bold ${recommendation.color} mb-2`}>
            {recommendation.type}
          </div>
          <p className="text-gray-400">{recommendation.desc}</p>
        </div>

        {/* Next Round Calculator */}
        <div className="bg-[#1a2634] rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-white mb-4">🔮 다음 라운드 예측</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <button
              onClick={() => { setRoundResult('win'); setLossStreak(0); }}
              className={`py-3 rounded-lg font-medium transition-all ${
                roundResult === 'win' ? 'bg-green-500 text-white' : 'bg-[#0f1923] text-gray-400 hover:bg-green-500/20'
              }`}
            >
              ✅ 승리
            </button>
            <button
              onClick={() => { setRoundResult('loss'); setLossStreak(prev => prev + 1); }}
              className={`py-3 rounded-lg font-medium transition-all ${
                roundResult === 'loss' ? 'bg-red-500 text-white' : 'bg-[#0f1923] text-gray-400 hover:bg-red-500/20'
              }`}
            >
              ❌ 패배
            </button>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <input
              type="checkbox"
              id="spike"
              checked={hasSpike}
              onChange={(e) => setHasSpike(e.target.checked)}
              className="w-5 h-5 accent-[#ff4655]"
            />
            <label htmlFor="spike" className="text-gray-400">스파이크 설치함 (+300)</label>
          </div>

          {roundResult && (
            <div className="bg-[#0f1923] rounded-lg p-4">
              <p className="text-gray-400 mb-2">예상 다음 라운드 크레딧</p>
              <p className="text-2xl font-bold text-white">{nextRoundMoney.toLocaleString()}</p>
              <p className={`mt-2 ${nextRecommendation.color}`}>
                → {nextRecommendation.type} 추천
              </p>
            </div>
          )}
        </div>

        {/* Quick Reference */}
        <div className="bg-[#1a2634] rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">📋 바이 기준표</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-700">
              <span className="text-green-400 font-medium">풀바이</span>
              <span className="text-gray-400">4,700+ 크레딧</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-700">
              <span className="text-yellow-400 font-medium">포스바이</span>
              <span className="text-gray-400">3,900+ 크레딧</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-700">
              <span className="text-orange-400 font-medium">하프바이</span>
              <span className="text-gray-400">2,600+ 크레딧</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-red-400 font-medium">에코</span>
              <span className="text-gray-400">2,600 미만</span>
            </div>
          </div>
        </div>

        {/* Economy Tips */}
        <div className="mt-6 bg-[#1a2634] rounded-xl p-6">
          <h3 className="font-semibold text-white mb-3">💡 경제 팁</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>• 팀원들과 경제 상황을 공유하세요</li>
            <li>• 에코 라운드에서는 스킬로 최대한 버티세요</li>
            <li>• 연패 보너스: 1패 1,900 → 2패 2,400 → 3패+ 2,900</li>
            <li>• 스파이크 설치 시 +300 보너스</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
