'use client';

import { useState } from 'react';
import { proPlayers, averageProSettings } from '@/data/proSettings';
import AdBanner from '@/components/AdBanner';

export default function ProSettingsPage() {
  const [selectedRole, setSelectedRole] = useState('all');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const roles = ['all', '타격대', '척후대', '전략가', '감시자'];
  
  const filteredPlayers = selectedRole === 'all' 
    ? proPlayers 
    : proPlayers.filter(p => p.role === selectedRole);

  const copyToClipboard = (code: string, playerId: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(playerId);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0f1923]">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1a2634] to-[#0f1923] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🎮 프로 선수 <span className="text-[#ff4655]">세팅</span>
          </h1>
          <p className="text-xl text-gray-400">
            세계 최고 프로 선수들의 감도, 크로스헤어, 설정을 확인하세요
          </p>
        </div>
      </section>

      <AdBanner slot="pro-settings-top" format="horizontal" />

      {/* Average Stats */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">📊 프로 평균 세팅</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#1a2634] rounded-xl p-4 text-center">
            <p className="text-gray-400 text-sm">평균 eDPI</p>
            <p className="text-3xl font-bold text-[#ff4655]">{averageProSettings.edpi.average}</p>
            <p className="text-xs text-gray-500">{averageProSettings.edpi.recommendation}</p>
          </div>
          <div className="bg-[#1a2634] rounded-xl p-4 text-center">
            <p className="text-gray-400 text-sm">가장 많이 쓰는 DPI</p>
            <p className="text-3xl font-bold text-blue-400">{averageProSettings.dpi.mostUsed}</p>
            <p className="text-xs text-gray-500">400, 800, 1600 순</p>
          </div>
          <div className="bg-[#1a2634] rounded-xl p-4 text-center">
            <p className="text-gray-400 text-sm">평균 감도</p>
            <p className="text-3xl font-bold text-green-400">{averageProSettings.sensitivity.average}</p>
            <p className="text-xs text-gray-500">범위: {averageProSettings.sensitivity.range}</p>
          </div>
          <div className="bg-[#1a2634] rounded-xl p-4 text-center">
            <p className="text-gray-400 text-sm">eDPI 범위</p>
            <p className="text-3xl font-bold text-purple-400">{averageProSettings.edpi.min}-{averageProSettings.edpi.max}</p>
            <p className="text-xs text-gray-500">최소 ~ 최대</p>
          </div>
        </div>

        {/* Role Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedRole === role
                  ? 'bg-[#ff4655] text-white'
                  : 'bg-[#1a2634] text-gray-400 hover:bg-[#2a3644] hover:text-white'
              }`}
            >
              {role === 'all' ? '전체' : role}
            </button>
          ))}
        </div>

        {/* Player Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlayers.map((player) => (
            <div
              key={player.id}
              className="bg-[#1a2634] rounded-xl overflow-hidden hover:ring-2 hover:ring-[#ff4655] transition-all"
            >
              {/* Player Header */}
              <div className="bg-gradient-to-r from-[#ff4655]/20 to-transparent p-4 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      {player.country} {player.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{player.team}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${
                    player.role === '타격대' ? 'bg-red-500/20 text-red-400' :
                    player.role === '척후대' ? 'bg-blue-500/20 text-blue-400' :
                    player.role === '전략가' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {player.role}
                  </span>
                </div>
                <div className="flex gap-1 mt-2">
                  {player.mainAgents.map((agent) => (
                    <span key={agent} className="text-xs bg-[#0f1923] px-2 py-1 rounded">
                      {agent}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mouse Settings */}
              <div className="p-4 border-b border-gray-700">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">🖱️ 마우스 설정</h4>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-xs text-gray-500">DPI</p>
                    <p className="font-bold text-white">{player.mouse.dpi}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">감도</p>
                    <p className="font-bold text-white">{player.mouse.sensitivity}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">eDPI</p>
                    <p className="font-bold text-[#ff4655]">{player.mouse.edpi}</p>
                  </div>
                </div>
              </div>

              {/* Crosshair */}
              <div className="p-4 border-b border-gray-700">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">🎯 크로스헤어</h4>
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <p className="text-gray-400">색상: <span className="text-white">{player.crosshair.color}</span></p>
                    <p className="text-gray-400">내부선: <span className="text-white">{player.crosshair.innerLines}</span></p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(player.crosshair.code, player.id)}
                    className={`px-3 py-1 rounded text-sm transition-all ${
                      copiedCode === player.id
                        ? 'bg-green-500 text-white'
                        : 'bg-[#ff4655] text-white hover:bg-[#ff5566]'
                    }`}
                  >
                    {copiedCode === player.id ? '복사됨!' : '코드 복사'}
                  </button>
                </div>
              </div>

              {/* Video Settings */}
              <div className="p-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">🖥️ 비디오 설정</h4>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">해상도</span>
                  <span className="text-white">{player.videoSettings.resolution}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">화면비</span>
                  <span className="text-white">{player.videoSettings.aspectRatio}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AdBanner slot="pro-settings-bottom" format="horizontal" />

      {/* Tips Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">💡 세팅 팁</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#1a2634] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-[#ff4655] mb-3">감도 선택 가이드</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• 낮은 감도 (200-250 eDPI): 정밀한 에임, 팔 전체 사용</li>
              <li>• 중간 감도 (250-350 eDPI): 균형 잡힌 플레이</li>
              <li>• 높은 감도 (350+ eDPI): 빠른 반응, 손목 위주</li>
              <li>• 프로 대부분은 200-300 eDPI 사용</li>
            </ul>
          </div>
          <div className="bg-[#1a2634] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-[#ff4655] mb-3">크로스헤어 팁</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• 시안/흰색이 가장 인기 있는 색상</li>
              <li>• 작은 크로스헤어가 정밀 에임에 유리</li>
              <li>• 센터 닷은 개인 취향</li>
              <li>• 게임 내 설정 → 크로스헤어 → 코드 가져오기</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
