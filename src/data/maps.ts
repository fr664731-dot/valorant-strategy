export interface MapStrategy {
  title: string;
  side: '공격' | '수비';
  description: string;
  agents: string[];
  difficulty: '쉬움' | '보통' | '어려움';
}

export interface GameMap {
  id: string;
  name: string;
  icon: string;
  description: string;
  difficulty: '쉬움' | '보통' | '어려움';
  sites: string[];
  callouts: { name: string; description: string }[];
  strategies: MapStrategy[];
  tips: string[];
  recommendedAgents: string[];
}

export const maps: GameMap[] = [
  {
    id: 'ascent',
    name: '어센트',
    icon: '🏛️',
    difficulty: '보통',
    description: '이탈리아 베니스를 배경으로 한 맵. 중앙 미드 컨트롤이 매우 중요하며, 두 사이트 모두 문이 있어 전략적 플레이가 가능합니다.',
    sites: ['A', 'B'],
    callouts: [
      { name: 'A 메인', description: 'A 사이트로 가는 주요 진입로' },
      { name: 'A 숏', description: 'A 사이트 측면 진입로' },
      { name: 'A 헤븐', description: 'A 사이트 위쪽 고지대' },
      { name: '미드', description: '맵 중앙 지역' },
      { name: '마켓', description: '미드에서 B로 가는 통로' },
      { name: 'B 메인', description: 'B 사이트로 가는 주요 진입로' },
      { name: 'B 백사이트', description: 'B 사이트 뒤쪽 지역' },
    ],
    strategies: [
      {
        title: 'A 사이트 기본 공격',
        side: '공격',
        description: 'A 메인과 A 숏을 동시에 압박합니다. 스모크로 헤븐과 CT를 막고, 플래시와 함께 진입합니다. 소바 리콘으로 사이트 내부를 스캔한 후 진입하면 더 안전합니다.',
        agents: ['제트', '소바', '오멘', '킬조이', '케이오'],
        difficulty: '보통'
      },
      {
        title: 'B 사이트 스플릿 공격',
        side: '공격',
        description: 'B 메인과 미드를 통해 마켓으로 분산 진입합니다. 적의 로테이션을 늦추고 크로스파이어를 만들어 사이트를 장악합니다.',
        agents: ['레이즈', '스카이', '오멘', '킬조이', '브리치'],
        difficulty: '어려움'
      },
      {
        title: '미드 컨트롤 공격',
        side: '공격',
        description: '미드를 먼저 장악하여 A와 B 모두 위협합니다. 미드 컨트롤 후 적의 로테이션을 보고 약한 사이트로 진입합니다.',
        agents: ['제트', '소바', '오멘', '사이퍼', '브리치'],
        difficulty: '어려움'
      },
      {
        title: 'A 사이트 수비',
        side: '수비',
        description: '한 명은 헤븐, 한 명은 사이트에서 크로스파이어를 구축합니다. 킬조이 장치로 A 메인을 감시하고, 정보 수집 후 리텍을 준비합니다.',
        agents: ['킬조이', '사이퍼', '오멘'],
        difficulty: '보통'
      },
      {
        title: 'B 사이트 수비',
        side: '수비',
        description: 'CT와 백사이트에서 앵글을 잡습니다. 스위치를 활용해 적 진입을 지연시키고, 마켓 플랭크를 주의합니다.',
        agents: ['킬조이', '사이퍼', '오멘'],
        difficulty: '보통'
      },
      {
        title: '미드 수비',
        side: '수비',
        description: '미드 컨트롤을 유지하여 적의 분산 공격을 방지합니다. 소바 드론이나 리콘으로 미드 정보를 수집합니다.',
        agents: ['소바', '오멘', '사이퍼'],
        difficulty: '어려움'
      }
    ],
    tips: [
      '미드 컨트롤이 이 맵의 핵심입니다.',
      'A와 B 사이트 모두 문이 있어 소리로 정보 수집이 가능합니다.',
      '헤븐은 강력한 포지션이지만 플래시에 취약합니다.',
      '소바 리콘 라인업을 외우면 큰 도움이 됩니다.',
      '킬조이나 사이퍼가 있으면 수비가 훨씬 안정적입니다.'
    ],
    recommendedAgents: ['소바', '오멘', '킬조이', '제트', '케이오']
  },
  {
    id: 'bind',
    name: '바인드',
    icon: '🏜️',
    difficulty: '보통',
    description: '모로코를 배경으로 한 맵. 미드가 없고 텔레포터가 있는 독특한 구조입니다. 텔레포터를 활용한 빠른 로테이션이 핵심입니다.',
    sites: ['A', 'B'],
    callouts: [
      { name: 'A 숏', description: 'A 사이트 짧은 진입로' },
      { name: 'A 롱', description: 'A 사이트 긴 진입로' },
      { name: '샤워', description: 'A 사이트 내부 구조물' },
      { name: '훅카', description: 'B 사이트로 가는 실내 통로' },
      { name: 'B 롱', description: 'B 사이트 긴 진입로' },
      { name: '텔레포터', description: 'A-B 연결 텔레포터' },
    ],
    strategies: [
      {
        title: 'A 사이트 텔레포터 활용',
        side: '공격',
        description: 'A 숏을 압박한 후 텔레포터로 B 롱을 기습합니다. 적의 로테이션을 혼란에 빠뜨리고 약한 사이트를 공략합니다.',
        agents: ['레이즈', '스카이', '브림스톤', '바이퍼', '사이퍼'],
        difficulty: '보통'
      },
      {
        title: 'B 사이트 훅카 러쉬',
        side: '공격',
        description: '훅카를 통한 빠른 B 사이트 진입입니다. 스모크와 플래시 타이밍이 중요하며, 레이즈 수류탄으로 코너를 클리어합니다.',
        agents: ['레이즈', '스카이', '브림스톤', '바이퍼', '브리치'],
        difficulty: '보통'
      },
      {
        title: 'A 사이트 수비',
        side: '수비',
        description: '샤워와 헤븐에서 크로스파이어를 구축합니다. 트랩으로 A 숏을 감시하고 텔레포터 소리에 주의합니다.',
        agents: ['사이퍼', '바이퍼', '브림스톤'],
        difficulty: '보통'
      },
      {
        title: 'B 사이트 수비',
        side: '수비',
        description: '훅카와 B 롱을 동시에 감시합니다. 킬조이 터렛으로 훅카를 감시하고, 바이퍼 독으로 진입을 지연시킵니다.',
        agents: ['킬조이', '바이퍼', '브림스톤'],
        difficulty: '보통'
      }
    ],
    tips: [
      '텔레포터 소리를 잘 들으면 적의 로테이션을 파악할 수 있습니다.',
      '미드가 없어서 플랭크 루트가 제한적입니다.',
      '바이퍼가 매우 강력한 맵입니다.',
      '훅카는 좁아서 수류탄 스킬이 효과적입니다.',
      '더블 컨트롤러 조합이 추천됩니다.'
    ],
    recommendedAgents: ['바이퍼', '브림스톤', '레이즈', '스카이', '사이퍼']
  },
  {
    id: 'haven',
    name: '헤이븐',
    icon: '🕌',
    difficulty: '어려움',
    description: '부탄을 배경으로 한 맵. 유일하게 3개의 사이트가 있어 수비 로테이션이 어렵습니다. 정보 수집과 빠른 로테이션이 핵심입니다.',
    sites: ['A', 'B', 'C'],
    callouts: [
      { name: 'A 롱', description: 'A 사이트 긴 진입로' },
      { name: 'A 숏', description: 'A 사이트 짧은 진입로' },
      { name: 'A 헤븐', description: 'A 사이트 위쪽 고지대' },
      { name: 'B 사이트', description: '중앙 사이트' },
      { name: 'C 롱', description: 'C 사이트 긴 진입로' },
      { name: 'C 숏', description: 'C 사이트 짧은 진입로 (개러지)' },
      { name: '개러지', description: 'C 사이트로 가는 실내 통로' },
    ],
    strategies: [
      {
        title: 'A 사이트 공격',
        side: '공격',
        description: 'A 롱과 A 숏을 동시에 압박합니다. 스모크로 헤븐을 막고 플래시와 함께 진입합니다.',
        agents: ['제트', '소바', '오멘', '킬조이', '브리치'],
        difficulty: '보통'
      },
      {
        title: 'C 사이트 개러지 공격',
        side: '공격',
        description: '개러지를 통해 C 사이트로 진입합니다. 좁은 공간이라 수류탄 스킬이 효과적입니다.',
        agents: ['레이즈', '스카이', '오멘', '킬조이', '브리치'],
        difficulty: '보통'
      },
      {
        title: 'B 사이트 러쉬',
        side: '공격',
        description: 'B 사이트로 빠르게 러쉬합니다. 스모크로 CT와 백사이트를 막고 진입합니다.',
        agents: ['제트', '소바', '오멘', '킬조이', '브리치'],
        difficulty: '쉬움'
      },
      {
        title: '3사이트 수비 배치',
        side: '수비',
        description: '각 사이트에 1명씩 배치하고 2명은 로테이션 담당입니다. 정보 수집이 매우 중요합니다.',
        agents: ['소바', '오멘', '킬조이', '사이퍼', '브리치'],
        difficulty: '어려움'
      }
    ],
    tips: [
      '3개 사이트라서 수비 로테이션이 어렵습니다.',
      '정보 수집 요원이 매우 중요합니다.',
      '개러지는 좁아서 수류탄 스킬이 효과적입니다.',
      'C 롱은 오퍼레이터가 강력한 포지션입니다.',
      '페이크 플레이가 효과적인 맵입니다.'
    ],
    recommendedAgents: ['소바', '오멘', '킬조이', '브리치', '제트']
  },
  {
    id: 'split',
    name: '스플릿',
    icon: '🏯',
    difficulty: '어려움',
    description: '일본 도쿄를 배경으로 한 맵. 수직 구조가 많고 미드 컨트롤이 중요합니다. 좁은 통로가 많아 수비가 유리한 맵입니다.',
    sites: ['A', 'B'],
    callouts: [
      { name: 'A 메인', description: 'A 사이트 주요 진입로' },
      { name: 'A 헤븐', description: 'A 사이트 위쪽 고지대' },
      { name: 'A 램프', description: 'A 사이트 경사로' },
      { name: '미드', description: '맵 중앙 지역' },
      { name: '벤트', description: '미드에서 B로 가는 환기구' },
      { name: 'B 메인', description: 'B 사이트 주요 진입로' },
      { name: 'B 헤븐', description: 'B 사이트 위쪽 고지대' },
    ],
    strategies: [
      {
        title: 'A 사이트 공격',
        side: '공격',
        description: 'A 메인과 A 램프를 동시에 압박합니다. 스모크로 헤븐과 CT를 막고 진입합니다.',
        agents: ['레이즈', '스카이', '오멘', '사이퍼', '브리치'],
        difficulty: '어려움'
      },
      {
        title: 'B 사이트 공격',
        side: '공격',
        description: 'B 메인과 미드 벤트를 통해 진입합니다. 좁은 통로라 플래시가 효과적입니다.',
        agents: ['레이즈', '스카이', '오멘', '사이퍼', '브리치'],
        difficulty: '어려움'
      },
      {
        title: '미드 컨트롤',
        side: '공격',
        description: '미드를 장악하여 A와 B 모두 위협합니다. 미드 컨트롤 후 약한 사이트로 진입합니다.',
        agents: ['제트', '소바', '오멘', '사이퍼', '브리치'],
        difficulty: '어려움'
      },
      {
        title: 'A 사이트 수비',
        side: '수비',
        description: '헤븐과 사이트에서 크로스파이어를 구축합니다. 램프를 통한 플랭크에 주의합니다.',
        agents: ['사이퍼', '오멘', '브리치'],
        difficulty: '보통'
      },
      {
        title: 'B 사이트 수비',
        side: '수비',
        description: '헤븐과 백사이트에서 앵글을 잡습니다. 벤트를 통한 진입에 주의합니다.',
        agents: ['킬조이', '오멘', '브리치'],
        difficulty: '보통'
      }
    ],
    tips: [
      '수직 구조가 많아 고지대 활용이 중요합니다.',
      '미드 컨트롤이 핵심입니다.',
      '좁은 통로가 많아 수비가 유리합니다.',
      '레이즈 색백이 매우 효과적인 맵입니다.',
      '사이퍼나 킬조이로 플랭크를 방지하세요.'
    ],
    recommendedAgents: ['레이즈', '오멘', '사이퍼', '브리치', '스카이']
  },
  {
    id: 'icebox',
    name: '아이스박스',
    icon: '❄️',
    difficulty: '어려움',
    description: '러시아 북극 기지를 배경으로 한 맵. 수직 구조가 매우 많고 바이퍼가 필수인 맵입니다. 다양한 고지대 활용이 핵심입니다.',
    sites: ['A', 'B'],
    callouts: [
      { name: 'A 사이트', description: '컨테이너가 많은 A 사이트' },
      { name: 'A 벨트', description: 'A 사이트 컨베이어 벨트' },
      { name: '래프터', description: 'A 사이트 위쪽 구조물' },
      { name: '미드', description: '맵 중앙 지역' },
      { name: '튜브', description: '미드에서 B로 가는 통로' },
      { name: 'B 사이트', description: '노란 컨테이너가 있는 B 사이트' },
      { name: 'B 그린', description: 'B 사이트 녹색 컨테이너' },
    ],
    strategies: [
      {
        title: 'A 사이트 공격',
        side: '공격',
        description: '바이퍼 벽으로 사이트를 분리하고 진입합니다. 래프터와 벨트를 클리어한 후 설치합니다.',
        agents: ['제트', '소바', '바이퍼', '세이지', '케이오'],
        difficulty: '어려움'
      },
      {
        title: 'B 사이트 공격',
        side: '공격',
        description: '튜브와 B 메인을 통해 진입합니다. 바이퍼 스모크로 시야를 차단하고 진입합니다.',
        agents: ['제트', '소바', '바이퍼', '세이지', '케이오'],
        difficulty: '어려움'
      },
      {
        title: 'A 사이트 수비',
        side: '수비',
        description: '래프터와 벨트에서 크로스파이어를 구축합니다. 세이지 벽으로 진입을 지연시킵니다.',
        agents: ['바이퍼', '세이지', '소바'],
        difficulty: '보통'
      },
      {
        title: 'B 사이트 수비',
        side: '수비',
        description: '그린과 백사이트에서 앵글을 잡습니다. 튜브를 통한 진입에 주의합니다.',
        agents: ['바이퍼', '킬조이', '소바'],
        difficulty: '보통'
      }
    ],
    tips: [
      '바이퍼가 거의 필수인 맵입니다.',
      '수직 구조가 많아 고지대 활용이 중요합니다.',
      '세이지 벽이 매우 효과적입니다.',
      '소바 리콘 라인업이 중요합니다.',
      '제트나 레이즈의 기동성이 유용합니다.'
    ],
    recommendedAgents: ['바이퍼', '소바', '세이지', '제트', '케이오']
  },
  {
    id: 'breeze',
    name: '브리즈',
    icon: '🏝️',
    difficulty: '보통',
    description: '카리브해 섬을 배경으로 한 맵. 넓은 오픈 공간이 많아 오퍼레이터가 강력합니다. 바이퍼가 필수인 맵입니다.',
    sites: ['A', 'B'],
    callouts: [
      { name: 'A 홀', description: 'A 사이트로 가는 넓은 홀' },
      { name: 'A 숍', description: 'A 사이트 옆 상점 건물' },
      { name: 'A 피라미드', description: 'A 사이트 중앙 구조물' },
      { name: '미드', description: '맵 중앙 지역' },
      { name: '미드 도어', description: '미드 중앙 문' },
      { name: 'B 터널', description: 'B 사이트로 가는 터널' },
      { name: 'B 백사이트', description: 'B 사이트 뒤쪽 지역' },
    ],
    strategies: [
      {
        title: 'A 사이트 공격',
        side: '공격',
        description: '바이퍼 벽으로 A 홀을 분리하고 진입합니다. 피라미드 주변을 클리어한 후 설치합니다.',
        agents: ['제트', '소바', '바이퍼', '킬조이', '케이오'],
        difficulty: '보통'
      },
      {
        title: 'B 사이트 공격',
        side: '공격',
        description: 'B 터널과 미드를 통해 진입합니다. 바이퍼 스모크로 시야를 차단합니다.',
        agents: ['제트', '소바', '바이퍼', '킬조이', '케이오'],
        difficulty: '보통'
      },
      {
        title: 'A 사이트 수비',
        side: '수비',
        description: '피라미드와 숍에서 크로스파이어를 구축합니다. 오퍼레이터가 강력한 포지션입니다.',
        agents: ['바이퍼', '킬조이', '소바'],
        difficulty: '보통'
      },
      {
        title: 'B 사이트 수비',
        side: '수비',
        description: '백사이트와 터널 입구에서 앵글을 잡습니다. 바이퍼 원웨이가 효과적입니다.',
        agents: ['바이퍼', '킬조이', '소바'],
        difficulty: '보통'
      }
    ],
    tips: [
      '바이퍼가 거의 필수인 맵입니다.',
      '넓은 공간이 많아 오퍼레이터가 강력합니다.',
      '미드 도어 컨트롤이 중요합니다.',
      '소바 리콘 라인업이 매우 유용합니다.',
      '제트의 기동성이 넓은 맵에서 빛납니다.'
    ],
    recommendedAgents: ['바이퍼', '소바', '킬조이', '제트', '케이오']
  },
  {
    id: 'fracture',
    name: '프랙처',
    icon: '🔬',
    difficulty: '어려움',
    description: '미국 뉴멕시코 연구소를 배경으로 한 맵. H자 구조로 공격팀이 양쪽에서 시작합니다. 독특한 구조로 전략이 다양합니다.',
    sites: ['A', 'B'],
    callouts: [
      { name: 'A 메인', description: 'A 사이트 주요 진입로' },
      { name: 'A 드롭', description: 'A 사이트 낙하 지점' },
      { name: 'A 로프', description: 'A 사이트 로프 지역' },
      { name: '아케이드', description: '맵 중앙 아케이드' },
      { name: 'B 메인', description: 'B 사이트 주요 진입로' },
      { name: 'B 타워', description: 'B 사이트 타워' },
      { name: 'B 아케이드', description: 'B 사이트 아케이드 연결' },
    ],
    strategies: [
      {
        title: 'A 사이트 핀서 공격',
        side: '공격',
        description: 'A 메인과 A 드롭에서 동시에 진입합니다. 양쪽에서 압박하여 수비를 무너뜨립니다.',
        agents: ['레이즈', '브리치', '브림스톤', '킬조이', '페이드'],
        difficulty: '보통'
      },
      {
        title: 'B 사이트 핀서 공격',
        side: '공격',
        description: 'B 메인과 B 아케이드에서 동시에 진입합니다. 타워를 먼저 클리어합니다.',
        agents: ['레이즈', '브리치', '브림스톤', '킬조이', '페이드'],
        difficulty: '보통'
      },
      {
        title: 'A 사이트 수비',
        side: '수비',
        description: '양쪽 진입로를 모두 감시해야 합니다. 킬조이 장치로 한쪽을 감시합니다.',
        agents: ['킬조이', '브림스톤', '브리치'],
        difficulty: '어려움'
      },
      {
        title: 'B 사이트 수비',
        side: '수비',
        description: '타워와 메인을 동시에 감시합니다. 사이퍼 트랩으로 플랭크를 방지합니다.',
        agents: ['사이퍼', '브림스톤', '브리치'],
        difficulty: '어려움'
      }
    ],
    tips: [
      '공격팀이 양쪽에서 시작하는 독특한 맵입니다.',
      '수비가 어려운 맵이라 정보 수집이 중요합니다.',
      '브리치가 매우 강력한 맵입니다.',
      '킬조이나 사이퍼로 플랭크를 방지하세요.',
      '로프를 활용한 빠른 로테이션이 가능합니다.'
    ],
    recommendedAgents: ['브리치', '브림스톤', '킬조이', '레이즈', '페이드']
  },
  {
    id: 'pearl',
    name: '펄',
    icon: '🌊',
    difficulty: '보통',
    description: '포르투갈 리스본 수중 도시를 배경으로 한 맵. 전통적인 3레인 구조로 미드 컨트롤이 중요합니다.',
    sites: ['A', 'B'],
    callouts: [
      { name: 'A 메인', description: 'A 사이트 주요 진입로' },
      { name: 'A 아트', description: 'A 사이트 미술관 지역' },
      { name: '미드', description: '맵 중앙 지역' },
      { name: '미드 플라자', description: '미드 광장 지역' },
      { name: 'B 메인', description: 'B 사이트 주요 진입로' },
      { name: 'B 링크', description: 'B 사이트 연결 통로' },
      { name: 'B 홀', description: 'B 사이트 홀' },
    ],
    strategies: [
      {
        title: 'A 사이트 공격',
        side: '공격',
        description: 'A 메인과 A 아트를 통해 진입합니다. 스모크로 시야를 차단하고 진입합니다.',
        agents: ['제트', '페이드', '오멘', '킬조이', '케이오'],
        difficulty: '보통'
      },
      {
        title: 'B 사이트 공격',
        side: '공격',
        description: 'B 메인과 B 링크를 통해 진입합니다. 미드 컨트롤 후 B로 진입하면 효과적입니다.',
        agents: ['제트', '페이드', '오멘', '킬조이', '케이오'],
        difficulty: '보통'
      },
      {
        title: '미드 컨트롤',
        side: '공격',
        description: '미드를 장악하여 A와 B 모두 위협합니다. 미드 플라자 컨트롤이 핵심입니다.',
        agents: ['제트', '페이드', '오멘', '킬조이', '케이오'],
        difficulty: '어려움'
      },
      {
        title: 'A 사이트 수비',
        side: '수비',
        description: '아트와 사이트에서 크로스파이어를 구축합니다. 미드 플랭크에 주의합니다.',
        agents: ['킬조이', '오멘', '페이드'],
        difficulty: '보통'
      },
      {
        title: 'B 사이트 수비',
        side: '수비',
        description: '홀과 링크에서 앵글을 잡습니다. 미드 컨트롤을 유지합니다.',
        agents: ['킬조이', '오멘', '페이드'],
        difficulty: '보통'
      }
    ],
    tips: [
      '전통적인 3레인 구조의 맵입니다.',
      '미드 컨트롤이 매우 중요합니다.',
      '페이드가 강력한 맵입니다.',
      '오멘의 텔레포트가 유용합니다.',
      '킬조이로 플랭크를 방지하세요.'
    ],
    recommendedAgents: ['페이드', '오멘', '킬조이', '제트', '케이오']
  },
  {
    id: 'lotus',
    name: '로터스',
    icon: '🪷',
    difficulty: '어려움',
    description: '인도를 배경으로 한 맵. 3개의 사이트와 회전문이 있는 독특한 구조입니다. 로테이션이 빠르지만 소리에 주의해야 합니다.',
    sites: ['A', 'B', 'C'],
    callouts: [
      { name: 'A 메인', description: 'A 사이트 주요 진입로' },
      { name: 'A 루비', description: 'A 사이트 루비 지역' },
      { name: 'B 메인', description: 'B 사이트 주요 진입로' },
      { name: 'B 필러', description: 'B 사이트 기둥 지역' },
      { name: 'C 메인', description: 'C 사이트 주요 진입로' },
      { name: 'C 홀', description: 'C 사이트 홀' },
      { name: '회전문', description: '사이트 간 연결 회전문' },
    ],
    strategies: [
      {
        title: 'A 사이트 공격',
        side: '공격',
        description: 'A 메인을 통해 진입합니다. 회전문을 활용한 플랭크에 주의합니다.',
        agents: ['제트', '페이드', '오멘', '킬조이', '케이오'],
        difficulty: '보통'
      },
      {
        title: 'B 사이트 공격',
        side: '공격',
        description: 'B 메인을 통해 진입합니다. 필러 주변을 클리어한 후 설치합니다.',
        agents: ['제트', '페이드', '오멘', '킬조이', '케이오'],
        difficulty: '보통'
      },
      {
        title: 'C 사이트 공격',
        side: '공격',
        description: 'C 메인과 C 홀을 통해 진입합니다. 회전문 소리에 주의합니다.',
        agents: ['제트', '페이드', '오멘', '킬조이', '케이오'],
        difficulty: '보통'
      },
      {
        title: '3사이트 수비',
        side: '수비',
        description: '각 사이트에 배치하고 회전문을 활용한 빠른 로테이션을 합니다.',
        agents: ['킬조이', '오멘', '페이드', '케이오', '사이퍼'],
        difficulty: '어려움'
      }
    ],
    tips: [
      '3개 사이트가 있어 수비 로테이션이 중요합니다.',
      '회전문 소리로 적의 움직임을 파악할 수 있습니다.',
      '페이드가 강력한 맵입니다.',
      '케이오로 적 능력을 억제하세요.',
      '회전문을 활용한 빠른 로테이션이 가능합니다.'
    ],
    recommendedAgents: ['페이드', '오멘', '킬조이', '케이오', '제트']
  },
  {
    id: 'sunset',
    name: '선셋',
    icon: '🌅',
    difficulty: '보통',
    description: '미국 로스앤젤레스를 배경으로 한 맵. 전통적인 구조에 독특한 미드 구조가 특징입니다.',
    sites: ['A', 'B'],
    callouts: [
      { name: 'A 메인', description: 'A 사이트 주요 진입로' },
      { name: 'A 엘보', description: 'A 사이트 꺾이는 지점' },
      { name: '미드', description: '맵 중앙 지역' },
      { name: '미드 탑', description: '미드 위쪽 지역' },
      { name: 'B 메인', description: 'B 사이트 주요 진입로' },
      { name: 'B 마켓', description: 'B 사이트 마켓 지역' },
    ],
    strategies: [
      {
        title: 'A 사이트 공격',
        side: '공격',
        description: 'A 메인을 통해 진입합니다. 엘보를 클리어한 후 사이트로 진입합니다.',
        agents: ['제트', '페이드', '오멘', '킬조이', '케이오'],
        difficulty: '보통'
      },
      {
        title: 'B 사이트 공격',
        side: '공격',
        description: 'B 메인과 마켓을 통해 진입합니다. 미드 컨트롤 후 진입하면 효과적입니다.',
        agents: ['제트', '페이드', '오멘', '킬조이', '케이오'],
        difficulty: '보통'
      },
      {
        title: 'A 사이트 수비',
        side: '수비',
        description: '엘보와 사이트에서 크로스파이어를 구축합니다.',
        agents: ['킬조이', '오멘', '페이드'],
        difficulty: '보통'
      },
      {
        title: 'B 사이트 수비',
        side: '수비',
        description: '마켓과 사이트에서 앵글을 잡습니다. 미드 플랭크에 주의합니다.',
        agents: ['킬조이', '오멘', '페이드'],
        difficulty: '보통'
      }
    ],
    tips: [
      '전통적인 구조로 배우기 쉬운 맵입니다.',
      '미드 컨트롤이 중요합니다.',
      '페이드가 강력한 맵입니다.',
      '킬조이로 플랭크를 방지하세요.',
      '클로브가 잘 맞는 맵입니다.'
    ],
    recommendedAgents: ['페이드', '오멘', '킬조이', '클로브', '제트']
  },
  {
    id: 'abyss',
    name: '어비스',
    icon: '🕳️',
    difficulty: '어려움',
    description: '심해를 배경으로 한 맵. 낙사 구간이 있는 독특한 맵으로 주의가 필요합니다.',
    sites: ['A', 'B'],
    callouts: [
      { name: 'A 메인', description: 'A 사이트 주요 진입로' },
      { name: 'A 브릿지', description: 'A 사이트 다리' },
      { name: '미드', description: '맵 중앙 지역' },
      { name: 'B 메인', description: 'B 사이트 주요 진입로' },
      { name: 'B 타워', description: 'B 사이트 타워' },
    ],
    strategies: [
      {
        title: 'A 사이트 공격',
        side: '공격',
        description: 'A 메인을 통해 진입합니다. 낙사 구간에 주의하며 진입합니다.',
        agents: ['제트', '페이드', '오멘', '킬조이', '케이오'],
        difficulty: '어려움'
      },
      {
        title: 'B 사이트 공격',
        side: '공격',
        description: 'B 메인을 통해 진입합니다. 타워를 클리어한 후 설치합니다.',
        agents: ['제트', '페이드', '오멘', '킬조이', '케이오'],
        difficulty: '어려움'
      }
    ],
    tips: [
      '낙사 구간이 있어 주의가 필요합니다.',
      '제트나 레이즈의 기동성이 유용합니다.',
      '적을 낙사시키는 플레이가 가능합니다.',
      '신중한 움직임이 필요한 맵입니다.'
    ],
    recommendedAgents: ['제트', '페이드', '오멘', '킬조이', '케이오']
  }
];

export function getMapById(id: string): GameMap | undefined {
  return maps.find(map => map.id === id);
}


// 추가 전략들을 기존 맵에 병합하는 함수
export const additionalStrategies: Record<string, MapStrategy[]> = {
  ascent: [
    {
      title: '미드 투 B 스플릿',
      side: '공격',
      description: '미드를 장악한 후 마켓과 B 메인에서 동시에 B 사이트로 진입합니다. 적의 로테이션을 분산시키는 고급 전략입니다.',
      agents: ['제트', '소바', '오멘', '킬조이', '브리치'],
      difficulty: '어려움'
    },
    {
      title: 'A 사이트 페이크 후 B 러쉬',
      side: '공격',
      description: 'A 메인에서 스킬을 사용해 페이크를 주고, 빠르게 B로 로테이션하여 러쉬합니다.',
      agents: ['제트', '소바', '오멘', '킬조이', '케이오'],
      difficulty: '보통'
    },
    {
      title: '3-2 수비 (미드 중심)',
      side: '수비',
      description: 'A에 1명, B에 1명, 미드에 3명을 배치하여 미드 컨트롤을 유지합니다. 정보에 따라 빠르게 로테이션합니다.',
      agents: ['소바', '오멘', '킬조이', '사이퍼', '제트'],
      difficulty: '어려움'
    }
  ],
  bind: [
    {
      title: '텔레포터 페이크',
      side: '공격',
      description: 'A 숏을 압박하다가 텔레포터로 B 롱을 기습합니다. 텔레포터 소리로 적을 혼란에 빠뜨립니다.',
      agents: ['레이즈', '스카이', '브림스톤', '바이퍼', '요루'],
      difficulty: '보통'
    },
    {
      title: 'B 사이트 5인 러쉬',
      side: '공격',
      description: '훅카와 B 롱에서 동시에 5명이 빠르게 B 사이트로 진입합니다. 스모크와 플래시 타이밍이 중요합니다.',
      agents: ['레이즈', '스카이', '브림스톤', '바이퍼', '브리치'],
      difficulty: '쉬움'
    },
    {
      title: '스택 수비 (B 중심)',
      side: '수비',
      description: 'B 사이트에 3명을 배치하고 A는 트랩으로 감시합니다. 훅카 러쉬에 강력하게 대응할 수 있습니다.',
      agents: ['사이퍼', '바이퍼', '브림스톤', '킬조이', '레이즈'],
      difficulty: '보통'
    }
  ],
  haven: [
    {
      title: 'C 사이트 개러지 스플릿',
      side: '공격',
      description: 'C 롱과 개러지에서 동시에 C 사이트로 진입합니다. 개러지는 좁아서 수류탄 스킬이 효과적입니다.',
      agents: ['레이즈', '브리치', '오멘', '킬조이', '소바'],
      difficulty: '보통'
    },
    {
      title: 'A-C 동시 압박',
      side: '공격',
      description: 'A와 C를 동시에 압박하여 B 수비수를 로테이션시킵니다. 약한 사이트로 진입합니다.',
      agents: ['제트', '소바', '오멘', '킬조이', '브리치'],
      difficulty: '어려움'
    },
    {
      title: '2-1-2 수비',
      side: '수비',
      description: 'A에 2명, B에 1명, C에 2명을 배치합니다. B 수비수는 양쪽 로테이션을 담당합니다.',
      agents: ['소바', '오멘', '킬조이', '사이퍼', '브리치'],
      difficulty: '보통'
    }
  ],
  split: [
    {
      title: 'A 사이트 램프 스플릿',
      side: '공격',
      description: 'A 메인과 A 램프에서 동시에 진입합니다. 램프에서 오는 팀원이 헤븐을 견제합니다.',
      agents: ['레이즈', '스카이', '오멘', '사이퍼', '브리치'],
      difficulty: '보통'
    },
    {
      title: '미드 장악 후 선택',
      side: '공격',
      description: '미드를 먼저 장악하고 벤트나 메일을 통해 A 또는 B로 진입합니다. 적의 로테이션을 보고 결정합니다.',
      agents: ['제트', '소바', '오멘', '사이퍼', '브리치'],
      difficulty: '어려움'
    },
    {
      title: '미드 컨트롤 수비',
      side: '수비',
      description: '미드에 2명을 배치하여 미드 컨트롤을 유지합니다. 적이 미드를 포기하면 플랭크를 시도합니다.',
      agents: ['사이퍼', '오멘', '킬조이', '브리치', '제트'],
      difficulty: '어려움'
    }
  ],
  icebox: [
    {
      title: 'A 사이트 벨트 진입',
      side: '공격',
      description: '바이퍼 벽으로 래프터를 차단하고 벨트를 통해 진입합니다. 세이지 벽으로 추가 진입로를 만들 수 있습니다.',
      agents: ['제트', '소바', '바이퍼', '세이지', '케이오'],
      difficulty: '보통'
    },
    {
      title: 'B 사이트 튜브 스플릿',
      side: '공격',
      description: '튜브와 B 메인에서 동시에 B 사이트로 진입합니다. 튜브에서 오는 팀원이 그린을 견제합니다.',
      agents: ['제트', '소바', '바이퍼', '세이지', '케이오'],
      difficulty: '어려움'
    },
    {
      title: 'A 사이트 스택 수비',
      side: '수비',
      description: 'A 사이트에 3명을 배치합니다. 래프터와 벨트에서 크로스파이어를 구축합니다.',
      agents: ['바이퍼', '세이지', '소바', '킬조이', '제트'],
      difficulty: '보통'
    }
  ],
  breeze: [
    {
      title: 'A 사이트 홀 러쉬',
      side: '공격',
      description: '바이퍼 벽으로 A 홀을 분리하고 빠르게 진입합니다. 피라미드 주변을 클리어한 후 설치합니다.',
      agents: ['제트', '소바', '바이퍼', '킬조이', '케이오'],
      difficulty: '보통'
    },
    {
      title: '미드 도어 컨트롤',
      side: '공격',
      description: '미드 도어를 장악하여 A와 B 모두 위협합니다. 도어 컨트롤 후 약한 사이트로 진입합니다.',
      agents: ['제트', '소바', '바이퍼', '킬조이', '케이오'],
      difficulty: '어려움'
    },
    {
      title: 'B 사이트 오퍼 수비',
      side: '수비',
      description: 'B 사이트에서 오퍼레이터로 B 터널을 감시합니다. 바이퍼 원웨이와 함께 사용하면 강력합니다.',
      agents: ['바이퍼', '킬조이', '소바', '제트', '케이오'],
      difficulty: '보통'
    }
  ]
};

// 맵 데이터에 추가 전략 병합
export function getMapWithAdditionalStrategies(mapId: string): GameMap | undefined {
  const map = getMapById(mapId);
  if (!map) return undefined;
  
  const additional = additionalStrategies[mapId] || [];
  return {
    ...map,
    strategies: [...map.strategies, ...additional]
  };
}
