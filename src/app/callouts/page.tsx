'use client';

import { useState } from 'react';
import { mapCallouts } from '@/data/callouts';
import AdBanner from '@/components/AdBanner';

export default function CalloutsPage() {
  const [selectedMap, setSelectedMap] = useState(mapCallouts[0].id);
  const [searchTerm, setSearchTerm] = useState('');

  const currentMap = mapCallouts.find(m => m.id === selectedMap);

  const filterCallouts = (callouts: { name: string; alias?: string[]; description: string }[]) => {
    if (!searchTerm) return callouts;
    return callouts.filter(c => 
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.alias?.some(a => a.toLowerCase().includes(searchTerm.toLowerCase())) ||
      c.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen bg-[#0f1923]">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1a2634] to-[#0f1923] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            📍 콜아웃 <span className="text-[#ff4655]">맵</span>
          </h1>
          <p className="text-xl text-gray-400">
            맵별 위치 명칭을 익혀서 팀원과 빠르게 소통하세요
          </p>
        </div>
      </section>

      <AdBanner />

      <section className="max-w-7xl mx-auto px-4 py-8">
        {/* Map Selector */}
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {mapCallouts.map((map) => (
            <button
              key={map.id}
              onClick={() => setSelectedMap(map.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedMap === map.id
                  ? 'bg-[#ff4655] text-white'
                  : 'bg-[#1a2634] text-gray-400 hover:bg-[#2a3644]'
              }`}
            >
              {map.name}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="콜아웃 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-[#1a2634] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ff4655]"
          />
        </div>

        {currentMap && (
          <div className="space-y-8">
            {/* A Site */}
            <div>
              <h2 className="text-2xl font-bold text-[#ff4655] mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-[#ff4655] rounded flex items-center justify-center text-white text-sm">A</span>
                A 사이트
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filterCallouts(currentMap.callouts.asite).map((callout) => (
                  <div key={callout.name} className="bg-[#1a2634] rounded-xl p-4 hover:ring-2 hover:ring-[#ff4655] transition-all">
                    <h3 className="font-bold text-white text-lg">{callout.name}</h3>
                    {callout.alias && (
                      <p className="text-sm text-gray-500 mb-2">
                        다른 이름: {callout.alias.join(', ')}
                      </p>
                    )}
                    <p className="text-gray-400 text-sm">{callout.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* B Site */}
            <div>
              <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-sm">B</span>
                B 사이트
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filterCallouts(currentMap.callouts.bsite).map((callout) => (
                  <div key={callout.name} className="bg-[#1a2634] rounded-xl p-4 hover:ring-2 hover:ring-blue-400 transition-all">
                    <h3 className="font-bold text-white text-lg">{callout.name}</h3>
                    {callout.alias && (
                      <p className="text-sm text-gray-500 mb-2">
                        다른 이름: {callout.alias.join(', ')}
                      </p>
                    )}
                    <p className="text-gray-400 text-sm">{callout.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* C Site (if exists) */}
            {currentMap.callouts.csite && (
              <div>
                <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white text-sm">C</span>
                  C 사이트
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filterCallouts(currentMap.callouts.csite).map((callout) => (
                    <div key={callout.name} className="bg-[#1a2634] rounded-xl p-4 hover:ring-2 hover:ring-green-400 transition-all">
                      <h3 className="font-bold text-white text-lg">{callout.name}</h3>
                      {callout.alias && (
                        <p className="text-sm text-gray-500 mb-2">
                          다른 이름: {callout.alias.join(', ')}
                        </p>
                      )}
                      <p className="text-gray-400 text-sm">{callout.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mid */}
            <div>
              <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center text-white text-sm">M</span>
                미드
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filterCallouts(currentMap.callouts.mid).map((callout) => (
                  <div key={callout.name} className="bg-[#1a2634] rounded-xl p-4 hover:ring-2 hover:ring-yellow-400 transition-all">
                    <h3 className="font-bold text-white text-lg">{callout.name}</h3>
                    {callout.alias && (
                      <p className="text-sm text-gray-500 mb-2">
                        다른 이름: {callout.alias.join(', ')}
                      </p>
                    )}
                    <p className="text-gray-400 text-sm">{callout.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Attacker Side */}
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white text-sm">⚔️</span>
                공격 측
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filterCallouts(currentMap.callouts.attacker).map((callout) => (
                  <div key={callout.name} className="bg-[#1a2634] rounded-xl p-4 hover:ring-2 hover:ring-orange-400 transition-all">
                    <h3 className="font-bold text-white text-lg">{callout.name}</h3>
                    {callout.alias && (
                      <p className="text-sm text-gray-500 mb-2">
                        다른 이름: {callout.alias.join(', ')}
                      </p>
                    )}
                    <p className="text-gray-400 text-sm">{callout.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Defender Side */}
            <div>
              <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-500 rounded flex items-center justify-center text-white text-sm">🛡️</span>
                수비 측
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filterCallouts(currentMap.callouts.defender).map((callout) => (
                  <div key={callout.name} className="bg-[#1a2634] rounded-xl p-4 hover:ring-2 hover:ring-purple-400 transition-all">
                    <h3 className="font-bold text-white text-lg">{callout.name}</h3>
                    {callout.alias && (
                      <p className="text-sm text-gray-500 mb-2">
                        다른 이름: {callout.alias.join(', ')}
                      </p>
                    )}
                    <p className="text-gray-400 text-sm">{callout.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      <AdBanner />

      {/* Tips */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">💡 콜아웃 팁</h2>
        <div className="bg-[#1a2634] rounded-xl p-6">
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-[#ff4655]">•</span>
              <span>콜아웃은 팀원과 빠르게 정보를 공유하는 데 필수입니다</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#ff4655]">•</span>
              <span>적 위치를 알릴 때 "A 헤븐에 1명" 처럼 간결하게 말하세요</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#ff4655]">•</span>
              <span>같은 위치도 여러 이름으로 불릴 수 있으니 다양한 별칭을 알아두세요</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#ff4655]">•</span>
              <span>프로 경기를 보면서 콜아웃을 익히는 것도 좋은 방법입니다</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
