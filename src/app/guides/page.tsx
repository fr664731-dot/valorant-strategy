import AdBanner from '@/components/AdBanner';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '초보자 가이드',
  description: '발로란트 초보자를 위한 완벽 가이드. 기본 조작법, 경제 시스템, 역할별 플레이 방법을 배워보세요.',
  keywords: ['발로란트 초보', '발로란트 입문', '발로란트 기초', '발로란트 시작'],
};

const guides = [
  {
    id: 'basics',
    title: '기본 조작과 설정',
    description: '발로란트를 시작하기 전 알아야 할 기본 조작법과 추천 설정',
    icon: '🎮',
    content: [
      {
        subtitle: '기본 조작',
        items: [
          'WASD - 이동',
          'Shift - 걷기 (발소리 없음)',
          'Ctrl - 앉기',
          'Space - 점프',
          '좌클릭 - 사격',
          '우클릭 - 조준 (무기에 따라 다름)',
          'R - 재장전',
          'E - 기본 스킬',
          'Q, C - 구매 스킬',
          'X - 궁극기',
        ]
      },
      {
        subtitle: '추천 설정',
        items: [
          '감도: 낮은 감도 추천 (eDPI 200~400)',
          '조준선: 작고 선명한 십자선 추천',
          '그래픽: 성능 우선 설정 (낮음~중간)',
          '사운드: 스테레오, HRTF 활성화',
        ]
      }
    ]
  },
  {
    id: 'economy',
    title: '경제 시스템',
    description: '라운드별 돈 관리와 구매 전략',
    icon: '💰',
    content: [
      {
        subtitle: '기본 경제',
        items: [
          '라운드 승리: 3,000 크레딧',
          '라운드 패배: 1,900~2,900 크레딧 (연패 보너스)',
          '킬: 200 크레딧',
          '스파이크 설치: 300 크레딧',
        ]
      },
      {
        subtitle: '구매 전략',
        items: [
          '풀바이: 총 + 풀 실드 + 스킬 (약 4,000~5,000)',
          '에코: 최소 구매 또는 무구매 (다음 라운드 풀바이 준비)',
          '포스바이: 부족하지만 강제 구매 (중요한 라운드)',
          '팀 경제를 맞추는 것이 중요합니다',
        ]
      }
    ]
  },
  {
    id: 'roles',
    title: '역할 이해하기',
    description: '타격대, 척후대, 전략가, 감시자의 역할',
    icon: '👥',
    content: [
      {
        subtitle: '타격대 (Duelist)',
        items: [
          '팀의 선봉장 역할',
          '사이트 진입을 이끔',
          '킬을 따내는 것이 주 임무',
          '예: 제트, 레이나, 레이즈',
        ]
      },
      {
        subtitle: '척후대 (Initiator)',
        items: [
          '정보 수집과 진입 지원',
          '플래시, 스캔으로 팀 지원',
          '적 위치를 파악하는 역할',
          '예: 소바, 스카이, 브리치',
        ]
      },
      {
        subtitle: '전략가 (Controller)',
        items: [
          '스모크로 시야 차단',
          '사이트 장악을 도움',
          '팀의 전략적 핵심',
          '예: 오멘, 브림스톤, 바이퍼',
        ]
      },
      {
        subtitle: '감시자 (Sentinel)',
        items: [
          '사이트 수비 전문',
          '트랩과 장치로 적 감지',
          '플랭크 방지 역할',
          '예: 킬조이, 사이퍼, 세이지',
        ]
      }
    ]
  },
  {
    id: 'aim',
    title: '에임 향상 팁',
    description: '조준 실력을 높이는 방법',
    icon: '🎯',
    content: [
      {
        subtitle: '기본 원칙',
        items: [
          '크로스헤어를 항상 머리 높이에 유지',
          '이동 중에는 사격하지 않기 (정확도 하락)',
          '스트레이핑 후 멈추고 사격',
          '버스트 사격 연습 (2~3발씩)',
        ]
      },
      {
        subtitle: '연습 방법',
        items: [
          '사격장에서 매일 10~15분 연습',
          '데스매치로 실전 감각 익히기',
          '에임랩 등 외부 프로그램 활용',
          '낮은 감도로 시작해서 점진적으로 조절',
        ]
      }
    ]
  },
  {
    id: 'communication',
    title: '팀 커뮤니케이션',
    description: '효과적인 팀 소통 방법',
    icon: '🎤',
    content: [
      {
        subtitle: '기본 콜아웃',
        items: [
          '적 위치를 정확하게 알려주기',
          '적 수와 체력 정보 공유',
          '스킬 사용 여부 알려주기',
          '짧고 명확하게 말하기',
        ]
      },
      {
        subtitle: '좋은 콜 예시',
        items: [
          '"A 숏 한 명, 체력 낮음"',
          '"B 메인 두 명 진입 중"',
          '"오멘 궁 사용함"',
          '"플랭크 주의, 미드에서 발소리"',
        ]
      }
    ]
  },
  {
    id: 'mindset',
    title: '멘탈 관리',
    description: '랭크 게임에서 멘탈 유지하는 방법',
    icon: '🧠',
    content: [
      {
        subtitle: '기본 마인드셋',
        items: [
          '한 라운드 실수에 연연하지 않기',
          '팀원 탓하지 않기',
          '연패 시 휴식 취하기',
          '자신의 플레이에 집중하기',
        ]
      },
      {
        subtitle: '실전 팁',
        items: [
          '3연패 후에는 잠시 쉬기',
          '틸트 오면 데스매치로 전환',
          '긍정적인 콜아웃 하기',
          '실수해도 "nt (nice try)" 해주기',
        ]
      }
    ]
  }
];

export default function GuidesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">초보자 가이드</h1>
      <p className="text-gray-400 mb-8">발로란트를 시작하는 분들을 위한 기초 가이드</p>

      <AdBanner slot="guides-top" format="horizontal" />

      <div className="mt-8 space-y-8">
        {guides.map((guide) => (
          <div key={guide.id} className="bg-[#1f2326] border border-gray-700 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">{guide.icon}</span>
              <div>
                <h2 className="text-xl font-semibold">{guide.title}</h2>
                <p className="text-gray-400 text-sm">{guide.description}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guide.content.map((section, i) => (
                <div key={i} className="bg-[#0f1923] rounded-lg p-4">
                  <h3 className="text-[#ff4655] font-medium mb-3">{section.subtitle}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, j) => (
                      <li key={j} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-gray-500">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-[#1f2326] border border-gray-700 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">다음 단계</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/agents" className="bg-[#0f1923] p-4 rounded-lg hover:bg-[#ff4655]/10 transition-colors">
            <h3 className="font-medium mb-1">요원 가이드 →</h3>
            <p className="text-sm text-gray-400">각 요원의 스킬과 플레이 방법</p>
          </Link>
          <Link href="/maps" className="bg-[#0f1923] p-4 rounded-lg hover:bg-[#ff4655]/10 transition-colors">
            <h3 className="font-medium mb-1">맵 전략 →</h3>
            <p className="text-sm text-gray-400">맵별 공격/수비 전략</p>
          </Link>
          <Link href="/meta" className="bg-[#0f1923] p-4 rounded-lg hover:bg-[#ff4655]/10 transition-colors">
            <h3 className="font-medium mb-1">메타 분석 →</h3>
            <p className="text-sm text-gray-400">현재 시즌 티어 리스트</p>
          </Link>
        </div>
      </div>

      <div className="mt-8">
        <AdBanner slot="guides-bottom" format="horizontal" />
      </div>
    </div>
  );
}
