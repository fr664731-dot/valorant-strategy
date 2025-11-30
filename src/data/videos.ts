export interface Video {
  id: string;
  title: string;
  youtubeId: string;
  category: 'beginner' | 'agent' | 'map' | 'aim' | 'ranked' | 'pro';
  description: string;
  duration: string;
}

export const videos: Video[] = [
  // 초보자 가이드
  {
    id: 'beginner-1',
    title: '발로란트 완전 초보 가이드 - 기본기부터 배우기',
    youtubeId: 'hZLfGfwA3pI',
    category: 'beginner',
    description: '발로란트를 처음 시작하는 분들을 위한 기초 가이드',
    duration: '15:32',
  },
  {
    id: 'beginner-2',
    title: '발로란트 조준점(크로스헤어) 설정 가이드',
    youtubeId: 'JO7k9-YVWOE',
    category: 'beginner',
    description: '나에게 맞는 크로스헤어 찾는 방법',
    duration: '10:45',
  },
  {
    id: 'beginner-3',
    title: '발로란트 감도 설정 완벽 가이드',
    youtubeId: 'FLHEn3N5guQ',
    category: 'beginner',
    description: '최적의 마우스 감도를 찾는 방법',
    duration: '12:20',
  },
  // 에임 훈련
  {
    id: 'aim-1',
    title: '발로란트 에임 연습 루틴 - 매일 15분',
    youtubeId: 'SFtywqoW9lA',
    category: 'aim',
    description: '프로들이 추천하는 에임 연습 루틴',
    duration: '14:55',
  },
  {
    id: 'aim-2',
    title: '헤드샷 정확도 높이는 방법',
    youtubeId: '1T-MpRvqYqE',
    category: 'aim',
    description: '헤드샷 비율을 올리는 실전 팁',
    duration: '11:30',
  },
  // 요원 가이드
  {
    id: 'agent-1',
    title: '제트 완벽 가이드 - 스킬 활용법',
    youtubeId: 'Gd5PCej5A8o',
    category: 'agent',
    description: '제트의 모든 스킬 사용법과 팁',
    duration: '18:40',
  },
  {
    id: 'agent-2',
    title: '레이나 캐리 가이드 - 솔로랭 필수',
    youtubeId: 'qDLwL1Wh4Dc',
    category: 'agent',
    description: '레이나로 솔로랭크 캐리하는 방법',
    duration: '16:25',
  },
  {
    id: 'agent-3',
    title: '소바 정찰 화살 라인업 모음',
    youtubeId: 'jr0mSyDok-E',
    category: 'agent',
    description: '맵별 소바 정찰 화살 위치',
    duration: '20:15',
  },
  // 맵 가이드
  {
    id: 'map-1',
    title: '어센트 공격/수비 전략 가이드',
    youtubeId: 'Gxz7Hq3Xfxk',
    category: 'map',
    description: '어센트 맵 완벽 공략',
    duration: '22:10',
  },
  {
    id: 'map-2',
    title: '바인드 텔레포터 활용 전략',
    youtubeId: 'Ks3pOBUGN5s',
    category: 'map',
    description: '바인드 텔레포터 200% 활용법',
    duration: '17:35',
  },
  // 랭크 가이드
  {
    id: 'ranked-1',
    title: '아이언에서 골드까지 빠르게 올리는 법',
    youtubeId: 'QCN0pHfvJdY',
    category: 'ranked',
    description: '저티어 탈출 핵심 팁',
    duration: '19:50',
  },
  {
    id: 'ranked-2',
    title: '다이아 이상 가기 위한 필수 습관',
    youtubeId: 'Gxz7Hq3Xfxk',
    category: 'ranked',
    description: '고티어로 가기 위한 게임 운영법',
    duration: '21:30',
  },
  // 프로 플레이
  {
    id: 'pro-1',
    title: '프로 경기 하이라이트 분석',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'pro',
    description: '프로들의 플레이에서 배우는 전략',
    duration: '25:00',
  },
];

export const videoCategories = [
  { id: 'all', name: '전체' },
  { id: 'beginner', name: '초보자 가이드' },
  { id: 'aim', name: '에임 훈련' },
  { id: 'agent', name: '요원 가이드' },
  { id: 'map', name: '맵 공략' },
  { id: 'ranked', name: '랭크 팁' },
  { id: 'pro', name: '프로 플레이' },
];
