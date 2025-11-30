import Link from 'next/link';
import AdBanner from '@/components/AdBanner';
import { agents } from '@/data/agents';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '요원 가이드',
  description: '발로란트 모든 요원의 스킬 활용법, 팁, 시너지, 카운터 정보를 확인하세요. 제트, 레이나, 소바, 오멘 등 22개 요원 완벽 가이드.',
  keywords: ['발로란트 요원', '발로란트 캐릭터', '제트 공략', '소바 공략', '오멘 공략'],
};

const roleColors: Record<string, string> = {
  '타격대': 'bg-red-500/20 text-red-400',
  '감시자': 'bg-green-500/20 text-green-400',
  '전략가': 'bg-purple-500/20 text-purple-400',
  '척후대': 'bg-blue-500/20 text-blue-400',
};

const roleDescriptions: Record<string, string> = {
  '타격대': '공격적인 플레이로 팀의 진입을 이끄는 역할',
  '감시자': '트랩과 장치로 사이트를 수비하는 역할',
  '전략가': '스모크와 시야 차단으로 팀을 지원하는 역할',
  '척후대': '정보 수집과 적 무력화로 팀을 지원하는 역할',
};

export default function AgentsPage() {
  const roles = ['타격대', '척후대', '전략가', '감시자'] as const;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">요원 가이드</h1>
      <p className="text-gray-400 mb-8">각 요원의 스킬 활용법과 팁을 확인하세요</p>

      <AdBanner slot="agents-top" format="horizontal" />

      {roles.map((role) => (
        <div key={role} className="mt-8">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <span className={`px-3 py-1 rounded text-sm ${roleColors[role]}`}>{role}</span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm mb-4">{roleDescriptions[role]}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {agents.filter(a => a.role === role).map((agent) => (
              <Link
                key={agent.id}
                href={`/agents/${agent.id}`}
                className="bg-[#1f2326] border border-gray-700 rounded-xl p-4 text-center card-hover group"
              >
                <div className="text-4xl mb-2">{agent.icon}</div>
                <h3 className="font-semibold group-hover:text-[#ff4655] transition-colors">{agent.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{agent.difficulty}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-8">
        <AdBanner slot="agents-bottom" format="horizontal" />
      </div>
    </div>
  );
}
