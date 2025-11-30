export interface Callout {
  name: string;
  alias?: string[];
  description: string;
}

export interface MapCallouts {
  id: string;
  name: string;
  callouts: {
    attacker: Callout[];
    defender: Callout[];
    mid: Callout[];
    asite: Callout[];
    bsite: Callout[];
    csite?: Callout[];
  };
}

export const mapCallouts: MapCallouts[] = [
  {
    id: 'ascent',
    name: '어센트',
    callouts: {
      attacker: [
        { name: 'A 로비', alias: ['A 입구'], description: '공격팀 A 사이트 진입 전 대기 공간' },
        { name: 'B 로비', alias: ['B 입구'], description: '공격팀 B 사이트 진입 전 대기 공간' },
        { name: 'A 메인', description: 'A 로비에서 A 사이트로 가는 주요 통로' },
        { name: 'B 메인', description: 'B 로비에서 B 사이트로 가는 주요 통로' },
      ],
      defender: [
        { name: 'A 스폰', description: '수비팀 A 사이트 근처 스폰 지점' },
        { name: 'B 스폰', description: '수비팀 B 사이트 근처 스폰 지점' },
        { name: 'A 링크', alias: ['A 커넥터'], description: 'A 사이트와 미드를 연결하는 통로' },
        { name: 'B 링크', alias: ['B 커넥터'], description: 'B 사이트와 미드를 연결하는 통로' },
      ],
      mid: [
        { name: '미드', description: '맵 중앙 지역' },
        { name: '미드 탑', alias: ['탑 미드'], description: '미드 상단 지역' },
        { name: '미드 바텀', alias: ['바텀 미드'], description: '미드 하단 지역' },
        { name: '피자', alias: ['피자 코너'], description: '미드에서 B로 가는 코너 (피자 모양)' },
        { name: '마켓', alias: ['상점'], description: '미드 근처 상점 건물' },
        { name: '카페테리아', alias: ['카페'], description: '미드 근처 카페 건물' },
      ],
      asite: [
        { name: 'A 사이트', description: 'A 폭탄 설치 지점' },
        { name: 'A 헤븐', alias: ['A 천국'], description: 'A 사이트 높은 위치' },
        { name: 'A 헬', alias: ['A 지옥'], description: 'A 사이트 낮은 위치' },
        { name: 'A 트리', alias: ['나무'], description: 'A 사이트 나무 근처' },
      ],
        { name: 'A 제너레이터', alias: ['제너', '발전기'], description: 'A 사이트 발전기 뒤' },
        { name: 'A 와인', alias: ['와인룸'], description: 'A 사이트 와인 저장고' },
      ],
      bsite: [
        { name: 'B 사이트', description: 'B 폭탄 설치 지점' },
        { name: 'B 메인', description: 'B 사이트 주요 진입로' },
        { name: 'B 백', alias: ['B 뒤'], description: 'B 사이트 뒤쪽' },
        { name: 'B 로그', alias: ['통나무'], description: 'B 사이트 통나무 근처' },
        { name: 'B 스위치', description: 'B 사이트 문 스위치 근처' },
        { name: 'B 보트', alias: ['보트하우스'], description: 'B 사이트 보트 건물' },
      ],
    },
  },
  {
    id: 'bind',
    name: '바인드',
    callouts: {
      attacker: [
        { name: 'A 숏', alias: ['A 짧은'], description: 'A 사이트 짧은 진입로' },
        { name: 'A 롱', alias: ['A 긴'], description: 'A 사이트 긴 진입로' },
        { name: 'B 숏', alias: ['B 짧은'], description: 'B 사이트 짧은 진입로' },
        { name: 'B 롱', alias: ['B 긴', '후카'], description: 'B 사이트 긴 진입로 (후카)' },
      ],
      defender: [
        { name: 'A 헤븐', alias: ['A 천국'], description: 'A 사이트 높은 위치' },
        { name: 'B 헤븐', alias: ['B 천국', 'B 엘보'], description: 'B 사이트 높은 위치' },
        { name: 'A 텔레', alias: ['A 텔레포터'], description: 'A 사이트 텔레포터' },
        { name: 'B 텔레', alias: ['B 텔레포터'], description: 'B 사이트 텔레포터' },
      ],
      mid: [
        { name: '텔레포터', alias: ['TP'], description: '맵 양쪽을 연결하는 텔레포터' },
      ],
      asite: [
        { name: 'A 사이트', description: 'A 폭탄 설치 지점' },
        { name: 'A 욕조', alias: ['욕조', '배스'], description: 'A 사이트 욕조 근처' },
        { name: 'A 트럭', description: 'A 사이트 트럭 뒤' },
        { name: 'A 램프', alias: ['A 경사로'], description: 'A 사이트 경사로' },
        { name: 'A 샤워', alias: ['샤워실'], description: 'A 사이트 샤워실' },
        { name: 'A 트리플', alias: ['트리플 박스'], description: 'A 사이트 3단 박스' },
      ],
      bsite: [
        { name: 'B 사이트', description: 'B 폭탄 설치 지점' },
        { name: 'B 가든', alias: ['정원'], description: 'B 사이트 정원' },
        { name: 'B 백사이트', alias: ['B 뒤'], description: 'B 사이트 뒤쪽' },
        { name: 'B 윈도우', alias: ['B 창문'], description: 'B 사이트 창문' },
        { name: 'B 튜브', alias: ['파이프'], description: 'B 사이트 파이프 근처' },
      ],
    },
  },
  {
    id: 'haven',
    name: '헤이븐',
    callouts: {
      attacker: [
        { name: 'A 로비', description: 'A 사이트 진입 전 대기 공간' },
        { name: 'B 로비', description: 'B 사이트 진입 전 대기 공간' },
        { name: 'C 로비', description: 'C 사이트 진입 전 대기 공간' },
        { name: 'A 롱', description: 'A 사이트 긴 진입로' },
        { name: 'C 롱', description: 'C 사이트 긴 진입로' },
      ],
      defender: [
        { name: 'A 링크', description: 'A 사이트와 미드 연결' },
        { name: 'C 링크', description: 'C 사이트와 미드 연결' },
        { name: '스폰', description: '수비팀 스폰 지점' },
      ],
      mid: [
        { name: '미드', description: '맵 중앙' },
        { name: '미드 윈도우', alias: ['미드 창문'], description: '미드에서 B를 보는 창문' },
        { name: '미드 도어', alias: ['미드 문'], description: '미드 문 근처' },
        { name: '가라지', alias: ['차고'], description: '미드 근처 차고' },
      ],
      asite: [
        { name: 'A 사이트', description: 'A 폭탄 설치 지점' },
        { name: 'A 헤븐', alias: ['A 천국'], description: 'A 사이트 높은 위치' },
        { name: 'A 숏', description: 'A 사이트 짧은 진입로' },
        { name: 'A 백', alias: ['A 뒤'], description: 'A 사이트 뒤쪽' },
      ],
      bsite: [
        { name: 'B 사이트', description: 'B 폭탄 설치 지점' },
        { name: 'B 백', alias: ['B 뒤'], description: 'B 사이트 뒤쪽' },
        { name: 'B 윈도우', alias: ['B 창문'], description: 'B 사이트 창문' },
      ],
      csite: [
        { name: 'C 사이트', description: 'C 폭탄 설치 지점' },
        { name: 'C 백', alias: ['C 뒤'], description: 'C 사이트 뒤쪽' },
        { name: 'C 플랫', alias: ['C 플랫폼'], description: 'C 사이트 플랫폼' },
        { name: 'C 커비', alias: ['커비'], description: 'C 사이트 커비 모양 구조물' },
      ],
    },
  },
  {
    id: 'split',
    name: '스플릿',
    callouts: {
      attacker: [
        { name: 'A 로비', description: 'A 사이트 진입 전 대기 공간' },
        { name: 'B 로비', description: 'B 사이트 진입 전 대기 공간' },
        { name: 'A 메인', description: 'A 사이트 주요 진입로' },
        { name: 'B 메인', description: 'B 사이트 주요 진입로' },
      ],
      defender: [
        { name: 'A 헤븐', alias: ['A 천국'], description: 'A 사이트 높은 위치' },
        { name: 'B 헤븐', alias: ['B 천국'], description: 'B 사이트 높은 위치' },
        { name: 'A 램프', description: 'A 사이트 경사로' },
        { name: 'B 램프', description: 'B 사이트 경사로' },
      ],
      mid: [
        { name: '미드', description: '맵 중앙' },
        { name: '미드 탑', description: '미드 상단' },
        { name: '미드 바텀', description: '미드 하단' },
        { name: '벤트', alias: ['환풍구'], description: '미드 환풍구' },
        { name: '메일', alias: ['우체국'], description: '미드 우체국 건물' },
        { name: '로프', alias: ['줄'], description: '미드 로프' },
      ],
      asite: [
        { name: 'A 사이트', description: 'A 폭탄 설치 지점' },
        { name: 'A 스크린', alias: ['스크린'], description: 'A 사이트 스크린 뒤' },
        { name: 'A 백', alias: ['A 뒤'], description: 'A 사이트 뒤쪽' },
        { name: 'A 래프터', alias: ['서까래'], description: 'A 사이트 서까래' },
      ],
      bsite: [
        { name: 'B 사이트', description: 'B 폭탄 설치 지점' },
        { name: 'B 백', alias: ['B 뒤'], description: 'B 사이트 뒤쪽' },
        { name: 'B 타워', alias: ['탑'], description: 'B 사이트 타워' },
        { name: 'B 래프터', description: 'B 사이트 서까래' },
      ],
    },
  },
  {
    id: 'icebox',
    name: '아이스박스',
    callouts: {
      attacker: [
        { name: 'A 벨트', alias: ['컨베이어'], description: 'A 사이트 컨베이어 벨트' },
        { name: 'B 오렌지', alias: ['오렌지 컨테이너'], description: 'B 사이트 오렌지색 컨테이너' },
        { name: 'B 그린', alias: ['그린 컨테이너'], description: 'B 사이트 초록색 컨테이너' },
      ],
      defender: [
        { name: 'A 넥', alias: ['A 목'], description: 'A 사이트 좁은 통로' },
        { name: 'B 넥', alias: ['B 목'], description: 'B 사이트 좁은 통로' },
        { name: '스노우맨', alias: ['눈사람'], description: '눈사람 근처' },
      ],
      mid: [
        { name: '미드', description: '맵 중앙' },
        { name: '튜브', alias: ['파이프'], description: '미드 파이프' },
        { name: '보일러', description: '보일러 근처' },
      ],
      asite: [
        { name: 'A 사이트', description: 'A 폭탄 설치 지점' },
        { name: 'A 래프터', alias: ['A 서까래'], description: 'A 사이트 높은 위치' },
        { name: 'A 스크린', description: 'A 사이트 스크린' },
        { name: 'A 410', alias: ['410'], description: 'A 사이트 410 컨테이너' },
      ],
      bsite: [
        { name: 'B 사이트', description: 'B 폭탄 설치 지점' },
        { name: 'B 옐로우', alias: ['노란 컨테이너'], description: 'B 사이트 노란색 컨테이너' },
        { name: 'B 스노우파일', alias: ['눈더미'], description: 'B 사이트 눈더미' },
        { name: 'B 키친', alias: ['주방'], description: 'B 사이트 주방' },
      ],
    },
  },
];

export function getCalloutsByMapId(mapId: string): MapCallouts | undefined {
  return mapCallouts.find(m => m.id === mapId);
}
