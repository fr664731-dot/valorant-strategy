'use client';

import { useState } from 'react';
import AdBanner from '@/components/AdBanner';

interface Crosshair {
  name: string;
  team: string;
  role: string;
  code: string;
  description: string;
}

const proCrosshairs: Crosshair[] = [
  {
    name: 'TenZ',
    team: 'Sentinels',
    role: '타격대',
    code: '0;P;c;5;o;1;d;1;z;3;0b;0;1b;0',
    description: '작고 선명한 십자선. 가장 인기 있는 크로스헤어 중 하나.'
  },
  {
    name: 'Aspas',
    team: 'LOUD',
    role: '타격대',
    code: '0;s;1;P;c;5;o;1;f;0;0l;4;0o;2;0a;1;0f;0;1b;0',
    description: '브라질 에이스의 크로스헤어. 깔끔한 십자형.'
  },
  {
    name: 'yay',
    team: 'Cloud9',
    role: '타격대',
    code: '0;P;c;5;o;1;f;0;0l;4;0o;2;0a;1;0f;0;1b;0',
    description: 'El Diablo의 크로스헤어. 정확한 에임에 최적화.'
  },
  {
    name: 'Demon1',
    team: 'Evil Geniuses',
    role: '타격대',
    code: '0;s;1;P;c;5;h;0;f;0;0l;4;0o;2;0a;1;0f;0;1b;0',
    description: '2023 챔피언스 MVP의 크로스헤어.'
  },
  {
    name: 'cNed',
    team: 'Natus Vincere',
    role: '타격대',
    code: '0;P;c;1;o;1;f;0;0l;3;0o;2;0a;1;0f;0;1b;0',
    description: '터키 레전드의 크로스헤어. 오퍼레이터 장인.'
  },
  {
    name: 'Derke',
    team: 'Fnatic',
    role: '타격대',
    code: '0;P;c;1;o;1;0l;4;0o;2;0a;1;0f;0;1b;0',
    description: '유럽 최고의 타격대 크로스헤어.'
  },
  {
    name: 'Boaster',
    team: 'Fnatic',
    role: 'IGL',
    code: '0;P;c;5;o;1;d;1;0l;3;0o;1;0a;1;0f;0;1b;0',
    description: 'Fnatic IGL의 크로스헤어. 밸런스 잡힌 설정.'
  },
  {
    name: 'Sacy',
    team: 'Sentinels',
    role: '척후대',
    code: '0;P;c;1;o;1;f;0;0l;4;0o;2;0a;1;0f;0;1b;0',
    description: '브라질 척후대 장인의 크로스헤어.'
  },
  {
    name: 'Chronicle',
    team: 'M3C',
    role: '감시자',
    code: '0;P;c;5;o;1;d;1;z;3;0b;0;1b;0',
    description: '러시아 감시자의 크로스헤어. 심플한 점.'
  },
  {
    name: 'MaKo',
    team: 'DRX',
    role: '전략가',
    code: '0;P;c;5;o;1;f;0;0l;3;0o;2;0a;1;0f;0;1b;0',
    description: '한국 전략가의 크로스헤어.'
  },
  {
    name: 'Rb',
    team: 'DRX',
    role: '타격대',
    code: '0;s;1;P;c;5;o;1;f;0;0l;4;0o;2;0a;1;0f;0;1b;0',
    description: '2022 챔피언스 우승팀 타격대.'
  },
  {
    name: 'Stax',
    team: 'DRX',
    role: 'IGL',
    code: '0;P;c;1;o;1;f;0;0l;3;0o;2;0a;1;0f;0;1b;0',
    description: 'DRX IGL의 크로스헤어.'
  },
];

export default function CrosshairPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [filter, setFilter] = useState('전체');

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const roles = ['전체', '타격대', '척후대', '전략가', '감시자', 'IGL'];
  const filteredCrosshairs = filter === '전체' 
    ? proCrosshairs 
    : proCrosshairs.filter(c => c.role === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">프로 선수 크로스헤어</h1>
      <p className="text-gray-400 mb-8">프로 선수들의 크로스헤어 코드를 복사해서 사용하세요</p>

      <AdBanner slot="crosshair-top" format="horizontal" />

      {/* 사용법 */}
      <div className="mt-8 bg-[#1f2326] border border-gray-700 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">크로스헤어 적용 방법</h2>
        <ol className="space-y-2 text-gray-400">
          <li>1. 코드를 복사합니다</li>
          <li>2. 발로란트 실행 → 설정 → 크로스헤어</li>
          <li>3. <span className="text-white">크로스헤어 프로필 가져오기</span> 클릭</li>
          <li>4. 복사한 코드 붙여넣기</li>
        </ol>
      </div>


      {/* 필터 */}
      <div className="mt-8 flex gap-2 flex-wrap">
        {roles.map(role => (
          <button
            key={role}
            onClick={() => setFilter(role)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === role 
                ? 'bg-[#ff4655] text-white' 
                : 'bg-[#1f2326] text-gray-400 hover:text-white'
            }`}
          >
            {role}
          </button>
        ))}
      </div>

      {/* 크로스헤어 목록 */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCrosshairs.map((crosshair, i) => (
          <div key={i} className="bg-[#1f2326] border border-gray-700 rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-semibold text-lg">{crosshair.name}</h3>
                <p className="text-sm text-gray-500">{crosshair.team}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded ${
                crosshair.role === '타격대' ? 'bg-red-500/20 text-red-400' :
                crosshair.role === '척후대' ? 'bg-blue-500/20 text-blue-400' :
                crosshair.role === '전략가' ? 'bg-purple-500/20 text-purple-400' :
                crosshair.role === '감시자' ? 'bg-green-500/20 text-green-400' :
                'bg-yellow-500/20 text-yellow-400'
              }`}>
                {crosshair.role}
              </span>
            </div>
            
            <p className="text-gray-400 text-sm mb-4">{crosshair.description}</p>
            
            <div className="bg-[#0f1923] rounded-lg p-3 mb-3">
              <code className="text-xs text-gray-300 break-all">{crosshair.code}</code>
            </div>
            
            <button
              onClick={() => copyToClipboard(crosshair.code)}
              className={`w-full py-2 rounded-lg font-medium transition-colors ${
                copiedCode === crosshair.code
                  ? 'bg-green-500 text-white'
                  : 'bg-[#ff4655] hover:bg-[#ff4655]/80 text-white'
              }`}
            >
              {copiedCode === crosshair.code ? '✓ 복사됨!' : '코드 복사'}
            </button>
          </div>
        ))}
      </div>

      {/* 크로스헤어 팁 */}
      <div className="mt-8 bg-[#1f2326] border border-gray-700 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">크로스헤어 선택 팁</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-[#ff4655] font-medium mb-2">좋은 크로스헤어 조건</h3>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>• 배경과 구분이 잘 되는 색상</li>
              <li>• 너무 크지 않은 크기</li>
              <li>• 중앙점이 명확함</li>
              <li>• 시야를 가리지 않음</li>
            </ul>
          </div>
          <div>
            <h3 className="text-blue-400 font-medium mb-2">추천 색상</h3>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>• <span className="text-cyan-400">시안</span> - 대부분의 맵에서 잘 보임</li>
              <li>• <span className="text-green-400">녹색</span> - 클래식한 선택</li>
              <li>• <span className="text-white">흰색</span> - 깔끔하고 선명함</li>
              <li>• <span className="text-yellow-400">노란색</span> - 어두운 곳에서 잘 보임</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <AdBanner slot="crosshair-bottom" format="horizontal" />
      </div>
    </div>
  );
}
