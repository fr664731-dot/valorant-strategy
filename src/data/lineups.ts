export interface Lineup {
  id: string;
  agentId: string;
  agentName: string;
  map: string;
  site: string;
  skill: string;
  title: string;
  difficulty: '쉬움' | '보통' | '어려움';
  side: '공격' | '수비' | '공용';
  description: string;
  steps: string[];
  tips: string[];
  tags: string[];
}

export const lineups: Lineup[] = [
  // 소바 - 어센트
  {
    id: 'sova-ascent-a-recon-1',
    agentId: 'sova',
    agentName: '소바',
    map: '어센트',
    site: 'A',
    skill: '리콘 볼트',
    title: 'A 사이트 기본 리콘 (A 메인에서)',
    difficulty: '쉬움',
    side: '공격',
    description: 'A 메인에서 A 사이트 전체를 스캔하는 가장 기본적인 리콘 볼트입니다. 진입 전 필수로 사용하세요.',
    steps: [
      'A 메인 입구 왼쪽 벽에 붙습니다',
      '조준점을 A 사이트 방향 하늘로 올립니다',
      '파워 2칸, 바운스 1회로 설정합니다',
      '발사하면 A 사이트 중앙에 꽂힙니다'
    ],
    tips: [
      '진입 직전에 사용하면 적이 파괴할 시간이 부족합니다',
      '팀원들과 타이밍을 맞춰 리콘이 터지는 순간 진입하세요',
      '헤븐과 사이트 양쪽을 모두 스캔할 수 있습니다'
    ],
    tags: ['기본', '필수', '진입용']
  },
  {
    id: 'sova-ascent-a-shock-1',
    agentId: 'sova',
    agentName: '소바',
    map: '어센트',
    site: 'A',
    skill: '쇼크 다트',
    title: 'A 사이트 설치 지점 쇼크 다트',
    difficulty: '보통',
    side: '공격',
    description: '기본 설치 지점에 쇼크 다트를 맞추는 라인업입니다. 설치 해제를 방해할 때 사용하세요.',
    steps: [
      'A 메인에서 사이트를 바라봅니다',
      '제너레이터 위쪽 모서리를 조준합니다',
      '파워 2칸, 바운스 1회로 설정합니다',
      '더블 쇼크를 위해 두 번째는 살짝 다른 각도로 발사합니다'
    ],
    tips: [
      '더블 쇼크 다트로 해제 중인 적을 처치할 수 있습니다',
      '타이밍이 중요합니다 - 해제 소리가 들리면 바로 발사하세요',
      '연습 모드에서 타이밍을 익히세요'
    ],
    tags: ['설치 후', '해제 방해', '더블 쇼크']
  },
  {
    id: 'sova-ascent-b-recon-1',
    agentId: 'sova',
    agentName: '소바',
    map: '어센트',
    site: 'B',
    skill: '리콘 볼트',
    title: 'B 사이트 기본 리콘 (B 메인에서)',
    difficulty: '쉬움',
    side: '공격',
    description: 'B 메인에서 B 사이트를 스캔하는 기본 리콘입니다.',
    steps: [
      'B 메인 입구에서 오른쪽 벽에 붙습니다',
      '사이트 방향 위쪽을 조준합니다',
      '파워 2칸, 바운스 없음으로 설정합니다',
      '발사하면 B 사이트 벽에 꽂힙니다'
    ],
    tips: [
      '백사이트와 CT 방향을 모두 스캔합니다',
      '마켓에서 오는 적은 스캔되지 않을 수 있습니다',
      '팀원이 마켓을 견제하는 동안 사용하세요'
    ],
    tags: ['기본', '필수', '진입용']
  },

  // 소바 - 바인드
  {
    id: 'sova-bind-a-recon-1',
    agentId: 'sova',
    agentName: '소바',
    map: '바인드',
    site: 'A',
    skill: '리콘 볼트',
    title: 'A 숏 리콘 (A 로비에서)',
    difficulty: '쉬움',
    side: '공격',
    description: 'A 로비에서 A 숏과 사이트 일부를 스캔하는 리콘입니다.',
    steps: [
      'A 로비 입구에 섭니다',
      'A 숏 방향 천장을 조준합니다',
      '파워 1칸, 바운스 1회로 설정합니다',
      '발사하면 A 숏 벽에 꽂힙니다'
    ],
    tips: [
      'A 숏에서 대기하는 적을 찾을 수 있습니다',
      '샤워 안쪽은 스캔되지 않을 수 있습니다',
      '팀원이 A 롱을 견제하는 동안 사용하세요'
    ],
    tags: ['기본', '진입용']
  },
  {
    id: 'sova-bind-b-recon-1',
    agentId: 'sova',
    agentName: '소바',
    map: '바인드',
    site: 'B',
    skill: '리콘 볼트',
    title: 'B 사이트 리콘 (B 롱에서)',
    difficulty: '보통',
    side: '공격',
    description: 'B 롱에서 B 사이트 전체를 스캔하는 리콘입니다.',
    steps: [
      'B 롱 중간 지점에 섭니다',
      '사이트 방향 위쪽 벽을 조준합니다',
      '파워 2칸, 바운스 1회로 설정합니다',
      '발사하면 사이트 중앙 위에 꽂힙니다'
    ],
    tips: [
      '엘보와 백사이트를 모두 스캔합니다',
      '훅카에서 오는 팀원과 타이밍을 맞추세요',
      '적이 파괴하기 어려운 위치에 꽂힙니다'
    ],
    tags: ['기본', '진입용', '높은 위치']
  },

  // 바이퍼 - 브리즈
  {
    id: 'viper-breeze-a-wall-1',
    agentId: 'viper',
    agentName: '바이퍼',
    map: '브리즈',
    site: 'A',
    skill: '톡식 스크린',
    title: 'A 사이트 기본 벽 (공격용)',
    difficulty: '보통',
    side: '공격',
    description: 'A 홀에서 A 사이트를 분리하는 기본 독벽입니다. 브리즈 공격의 필수 라인업입니다.',
    steps: [
      'A 홀 입구에서 벽을 설치합니다',
      '피라미드를 기준으로 사이트를 가로지르게 설치합니다',
      '벽이 백사이트와 CT를 분리하도록 합니다',
      '진입 타이밍에 맞춰 벽을 올립니다'
    ],
    tips: [
      '벽을 올린 후 빠르게 진입하세요',
      '연료 관리가 중요합니다 - 필요할 때만 켜세요',
      '설치 후에는 벽을 내려 연료를 아끼세요'
    ],
    tags: ['필수', '사이트 분리', '진입용']
  },
  {
    id: 'viper-breeze-a-smoke-1',
    agentId: 'viper',
    agentName: '바이퍼',
    map: '브리즈',
    site: 'A',
    skill: '포이즌 클라우드',
    title: 'A 사이트 원웨이 스모크',
    difficulty: '보통',
    side: '수비',
    description: 'A 홀 입구를 막는 원웨이 스모크입니다. 수비 시 매우 강력합니다.',
    steps: [
      'A 사이트 피라미드 근처에 섭니다',
      'A 홀 입구 위쪽 처마에 스모크를 던집니다',
      '스모크가 처마에 걸쳐서 원웨이가 됩니다',
      '적이 진입할 때 스모크를 올립니다'
    ],
    tips: [
      '적의 발만 보이고 적은 당신을 볼 수 없습니다',
      '너무 오래 같은 위치에 있으면 프리파이어 당합니다',
      '킬 후에는 위치를 바꾸세요'
    ],
    tags: ['원웨이', '수비용', '강력']
  },

  // 바이퍼 - 아이스박스
  {
    id: 'viper-icebox-a-wall-1',
    agentId: 'viper',
    agentName: '바이퍼',
    map: '아이스박스',
    site: 'A',
    skill: '톡식 스크린',
    title: 'A 사이트 기본 벽',
    difficulty: '보통',
    side: '공격',
    description: '아이스박스 A 사이트 공격의 필수 독벽입니다. 래프터와 벨트를 분리합니다.',
    steps: [
      'A 벨트 입구에서 벽을 설치합니다',
      '벽이 래프터와 사이트를 분리하도록 합니다',
      '스크린 방향으로 진입합니다',
      '팀원들과 함께 사이트를 장악합니다'
    ],
    tips: [
      '래프터에서 내려다보는 적을 차단합니다',
      '세이지 벽과 함께 사용하면 더 효과적입니다',
      '연료 관리에 주의하세요'
    ],
    tags: ['필수', '사이트 분리', '진입용']
  },

  // 킬조이 - 어센트
  {
    id: 'killjoy-ascent-a-nano-1',
    agentId: 'killjoy',
    agentName: '킬조이',
    map: '어센트',
    site: 'A',
    skill: '나노스웜',
    title: 'A 사이트 기본 설치 지점 나노스웜',
    difficulty: '쉬움',
    side: '수비',
    description: '기본 설치 지점에 나노스웜을 미리 배치하는 세팅입니다.',
    steps: [
      'A 사이트 제너레이터 뒤에 나노스웜을 숨깁니다',
      '두 번째 나노스웜은 반대편에 배치합니다',
      '적이 설치를 시작하면 두 개를 동시에 터뜨립니다',
      '더블 나노스웜은 즉사 데미지입니다'
    ],
    tips: [
      '나노스웜은 보이지 않는 곳에 숨기세요',
      '설치 소리가 들리면 바로 터뜨리세요',
      '한 개씩 터뜨리면 적이 피할 수 있습니다'
    ],
    tags: ['설치 방해', '더블 나노', '필수']
  },
  {
    id: 'killjoy-ascent-b-turret-1',
    agentId: 'killjoy',
    agentName: '킬조이',
    map: '어센트',
    site: 'B',
    skill: '터렛',
    title: 'B 사이트 터렛 위치',
    difficulty: '쉬움',
    side: '수비',
    description: 'B 메인을 감시하는 기본 터렛 위치입니다.',
    steps: [
      'B 사이트 스위치 근처에 터렛을 설치합니다',
      '터렛이 B 메인 입구를 바라보게 합니다',
      '터렛이 공격받으면 적 위치를 알 수 있습니다',
      '터렛과 크로스파이어 위치를 잡으세요'
    ],
    tips: [
      '터렛은 정보 수집용으로도 훌륭합니다',
      '적이 터렛을 파괴하면 소리로 알 수 있습니다',
      '라운드마다 위치를 바꾸면 예측하기 어렵습니다'
    ],
    tags: ['정보 수집', '기본', '수비용']
  },


  // 사이퍼 - 어센트
  {
    id: 'cypher-ascent-a-cam-1',
    agentId: 'cypher',
    agentName: '사이퍼',
    map: '어센트',
    site: 'A',
    skill: '스파이캠',
    title: 'A 사이트 카메라 위치',
    difficulty: '보통',
    side: '수비',
    description: 'A 메인과 A 숏을 동시에 감시할 수 있는 카메라 위치입니다.',
    steps: [
      'A 사이트 헤븐 아래 구석에 카메라를 설치합니다',
      '카메라가 A 메인과 A 숏 양쪽을 볼 수 있게 합니다',
      '라운드 시작 전에 미리 설치해두세요',
      '적이 진입하면 다트를 발사해 위치를 추적합니다'
    ],
    tips: [
      '카메라는 눈에 띄지 않는 곳에 설치하세요',
      '같은 위치만 사용하면 적이 예측합니다',
      '다트를 맞추면 팀원에게 콜을 해주세요'
    ],
    tags: ['정보 수집', '기본', '수비용']
  },
  {
    id: 'cypher-ascent-b-trap-1',
    agentId: 'cypher',
    agentName: '사이퍼',
    map: '어센트',
    site: 'B',
    skill: '트랩와이어',
    title: 'B 메인 트랩 위치',
    difficulty: '쉬움',
    side: '수비',
    description: 'B 메인 입구에 트랩을 설치하여 적 진입을 감지합니다.',
    steps: [
      'B 메인 입구 양쪽 벽에 트랩을 설치합니다',
      '트랩 높이를 점프해도 걸리게 조절합니다',
      '적이 걸리면 소리와 함께 위치가 표시됩니다',
      '케이지와 연계하여 사용하면 효과적입니다'
    ],
    tips: [
      '트랩은 눈높이보다 약간 낮게 설치하세요',
      '레이즈 수류탄으로 파괴될 수 있으니 주의하세요',
      '라운드마다 위치를 바꾸면 좋습니다'
    ],
    tags: ['정보 수집', '기본', '진입 감지']
  },

  // 브림스톤 - 바인드
  {
    id: 'brimstone-bind-a-molly-1',
    agentId: 'brimstone',
    agentName: '브림스톤',
    map: '바인드',
    site: 'A',
    skill: '인센디어리',
    title: 'A 사이트 설치 지점 몰로토프',
    difficulty: '보통',
    side: '공격',
    description: '설치 후 해제를 방해하는 몰로토프 라인업입니다.',
    steps: [
      'A 숏에서 사이트를 바라봅니다',
      '기본 설치 지점 방향으로 조준합니다',
      '적절한 각도로 몰로토프를 던집니다',
      '해제 소리가 들리면 발사합니다'
    ],
    tips: [
      '타이밍이 중요합니다 - 너무 빨리 던지면 효과가 없습니다',
      '해제 소리 후 1~2초 뒤에 던지세요',
      '연습 모드에서 타이밍을 익히세요'
    ],
    tags: ['설치 후', '해제 방해', '몰로토프']
  },

  // 페이드 - 로터스
  {
    id: 'fade-lotus-a-haunt-1',
    agentId: 'fade',
    agentName: '페이드',
    map: '로터스',
    site: 'A',
    skill: '호운트',
    title: 'A 사이트 호운트 (A 메인에서)',
    difficulty: '쉬움',
    side: '공격',
    description: 'A 메인에서 A 사이트를 스캔하는 기본 호운트입니다.',
    steps: [
      'A 메인 입구에 섭니다',
      '사이트 방향 위쪽으로 호운트를 던집니다',
      '호운트가 사이트 중앙에 떨어지게 합니다',
      '스캔된 적에게 공포 자국이 남습니다'
    ],
    tips: [
      '소바 리콘과 비슷하게 사용하세요',
      '공포 자국으로 적을 추적할 수 있습니다',
      '시즈와 연계하면 더 효과적입니다'
    ],
    tags: ['정보 수집', '기본', '진입용']
  },
  {
    id: 'fade-lotus-b-seize-1',
    agentId: 'fade',
    agentName: '페이드',
    map: '로터스',
    site: 'B',
    skill: '시즈',
    title: 'B 사이트 시즈 (진입용)',
    difficulty: '보통',
    side: '공격',
    description: 'B 사이트 진입 시 적을 묶는 시즈 사용법입니다.',
    steps: [
      'B 메인에서 사이트를 바라봅니다',
      '필러 뒤쪽으로 시즈를 던집니다',
      '적이 묶이면 팀원과 함께 진입합니다',
      '묶인 적은 이동이 제한됩니다'
    ],
    tips: [
      '호운트로 적 위치를 파악한 후 사용하세요',
      '묶인 적은 귀먹음 상태가 됩니다',
      '팀원과 타이밍을 맞추세요'
    ],
    tags: ['진입용', '적 무력화', '연계']
  },

  // 게코 - 선셋
  {
    id: 'gekko-sunset-a-dizzy-1',
    agentId: 'gekko',
    agentName: '게코',
    map: '선셋',
    site: 'A',
    skill: '디지',
    title: 'A 사이트 디지 (진입용)',
    difficulty: '쉬움',
    side: '공격',
    description: 'A 사이트 진입 시 디지를 활용한 플래시입니다.',
    steps: [
      'A 메인에서 사이트 방향으로 디지를 날립니다',
      '디지가 적을 찾아 플래시를 터뜨립니다',
      '플래시가 터지면 팀원과 함께 진입합니다',
      '디지를 회수하여 다시 사용할 수 있습니다'
    ],
    tips: [
      '디지는 회수 가능하니 꼭 회수하세요',
      '적이 플래시 맞으면 소리가 납니다',
      '정보 수집과 플래시를 동시에 할 수 있습니다'
    ],
    tags: ['진입용', '플래시', '회수 가능']
  },
  {
    id: 'gekko-sunset-b-wingman-1',
    agentId: 'gekko',
    agentName: '게코',
    map: '선셋',
    site: 'B',
    skill: '윙맨',
    title: 'B 사이트 윙맨 설치',
    difficulty: '보통',
    side: '공격',
    description: '윙맨을 이용한 안전한 스파이크 설치입니다.',
    steps: [
      'B 사이트 장악 후 설치 지점을 바라봅니다',
      '스파이크를 들고 윙맨을 보냅니다',
      '윙맨이 스파이크를 설치합니다',
      '설치 중 팀원들이 엄호합니다'
    ],
    tips: [
      '윙맨 설치는 본인이 설치하는 것보다 안전합니다',
      '윙맨이 파괴되면 설치가 취소됩니다',
      '회수하여 다시 사용할 수 있습니다'
    ],
    tags: ['설치용', '안전', '회수 가능']
  }
];

export function getLineupsByAgent(agentId: string): Lineup[] {
  return lineups.filter(lineup => lineup.agentId === agentId);
}

export function getLineupsByMap(map: string): Lineup[] {
  return lineups.filter(lineup => lineup.map === map);
}

export function getLineupsByAgentAndMap(agentId: string, map: string): Lineup[] {
  return lineups.filter(lineup => lineup.agentId === agentId && lineup.map === map);
}
