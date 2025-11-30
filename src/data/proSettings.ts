export interface ProPlayer {
  id: string;
  name: string;
  team: string;
  country: string;
  role: string;
  mainAgents: string[];
  mouse: {
    dpi: number;
    sensitivity: number;
    edpi: number;
    scopedSensitivity: number;
    hz: number;
  };
  crosshair: {
    code: string;
    color: string;
    outlines: boolean;
    centerDot: boolean;
    innerLines: string;
    outerLines: string;
  };
  keybinds: {
    ability1: string;
    ability2: string;
    signature: string;
    ultimate: string;
  };
  videoSettings: {
    resolution: string;
    aspectRatio: string;
  };
  socials?: {
    twitch?: string;
    twitter?: string;
  };
}

export const proPlayers: ProPlayer[] = [
  {
    id: 'tenz',
    name: 'TenZ',
    team: 'Sentinels',
    country: '🇨🇦',
    role: '타격대',
    mainAgents: ['제트', '레이나', '레이즈'],
    mouse: {
      dpi: 800,
      sensitivity: 0.4,
      edpi: 320,
      scopedSensitivity: 1,
      hz: 1000,
    },
    crosshair: {
      code: '0;P;c;5;h;0;m;1;0l;4;0o;2;0a;1;0f;0;1b;0',
      color: '시안',
      outlines: false,
      centerDot: false,
      innerLines: '1/4/2/2',
      outerLines: '없음',
    },
    keybinds: {
      ability1: 'C',
      ability2: 'Q',
      signature: 'E',
      ultimate: 'X',
    },
    videoSettings: {
      resolution: '1920x1080',
      aspectRatio: '16:9',
    },
    socials: {
      twitch: 'tenz',
      twitter: 'TenZOfficial',
    },
  },
  {
    id: 'aspas',
    name: 'aspas',
    team: 'LOUD',
    country: '🇧🇷',
    role: '타격대',
    mainAgents: ['제트', '레이나', '레이즈'],
    mouse: {
      dpi: 800,
      sensitivity: 0.35,
      edpi: 280,
      scopedSensitivity: 1,
      hz: 1000,
    },
    crosshair: {
      code: '0;s;1;P;c;5;o;1;d;1;z;3;0b;0;1b;0',
      color: '시안',
      outlines: true,
      centerDot: true,
      innerLines: '1/3/1/3',
      outerLines: '없음',
    },
    keybinds: {
      ability1: 'C',
      ability2: 'Q',
      signature: 'E',
      ultimate: 'X',
    },
    videoSettings: {
      resolution: '1280x960',
      aspectRatio: '4:3 스트레치',
    },
    socials: {
      twitch: 'aspaszin',
      twitter: 'aspaborracha',
    },
  },
  {
    id: 'demon1',
    name: 'Demon1',
    team: 'Evil Geniuses',
    country: '🇷🇺',
    role: '타격대',
    mainAgents: ['제트', '레이즈', '네온'],
    mouse: {
      dpi: 800,
      sensitivity: 0.27,
      edpi: 216,
      scopedSensitivity: 1,
      hz: 1000,
    },
    crosshair: {
      code: '0;P;c;1;o;1;f;0;0l;5;0o;0;0a;1;0f;0;1b;0',
      color: '흰색',
      outlines: true,
      centerDot: false,
      innerLines: '1/5/0/0',
      outerLines: '없음',
    },
    keybinds: {
      ability1: 'C',
      ability2: 'Q',
      signature: 'E',
      ultimate: 'X',
    },
    videoSettings: {
      resolution: '1920x1080',
      aspectRatio: '16:9',
    },
    socials: {
      twitch: 'demon1',
      twitter: 'Demon1___',
    },
  },
  {
    id: 'yay',
    name: 'yay',
    team: 'Cloud9',
    country: '🇺🇸',
    role: '타격대',
    mainAgents: ['제트', '챔버', '레이나'],
    mouse: {
      dpi: 800,
      sensitivity: 0.27,
      edpi: 216,
      scopedSensitivity: 1,
      hz: 1000,
    },
    crosshair: {
      code: '0;P;c;5;o;1;d;1;0l;0;0o;2;0a;1;0f;0;1b;0',
      color: '시안',
      outlines: true,
      centerDot: true,
      innerLines: '없음',
      outerLines: '없음',
    },
    keybinds: {
      ability1: 'C',
      ability2: 'Q',
      signature: 'E',
      ultimate: 'X',
    },
    videoSettings: {
      resolution: '1920x1080',
      aspectRatio: '16:9',
    },
    socials: {
      twitch: 'yaboringames',
      twitter: 'yaboringames',
    },
  },
  {
    id: 'leo',
    name: 'Leo',
    team: 'Fnatic',
    country: '🇸🇪',
    role: '척후대',
    mainAgents: ['스카이', '케이오', '페이드'],
    mouse: {
      dpi: 800,
      sensitivity: 0.35,
      edpi: 280,
      scopedSensitivity: 1,
      hz: 1000,
    },
    crosshair: {
      code: '0;P;c;1;h;0;0l;4;0o;2;0a;1;0f;0;1b;0',
      color: '흰색',
      outlines: false,
      centerDot: false,
      innerLines: '1/4/2/2',
      outerLines: '없음',
    },
    keybinds: {
      ability1: 'C',
      ability2: 'Q',
      signature: 'E',
      ultimate: 'X',
    },
    videoSettings: {
      resolution: '1920x1080',
      aspectRatio: '16:9',
    },
    socials: {
      twitch: 'likiomfnatic',
      twitter: 'LeoJannesson',
    },
  },
  {
    id: 'chronicle',
    name: 'Chronicle',
    team: 'Fnatic',
    country: '🇷🇺',
    role: '전략가',
    mainAgents: ['오멘', '바이퍼', '아스트라'],
    mouse: {
      dpi: 800,
      sensitivity: 0.36,
      edpi: 288,
      scopedSensitivity: 1,
      hz: 1000,
    },
    crosshair: {
      code: '0;P;c;5;h;0;0l;3;0o;2;0a;1;0f;0;1b;0',
      color: '시안',
      outlines: false,
      centerDot: false,
      innerLines: '1/3/2/2',
      outerLines: '없음',
    },
    keybinds: {
      ability1: 'C',
      ability2: 'Q',
      signature: 'E',
      ultimate: 'X',
    },
    videoSettings: {
      resolution: '1920x1080',
      aspectRatio: '16:9',
    },
    socials: {
      twitch: 'chronicle_cs',
      twitter: 'ArdisVLRT',
    },
  },
  {
    id: 'mako',
    name: 'MaKo',
    team: 'DRX',
    country: '🇰🇷',
    role: '전략가',
    mainAgents: ['오멘', '바이퍼', '하버'],
    mouse: {
      dpi: 800,
      sensitivity: 0.32,
      edpi: 256,
      scopedSensitivity: 1,
      hz: 1000,
    },
    crosshair: {
      code: '0;P;c;1;h;0;0l;4;0o;1;0a;1;0f;0;1b;0',
      color: '흰색',
      outlines: false,
      centerDot: false,
      innerLines: '1/4/1/2',
      outerLines: '없음',
    },
    keybinds: {
      ability1: 'C',
      ability2: 'Q',
      signature: 'E',
      ultimate: 'X',
    },
    videoSettings: {
      resolution: '1920x1080',
      aspectRatio: '16:9',
    },
    socials: {
      twitch: 'mak0_val',
      twitter: 'MaKo_val',
    },
  },
  {
    id: 'rb',
    name: 'Rb',
    team: 'DRX',
    country: '🇰🇷',
    role: '타격대',
    mainAgents: ['제트', '레이즈', '네온'],
    mouse: {
      dpi: 400,
      sensitivity: 0.58,
      edpi: 232,
      scopedSensitivity: 1,
      hz: 1000,
    },
    crosshair: {
      code: '0;P;c;5;h;0;0l;4;0o;2;0a;1;0f;0;1b;0',
      color: '시안',
      outlines: false,
      centerDot: false,
      innerLines: '1/4/2/2',
      outerLines: '없음',
    },
    keybinds: {
      ability1: 'C',
      ability2: 'Q',
      signature: 'E',
      ultimate: 'X',
    },
    videoSettings: {
      resolution: '1920x1080',
      aspectRatio: '16:9',
    },
    socials: {
      twitch: 'rb_val',
      twitter: 'Rb_val',
    },
  },
  {
    id: 'stax',
    name: 'stax',
    team: 'DRX',
    country: '🇰🇷',
    role: '척후대',
    mainAgents: ['브리치', '스카이', '케이오'],
    mouse: {
      dpi: 800,
      sensitivity: 0.28,
      edpi: 224,
      scopedSensitivity: 1,
      hz: 1000,
    },
    crosshair: {
      code: '0;P;c;1;h;0;0l;3;0o;2;0a;1;0f;0;1b;0',
      color: '흰색',
      outlines: false,
      centerDot: false,
      innerLines: '1/3/2/2',
      outerLines: '없음',
    },
    keybinds: {
      ability1: 'C',
      ability2: 'Q',
      signature: 'E',
      ultimate: 'X',
    },
    videoSettings: {
      resolution: '1920x1080',
      aspectRatio: '16:9',
    },
    socials: {
      twitch: 'stax_val',
      twitter: 'stax_val',
    },
  },
  {
    id: 'something',
    name: 'something',
    team: 'Gen.G',
    country: '🇰🇷',
    role: '감시자',
    mainAgents: ['킬조이', '사이퍼', '세이지'],
    mouse: {
      dpi: 800,
      sensitivity: 0.35,
      edpi: 280,
      scopedSensitivity: 1,
      hz: 1000,
    },
    crosshair: {
      code: '0;P;c;5;h;0;0l;4;0o;2;0a;1;0f;0;1b;0',
      color: '시안',
      outlines: false,
      centerDot: false,
      innerLines: '1/4/2/2',
      outerLines: '없음',
    },
    keybinds: {
      ability1: 'C',
      ability2: 'Q',
      signature: 'E',
      ultimate: 'X',
    },
    videoSettings: {
      resolution: '1920x1080',
      aspectRatio: '16:9',
    },
    socials: {
      twitch: 'something_val',
      twitter: 'something_val',
    },
  },
];

export const averageProSettings = {
  edpi: {
    average: 260,
    min: 180,
    max: 400,
    recommendation: '200-300 eDPI가 가장 일반적',
  },
  dpi: {
    common: [400, 800, 1600],
    mostUsed: 800,
  },
  sensitivity: {
    average: 0.35,
    range: '0.2 - 0.5',
  },
};
