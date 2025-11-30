# 발로란트 전략 웹사이트 프로젝트

## 프로젝트 개요
- **목표**: 수익형 발로란트 전략 웹사이트
- **수익 모델**: Google AdSense 광고
- **기술 스택**: Next.js 15 + TypeScript + Tailwind CSS

## 완료된 작업 ✅

### 1. 기본 구조
- Next.js 프로젝트 생성
- 레이아웃 (Header, Footer) 구현
- 발로란트 테마 스타일링 (빨간색 #ff4655, 다크 테마)

### 2. 페이지 구현
- `/` - 메인 페이지
- `/maps` - 맵 목록 (11개 맵)
- `/maps/[mapId]` - 맵 상세 전략
- `/agents` - 요원 목록 (22개 요원)
- `/agents/[agentId]` - 요원 상세 가이드
- `/lineups` - 라인업 가이드
- `/lineups/[agentId]` - 요원별 라인업
- `/team-comps` - 팀 조합 추천
- `/meta` - 메타 분석 & 티어 리스트
- `/community` - 전략 공유 게시판 (UI만)
- `/privacy` - 개인정보처리방침
- `/terms` - 이용약관

### 3. 데이터 파일
- `src/data/agents.ts` - 22개 요원 정보 (스킬, 팁, 시너지, 카운터)
- `src/data/maps.ts` - 11개 맵 정보 (전략, 콜아웃, 추천 요원)
- `src/data/teamComps.ts` - 맵별 팀 조합
- `src/data/meta.ts` - 메타 분석 데이터

### 4. 컴포넌트
- `Header.tsx` - 네비게이션 (모바일 반응형)
- `Footer.tsx` - 푸터 (링크, 면책 문구)
- `AdBanner.tsx` - 광고 배너 컴포넌트
- `CookieConsent.tsx` - 쿠키 동의 배너

### 5. 법적 준비
- 개인정보처리방침 페이지
- 이용약관 페이지 (Riot 정책 링크 포함)
- 쿠키 동의 배너
- Footer에 팬사이트 면책 문구

## 남은 작업 📋

### 배포 (다음 단계)
1. GitHub 저장소 생성
2. 코드 푸시
3. Vercel 연결 및 배포

### 선택 작업
- [ ] SEO 최적화 (sitemap, 메타태그)
- [ ] 콘텐츠 추가 (라인업 상세 정보)
- [ ] 애드센스 신청 (콘텐츠 충분히 쌓인 후)
- [ ] 커스텀 도메인 연결
- [ ] 전략 공유 게시판 DB 연동

## 실행 방법
```bash
cd valorant-strategy
npm run dev
```
브라우저에서 http://localhost:3000 접속

## 배포 방법
```bash
# 1. Git 초기화
git init
git add .
git commit -m "Initial commit"

# 2. GitHub에 푸시
git remote add origin https://github.com/[username]/valorant-strategy.git
git push -u origin main

# 3. Vercel에서 Import하면 자동 배포
```

## 메모
- 광고는 AdBanner 컴포넌트에서 관리 (실제 애드센스 코드는 주석 처리됨)
- 애드센스 승인받으면 `src/components/AdBanner.tsx` 수정 필요
- 이메일 주소는 `/privacy` 페이지에서 수정 필요
