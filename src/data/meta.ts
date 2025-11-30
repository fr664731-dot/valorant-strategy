export interface AgentMeta {
  name: string;
  role: string;
  tier: 'S' | 'A' | 'B' | 'C';
  pickRate: string;
  winRate: string;
  trend: 'up' | 'down' | 'stable';
  note?: string;
}

export const agentMeta: AgentMeta[] = [
  // S 티어
  { name: '제트', role: '타격대', tier: 'S', pickRate: '28%', winRate: '52%', trend: 'stable', note: '여전히 최고의 타격대' },
  { name: '오멘', role: '전략가', tier: 'S', pickRate: '45%', winRate: '51%', trend: 'stable', note: '가장 범용적인 전략가' },
  { name: '소바', role: '척후대', tier: 'S', pickRate: '35%', winRate: '50%', trend: 'stable', note: '정보 수집의 왕' },
  { name: '킬조이', role: '감시자', tier: 'S', pickRate: '42%', winRate: '51%', trend: 'stable', note: '수비의 핵심' },
  { name: '바이퍼', role: '전략가', tier: 'S', pickRate: '30%', winRate: '52%', trend: 'up', note: '특정 맵 필수 픽' },
  
  // A 티어
  { name: '레이즈', role: '타격대', tier: 'A', pickRate: '22%', winRate: '50%', trend: 'stable' },
  { name: '스카이', role: '척후대', tier: 'A', pickRate: '25%', winRate: '49%', trend: 'stable' },
  { name: '사이퍼', role: '감시자', tier: 'A', pickRate: '18%', winRate: '50%', trend: 'up' },
  { name: '케이오', role: '척후대', tier: 'A', pickRate: '20%', winRate: '49%', trend: 'up', note: '카운터 픽으로 상승' },
  { name: '페이드', role: '척후대', tier: 'A', pickRate: '22%', winRate: '50%', trend: 'stable' },
  { name: '브리치', role: '척후대', tier: 'A', pickRate: '15%', winRate: '49%', trend: 'stable' },
  { name: '게코', role: '척후대', tier: 'A', pickRate: '12%', winRate: '48%', trend: 'up' },
  
  // B 티어
  { name: '레이나', role: '타격대', tier: 'B', pickRate: '35%', winRate: '47%', trend: 'down', note: '높은 픽률, 낮은 승률' },
  { name: '브림스톤', role: '전략가', tier: 'B', pickRate: '15%', winRate: '49%', trend: 'stable' },
  { name: '세이지', role: '감시자', tier: 'B', pickRate: '20%', winRate: '48%', trend: 'stable' },
  { name: '네온', role: '타격대', tier: 'B', pickRate: '10%', winRate: '48%', trend: 'stable' },
  { name: '아이소', role: '타격대', tier: 'B', pickRate: '8%', winRate: '47%', trend: 'down' },
  { name: '클로브', role: '전략가', tier: 'B', pickRate: '12%', winRate: '48%', trend: 'up', note: '신규 요원, 상승 중' },
  { name: '하버', role: '전략가', tier: 'B', pickRate: '8%', winRate: '47%', trend: 'stable' },
  
  // C 티어
  { name: '피닉스', role: '타격대', tier: 'C', pickRate: '8%', winRate: '46%', trend: 'down' },
  { name: '요루', role: '타격대', tier: 'C', pickRate: '5%', winRate: '47%', trend: 'stable', note: '고수용 요원' },
  { name: '아스트라', role: '전략가', tier: 'C', pickRate: '8%', winRate: '47%', trend: 'down', note: '너프 후 하락' },
];

export const metaInsights = {
  trends: [
    '제트의 지속적인 높은 픽률 유지',
    '더블 컨트롤러 조합 증가 추세',
    '킬조이 너프 이후에도 여전히 강세',
    '케이오 픽률 상승 중 - 카운터 픽으로 인기',
    '클로브 출시 후 전략가 메타 변화',
    '페이드가 소바 대안으로 자리잡음'
  ],
  recommendations: {
    rankUp: ['레이나', '제트', '레이즈'],
    teamPlay: ['소바', '킬조이', '오멘'],
    hidden: ['바이퍼', '사이퍼', '브리치']
  }
};
