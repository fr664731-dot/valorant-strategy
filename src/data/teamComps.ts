export interface TeamComp {
  id: string;
  map: string;
  name: string;
  agents: string[];
  description: string;
  tier: 'S' | 'A' | 'B';
  playstyle: string;
  strengths: string[];
  weaknesses: string[];
}

export const teamComps: TeamComp[] = [
  // 어센트
  {
    id: 'ascent-1',
    map: '어센트',
    name: '기본 밸런스 조합',
    agents: ['제트', '소바', '오멘', '킬조이', '케이오'],
    description: '가장 안정적인 조합. 정보 수집과 사이트 장악력이 뛰어납니다.',
    tier: 'S',
    playstyle: '밸런스',
    strengths: ['안정적인 정보 수집', '강력한 사이트 수비', '다양한 전략 가능'],
    weaknesses: ['개인 캐리력 부족', '팀 플레이 필수']
  },
  {
    id: 'ascent-2',
    map: '어센트',
    name: '더블 척후대 조합',
    agents: ['제트', '소바', '페이드', '오멘', '킬조이'],
    description: '정보 수집에 특화된 조합. 적 위치를 완벽하게 파악할 수 있습니다.',
    tier: 'A',
    playstyle: '정보 중심',
    strengths: ['최고의 정보 수집', '안전한 진입', '리텍 대응 우수'],
    weaknesses: ['플래시 부족', '진입 지원 약함']
  },
  // 바인드
  {
    id: 'bind-1',
    map: '바인드',
    name: '더블 컨트롤러 조합',
    agents: ['레이즈', '스카이', '브림스톤', '바이퍼', '사이퍼'],
    description: '바인드 특성에 맞춘 조합. 더블 컨트롤러로 완벽한 사이트 장악.',
    tier: 'S',
    playstyle: '사이트 장악',
    strengths: ['완벽한 스모크 커버', '강력한 수비', '텔레포터 활용'],
    weaknesses: ['기동성 부족', '타격대 1명']
  },
  {
    id: 'bind-2',
    map: '바인드',
    name: '러쉬 조합',
    agents: ['레이즈', '피닉스', '스카이', '브림스톤', '바이퍼'],
    description: '빠른 사이트 진입에 특화된 조합. 훅카 러쉬에 강력합니다.',
    tier: 'A',
    playstyle: '공격적',
    strengths: ['빠른 진입', '강력한 플래시', '클리어링 우수'],
    weaknesses: ['수비 약함', '감시자 없음']
  },
  // 헤이븐
  {
    id: 'haven-1',
    map: '헤이븐',
    name: '3사이트 대응 조합',
    agents: ['제트', '소바', '오멘', '킬조이', '브리치'],
    description: '3개 사이트 로테이션에 유연하게 대응 가능한 조합.',
    tier: 'S',
    playstyle: '밸런스',
    strengths: ['유연한 로테이션', '강력한 정보 수집', '진입 지원 우수'],
    weaknesses: ['개인 캐리력 부족']
  },
  {
    id: 'haven-2',
    map: '헤이븐',
    name: '수비 특화 조합',
    agents: ['제트', '소바', '오멘', '킬조이', '사이퍼'],
    description: '더블 감시자로 수비에 특화된 조합.',
    tier: 'A',
    playstyle: '수비 중심',
    strengths: ['철벽 수비', '완벽한 정보 수집', '플랭크 방지'],
    weaknesses: ['공격 진입 약함', '플래시 없음']
  },
  // 스플릿
  {
    id: 'split-1',
    map: '스플릿',
    name: '수직 플레이 조합',
    agents: ['레이즈', '스카이', '오멘', '사이퍼', '브리치'],
    description: '스플릿의 수직 구조를 활용한 조합.',
    tier: 'S',
    playstyle: '수직 활용',
    strengths: ['수직 플레이 강점', '강력한 진입', '플랭크 방지'],
    weaknesses: ['오퍼 대응 약함']
  },
  // 아이스박스
  {
    id: 'icebox-1',
    map: '아이스박스',
    name: '바이퍼 필수 조합',
    agents: ['제트', '소바', '바이퍼', '세이지', '케이오'],
    description: '아이스박스에서 바이퍼는 필수. 세이지 벽 활용.',
    tier: 'S',
    playstyle: '사이트 분리',
    strengths: ['완벽한 사이트 분리', '세이지 벽 활용', '수직 플레이'],
    weaknesses: ['바이퍼 의존도 높음']
  },
  // 브리즈
  {
    id: 'breeze-1',
    map: '브리즈',
    name: '오퍼 중심 조합',
    agents: ['제트', '소바', '바이퍼', '킬조이', '케이오'],
    description: '넓은 맵에서 오퍼레이터를 활용한 조합.',
    tier: 'S',
    playstyle: '장거리 전투',
    strengths: ['오퍼 활용 최적', '넓은 스모크 커버', '정보 수집 우수'],
    weaknesses: ['근접전 약함']
  },
  // 프랙처
  {
    id: 'fracture-1',
    map: '프랙처',
    name: '핀서 공격 조합',
    agents: ['레이즈', '브리치', '브림스톤', '킬조이', '페이드'],
    description: '양쪽에서 동시 진입하는 핀서 공격에 특화.',
    tier: 'S',
    playstyle: '핀서 공격',
    strengths: ['양방향 압박', '강력한 진입 지원', '수비 대응'],
    weaknesses: ['팀 소통 필수']
  },
  // 펄
  {
    id: 'pearl-1',
    map: '펄',
    name: '미드 컨트롤 조합',
    agents: ['제트', '페이드', '오멘', '킬조이', '케이오'],
    description: '미드 컨트롤에 특화된 전통적인 조합.',
    tier: 'S',
    playstyle: '미드 중심',
    strengths: ['미드 장악력', '유연한 전략', '안정적인 수비'],
    weaknesses: ['더블 컨트롤러 상대 약함']
  },
  // 로터스
  {
    id: 'lotus-1',
    map: '로터스',
    name: '회전문 활용 조합',
    agents: ['제트', '페이드', '오멘', '킬조이', '케이오'],
    description: '회전문을 활용한 빠른 로테이션 조합.',
    tier: 'S',
    playstyle: '빠른 로테이션',
    strengths: ['빠른 로테이션', '3사이트 대응', '정보 수집 우수'],
    weaknesses: ['회전문 소리 노출']
  },
  // 선셋
  {
    id: 'sunset-1',
    map: '선셋',
    name: '클로브 활용 조합',
    agents: ['제트', '페이드', '클로브', '킬조이', '케이오'],
    description: '클로브의 독특한 능력을 활용한 조합.',
    tier: 'S',
    playstyle: '공격적',
    strengths: ['클로브 부활 활용', '공격적 플레이', '안정적 수비'],
    weaknesses: ['클로브 숙련도 필요']
  }
];

export function getTeamCompsByMap(map: string): TeamComp[] {
  return teamComps.filter(comp => comp.map === map);
}
