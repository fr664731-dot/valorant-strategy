'use client';

import { useState } from 'react';
import AdBanner from '@/components/AdBanner';

const games = [
  { name: 'CS:GO / CS2', multiplier: 3.18 },
  { name: 'Overwatch', multiplier: 10.6 },
  { name: 'Apex Legends', multiplier: 3.18 },
  { name: 'Fortnite', multiplier: 12.6 },
  { name: 'Rainbow Six Siege', multiplier: 1.2 },
  { name: 'Call of Duty', multiplier: 3.18 },
  { name: 'PUBG', multiplier: 3.18 },
];

export default function SensitivityCalculator() {
  const [fromGame, setFromGame] = useState('CS:GO / CS2');
  const [fromSens, setFromSens] = useState('');
  const [fromDPI, setFromDPI] = useState('800');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const sens = parseFloat(fromSens);
    const dpi = parseFloat(fromDPI);
    
    if (isNaN(sens) || isNaN(dpi)) return;

    const game = games.find(g => g.name === fromGame);
    if (!game) return;

    // eDPI 계산 후 발로란트 감도로 변환
    const fromEDPI = sens * dpi;
    const valorantSens = fromEDPI / (dpi * game.multiplier);
    
    setResult(Math.round(valorantSens * 1000) / 1000);
  };

  const edpiResult = result ? result * parseFloat(fromDPI) : null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">감도 계산기</h1>
      <p className="text-gray-400 mb-8">다른 게임의 감도를 발로란트 감도로 변환하세요</p>

      <AdBanner slot="tools-top" format="horizontal" />

      <div className="mt-8 bg-[#1f2326] border border-gray-700 rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 입력 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#ff4655]">변환할 게임</h2>
            
            <div>
              <label className="block text-sm text-gray-400 mb-2">게임 선택</label>
              <select
                value={fromGame}
                onChange={(e) => setFromGame(e.target.value)}
                className="w-full bg-[#0f1923] border border-gray-700 rounded-lg px-4 py-3 text-white"
              >
                {games.map(game => (
                  <option key={game.name} value={game.name}>{game.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">현재 감도</label>
              <input
                type="number"
                step="0.01"
                value={fromSens}
                onChange={(e) => setFromSens(e.target.value)}
                placeholder="예: 2.5"
                className="w-full bg-[#0f1923] border border-gray-700 rounded-lg px-4 py-3 text-white"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">마우스 DPI</label>
              <input
                type="number"
                value={fromDPI}
                onChange={(e) => setFromDPI(e.target.value)}
                placeholder="예: 800"
                className="w-full bg-[#0f1923] border border-gray-700 rounded-lg px-4 py-3 text-white"
              />
            </div>

            <button
              onClick={calculate}
              className="w-full bg-[#ff4655] hover:bg-[#ff4655]/80 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              변환하기
            </button>
          </div>

          {/* 결과 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-400">발로란트 감도</h2>
            
            <div className="bg-[#0f1923] rounded-xl p-6 text-center">
              {result !== null ? (
                <>
                  <p className="text-5xl font-bold text-[#ff4655] mb-2">{result}</p>
                  <p className="text-gray-400">발로란트 감도</p>
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <p className="text-2xl font-semibold text-white">{edpiResult?.toFixed(0)}</p>
                    <p className="text-gray-400 text-sm">eDPI (감도 × DPI)</p>
                  </div>
                </>
              ) : (
                <p className="text-gray-500 py-8">감도를 입력하고 변환하기를 클릭하세요</p>
              )}
            </div>

            {result !== null && (
              <div className="bg-[#0f1923] rounded-xl p-4">
                <p className="text-sm text-gray-400">
                  💡 <span className="text-white">팁:</span> 프로 선수들의 평균 eDPI는 200~400 사이입니다.
                  {edpiResult && edpiResult > 400 && ' 현재 감도가 높은 편이에요.'}
                  {edpiResult && edpiResult < 200 && ' 현재 감도가 낮은 편이에요.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>


      {/* 추천 감도 */}
      <div className="mt-8 bg-[#1f2326] border border-gray-700 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">프로 선수 감도 참고</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'TenZ', sens: 0.4, dpi: 800, edpi: 320 },
            { name: 'Aspas', sens: 0.35, dpi: 800, edpi: 280 },
            { name: 'Demon1', sens: 0.27, dpi: 800, edpi: 216 },
            { name: 'yay', sens: 0.27, dpi: 800, edpi: 216 },
            { name: 'Derke', sens: 0.35, dpi: 400, edpi: 140 },
            { name: 'cNed', sens: 0.35, dpi: 800, edpi: 280 },
          ].map(player => (
            <div key={player.name} className="bg-[#0f1923] rounded-lg p-4">
              <p className="font-semibold text-[#ff4655]">{player.name}</p>
              <p className="text-sm text-gray-400">감도: {player.sens} / DPI: {player.dpi}</p>
              <p className="text-sm text-white">eDPI: {player.edpi}</p>
            </div>
          ))}
        </div>
      </div>

      {/* eDPI 설명 */}
      <div className="mt-8 bg-[#1f2326] border border-gray-700 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">eDPI란?</h2>
        <div className="space-y-3 text-gray-400">
          <p><span className="text-white font-medium">eDPI = 감도 × DPI</span></p>
          <p>eDPI는 실제 마우스 이동 거리당 화면 회전량을 나타냅니다.</p>
          <p>같은 eDPI면 감도와 DPI 조합이 달라도 같은 느낌입니다.</p>
          <ul className="list-disc list-inside space-y-1 mt-4">
            <li><span className="text-green-400">낮은 eDPI (150~250)</span>: 정확한 에임, 넓은 마우스패드 필요</li>
            <li><span className="text-yellow-400">중간 eDPI (250~350)</span>: 균형 잡힌 설정</li>
            <li><span className="text-red-400">높은 eDPI (350+)</span>: 빠른 회전, 손목 에임</li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <AdBanner slot="tools-bottom" format="horizontal" />
      </div>
    </div>
  );
}
