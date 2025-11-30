import AdBanner from '@/components/AdBanner';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '발로란트 패치 노트 - 최신 업데이트 정보',
  description: '발로란트 최신 패치 노트와 업데이트 정보. 요원 밸런스 변경, 맵 업데이트, 버그 수정 내용을 확인하세요.',
  keywords: ['발로란트 패치', '발로란트 업데이트', '발로란트 패치노트', '발로란트 밸런스'],
};

interface PatchNote {
  version: string;
  date: string;
  highlights: string[];
  agentChanges: { agent: string; changes: string[] }[];
  mapChanges?: { map: string; changes: string[] }[];
  weaponChanges?: { weapon: string; changes: string[] }[];
  bugFixes?: string[];
}

const patchNotes: PatchNote[] = [
  {
    version: '9.08',
    date: '2024년 11월',
    highlights: [
      '클로브 밸런스 조정',
      '아이소 스킬 개선',
      '경쟁전 시스템 업데이트',
    ],
    agentChanges: [
      {
        agent: '클로브',
        changes: [
          '러크(E) 스모크 지속시간 14초 → 12초',
          '픽미업(C) 체력 회복량 감소',
          '낫 데드 옛(X) 부활 시간 12초 → 10초',
        ],
      },
      {
        agent: '아이소',
        changes: [
          '더블 탭(E) 쉴드 지속시간 증가',
          '컨틴전시(Q) 벽 이동 속도 증가',
          '킬 컨트랙트(X) 결투 공간 크기 조정',
        ],
      },
      {
        agent: '레이즈',
        changes: [
          '붐봇(C) 체력 100 → 80',
          '페인트 쉘(E) 데미지 약간 감소',
        ],
      },
    ],
    bugFixes: [
      '특정 상황에서 스파이크 설치가 취소되는 버그 수정',
      '일부 맵에서 스킬이 벽을 통과하는 버그 수정',
      '경쟁전 랭크 표시 오류 수정',
    ],
  },
  {
    version: '9.07',
    date: '2024년 10월',
    highlights: [
      '데드락 대규모 버프',
      '바이퍼 밸런스 조정',
      '새로운 총기 스킨 출시',
    ],
    agentChanges: [
      {
        agent: '데드락',
        changes: [
          '그래브넷(C) 범위 증가',
          '소닉 센서(Q) 감지 범위 확대',
          '배리어 메쉬(E) 체력 증가',
          '어나이얼레이터(X) 포인트 8 → 7',
        ],
      },
      {
        agent: '바이퍼',
        changes: [
          '톡식 스크린(E) 연료 소모량 증가',
          '바이퍼스 핏(X) 범위 약간 감소',
        ],
      },
    ],
    mapChanges: [
      {
        map: '선셋',
        changes: [
          'A 사이트 진입로 조정',
          '미드 구조물 변경',
        ],
      },
    ],
    bugFixes: [
      '데드락 그래브넷 시각 효과 버그 수정',
      '일부 스킨 사운드 오류 수정',
    ],
  },
  {
    version: '9.06',
    date: '2024년 10월',
    highlights: [
      '게코 밸런스 조정',
      '네온 스킬 개선',
      '경쟁전 시즌 리셋',
    ],
    agentChanges: [
      {
        agent: '게코',
        changes: [
          '윙맨(Q) 스파이크 설치/해제 속도 증가',
          '디지(E) 플래시 지속시간 약간 감소',
          '쓰래시(X) 억류 시간 6초 → 5초',
        ],
      },
      {
        agent: '네온',
        changes: [
          '하이 기어(E) 에너지 충전 속도 증가',
          '오버드라이브(X) 데미지 약간 증가',
        ],
      },
      {
        agent: '하버',
        changes: [
          '하이 타이드(E) 쿨다운 40초 → 35초',
          '코브(Q) 지속시간 15초 → 12초',
        ],
      },
    ],
    bugFixes: [
      '게코 생물체 회수 관련 버그 수정',
      '네온 슬라이드 히트박스 버그 수정',
    ],
  },
  {
    version: '9.05',
    date: '2024년 9월',
    highlights: [
      '제트 대시 조정',
      '챔버 밸런스 변경',
      '새로운 게임 모드 추가',
    ],
    agentChanges: [
      {
        agent: '제트',
        changes: [
          '테일윈드(E) 킬 후 충전 시간 조정',
          '업드래프트(Q) 비용 150 → 200',
        ],
      },
      {
        agent: '챔버',
        changes: [
          '헤드헌터(Q) 탄약 비용 증가',
          '투르 드 포스(X) 포인트 8 → 9',
        ],
      },
    ],
    weaponChanges: [
      {
        weapon: '아웃로',
        changes: [
          '가격 2400 → 2200',
          '조준 속도 약간 증가',
        ],
      },
    ],
    bugFixes: [
      '제트 대시 방향 버그 수정',
      '챔버 트레이드마크 배치 버그 수정',
    ],
  },
];

export default function PatchNotesPage() {
  return (
    <div className="min-h-screen bg-[#0f1923]">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1a2634] to-[#0f1923] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            📋 패치 <span className="text-[#ff4655]">노트</span>
          </h1>
          <p className="text-xl text-gray-400">
            발로란트 최신 업데이트 및 밸런스 변경 사항
          </p>
        </div>
      </section>

      <AdBanner slot="patch-notes-top" format="horizontal" />

      {/* Patch Notes List */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {patchNotes.map((patch) => (
            <div
              key={patch.version}
              className="bg-[#1a2634] rounded-xl overflow-hidden"
            >
              {/* Patch Header */}
              <div className="bg-gradient-to-r from-[#ff4655] to-[#ff4655]/50 p-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">
                    패치 {patch.version}
                  </h2>
                  <span className="text-white/80">{patch.date}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="p-6 border-b border-gray-700">
                <h3 className="text-lg font-semibold text-[#ff4655] mb-3">
                  ✨ 주요 변경사항
                </h3>
                <ul className="space-y-2">
                  {patch.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-300 flex items-center gap-2">
                      <span className="text-[#ff4655]">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Agent Changes */}
              {patch.agentChanges.length > 0 && (
                <div className="p-6 border-b border-gray-700">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">
                    🎭 요원 변경사항
                  </h3>
                  <div className="space-y-4">
                    {patch.agentChanges.map((agentChange) => (
                      <div key={agentChange.agent}>
                        <h4 className="font-semibold text-white mb-2">
                          {agentChange.agent}
                        </h4>
                        <ul className="space-y-1 pl-4">
                          {agentChange.changes.map((change, i) => (
                            <li key={i} className="text-gray-400 text-sm">
                              → {change}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Map Changes */}
              {patch.mapChanges && patch.mapChanges.length > 0 && (
                <div className="p-6 border-b border-gray-700">
                  <h3 className="text-lg font-semibold text-green-400 mb-3">
                    🗺️ 맵 변경사항
                  </h3>
                  <div className="space-y-4">
                    {patch.mapChanges.map((mapChange) => (
                      <div key={mapChange.map}>
                        <h4 className="font-semibold text-white mb-2">
                          {mapChange.map}
                        </h4>
                        <ul className="space-y-1 pl-4">
                          {mapChange.changes.map((change, i) => (
                            <li key={i} className="text-gray-400 text-sm">
                              → {change}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Weapon Changes */}
              {patch.weaponChanges && patch.weaponChanges.length > 0 && (
                <div className="p-6 border-b border-gray-700">
                  <h3 className="text-lg font-semibold text-yellow-400 mb-3">
                    🔫 무기 변경사항
                  </h3>
                  <div className="space-y-4">
                    {patch.weaponChanges.map((weaponChange) => (
                      <div key={weaponChange.weapon}>
                        <h4 className="font-semibold text-white mb-2">
                          {weaponChange.weapon}
                        </h4>
                        <ul className="space-y-1 pl-4">
                          {weaponChange.changes.map((change, i) => (
                            <li key={i} className="text-gray-400 text-sm">
                              → {change}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bug Fixes */}
              {patch.bugFixes && patch.bugFixes.length > 0 && (
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-purple-400 mb-3">
                    🐛 버그 수정
                  </h3>
                  <ul className="space-y-1">
                    {patch.bugFixes.map((fix, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-purple-400">✓</span>
                        {fix}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <AdBanner slot="patch-notes-bottom" format="horizontal" />

      {/* Official Link */}
      <section className="max-w-4xl mx-auto px-4 py-8 text-center">
        <p className="text-gray-400 mb-4">
          공식 패치 노트는 라이엇 게임즈 공식 사이트에서 확인하세요
        </p>
        <a
          href="https://playvalorant.com/ko-kr/news/game-updates/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-[#ff4655] text-white rounded-lg hover:bg-[#ff5566] transition-colors"
        >
          공식 패치 노트 보기 →
        </a>
      </section>
    </div>
  );
}
