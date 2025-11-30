import Link from 'next/link';
import AdBanner from '@/components/AdBanner';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '발로란트 도구',
  description: '발로란트 감도 계산기, 프로 선수 크로스헤어 코드 등 유용한 도구 모음',
  keywords: ['발로란트 감도', '발로란트 크로스헤어', '감도 계산기', '크로스헤어 코드'],
};

const tools = [
  {
    title: '감도 계산기',
    description: '다른 게임의 감도를 발로란트 감도로 변환',
    href: '/tools/sensitivity',
    icon: '🎯',
    features: ['CS:GO, 오버워치 등 지원', 'eDPI 계산', '프로 선수 감도 참고'],
  },
  {
    title: '크로스헤어 공유',
    description: '프로 선수들의 크로스헤어 코드',
    href: '/tools/crosshair',
    icon: '⊕',
    features: ['12+ 프로 선수 크로스헤어', '원클릭 복사', '역할별 필터'],
  },
  {
    title: '랜덤 요원 룰렛',
    description: '어떤 요원을 플레이할지 고민될 때!',
    href: '/tools/random-agent',
    icon: '🎰',
    features: ['역할별 필터', '애니메이션 효과', '요원 가이드 연결'],
  },
  {
    title: '경제 계산기',
    description: '바이/에코/포스바이 최적 전략 추천',
    href: '/tools/economy',
    icon: '💰',
    features: ['실시간 추천', '다음 라운드 예측', '경제 팁 제공'],
  },
];

export default function ToolsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">발로란트 도구</h1>
      <p className="text-gray-400 mb-8">게임 플레이에 도움이 되는 유용한 도구들</p>

      <AdBanner slot="tools-main-top" format="horizontal" />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <Link
            key={tool.title}
            href={tool.href}
            className="bg-[#1f2326] border border-gray-700 rounded-xl p-6 card-hover group"
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl">{tool.icon}</span>
              <div className="flex-1">
                <h2 className="text-xl font-semibold group-hover:text-[#ff4655] transition-colors">
                  {tool.title}
                </h2>
                <p className="text-gray-400 mt-1">{tool.description}</p>
                <ul className="mt-4 space-y-1">
                  {tool.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                      <span className="text-[#ff4655]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 추가 예정 도구 */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-500">추가 예정</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: '맵 밴픽 도우미', icon: '🗺️' },
            { title: '팀 조합 생성기', icon: '👥' },
            { title: '발로란트 퀴즈', icon: '❓' },
          ].map((tool) => (
            <div key={tool.title} className="bg-[#1f2326]/50 border border-gray-800 rounded-xl p-4 text-center">
              <span className="text-3xl opacity-50">{tool.icon}</span>
              <p className="text-gray-500 mt-2">{tool.title}</p>
              <p className="text-xs text-gray-600 mt-1">Coming Soon</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <AdBanner slot="tools-main-bottom" format="horizontal" />
      </div>
    </div>
  );
}
