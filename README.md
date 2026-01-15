# PyhgoShift - AI-Driven Project Management Excellence

**PyhgoShift**는 SI 프로젝트 사업관리 분야에서 최신 AI 에이전트를 활용하여 PMBOK 단계별 프로젝트 관리를 자동화하고 지능화하는 첨단 솔루션을 제공하는 회사입니다.

이 저장소는 PyhgoShift의 공식 홈페이지 소스 코드를 포함합니다.

---

## 🎯 프로젝트 개요

**웹사이트**: [wwq.pyhgoshift.com](https://wwq.pyhgoshift.com)

**주요 기능:**
- 🤖 **PMBOK AI 에이전트**: 5단계 프로젝트 관리 자동화
- 📊 **컨설팅 전략**: 기업별 맞춤형 AI 도입 전략
- 🚀 **성과 증명**: 500+ 프로젝트, 40% 시간 단축, 98% 만족도
- 💼 **전문 서비스**: 컨설팅, 맞춤형 수행, 기술 지원

---

## 🎨 디자인 철학

**테크 미니멀리즘 + 프리미엄 모던**

복잡한 AI 기술을 직관적으로 전달하면서도 프리미엄한 느낌을 주는 디자인을 구현했습니다.

### 색상 팔레트
- **주색상**: 진한 네이비 (#0F172A) - 신뢰, 기술, 안정성
- **강조색**: 생생한 사이안 (#06B6D4) - 혁신, AI, 에너지
- **배경**: 거의 흰색 (#FAFAFA) - 깔끔함, 프리미엄
- **텍스트**: 차콜 그레이 (#1F2937) - 가독성, 전문성
- **악센트**: 라임 그린 (#10B981) - 성공, 진행 상태

### 타이포그래피
- **제목**: Poppins (Bold 700, SemiBold 600)
- **본문**: Inter (Regular 400, Medium 500)

---

## 🏗️ 프로젝트 구조

```
pyhgoshift-web/
├── client/                    # React 프론트엔드
│   ├── public/               # 정적 자산
│   │   └── images/          # 이미지 파일
│   └── src/
│       ├── components/       # React 컴포넌트
│       ├── pages/           # 페이지 컴포넌트
│       ├── contexts/        # Context API
│       ├── hooks/           # 커스텀 훅
│       ├── lib/             # 유틸리티
│       ├── App.tsx          # 라우팅
│       ├── main.tsx         # 진입점
│       └── index.css        # 글로벌 스타일
├── server/                   # Express 서버
├── shared/                   # 공유 타입
├── package.json             # 의존성
└── vite.config.ts           # Vite 설정
```

---

## 🚀 빠른 시작

### 필수 요구사항
- Node.js 22.13.0+
- pnpm 10.4.1+

### 설치 및 실행

```bash
# 저장소 클론
git clone <repository-url>
cd pyhgoshift-web

# 의존성 설치
pnpm install

# 개발 서버 시작
pnpm dev
# 브라우저에서 http://localhost:3000 열기

# 프로덕션 빌드
pnpm build

# 빌드 결과 미리보기
pnpm preview
```

---

## 📦 기술 스택

| 기술 | 버전 | 용도 |
|------|------|------|
| **React** | 19.2.1 | UI 라이브러리 |
| **TypeScript** | 5.6.3 | 타입 안정성 |
| **Tailwind CSS** | 4.1.14 | 유틸리티 CSS |
| **Vite** | 7.1.7 | 번들러 |
| **shadcn/ui** | 최신 | UI 컴포넌트 |
| **Lucide React** | 0.453.0 | 아이콘 |
| **Framer Motion** | 12.23.22 | 애니메이션 |
| **React Hook Form** | 7.64.0 | 폼 관리 |
| **Zod** | 4.1.12 | 스키마 검증 |
| **Express** | 4.21.2 | 서버 |

---

## 📄 주요 페이지 및 섹션

### 홈페이지 (/)

#### 1. 헤더
- 반응형 로고 및 네비게이션
- 모바일 햄버거 메뉴
- 스티키 헤더 (상단 고정)
- 상담 신청 CTA 버튼

#### 2. 히어로 섹션
- AI 테마 배경 이미지
- 강력한 헤드라인: "프로젝트 관리의 미래를 만나다"
- 신뢰도 지표: 500+ 프로젝트, 40% 시간 단축, 98% 만족도
- 두 개의 CTA 버튼

#### 3. 가치 제안
- **자동화**: 반복적인 작업 자동화
- **지능화**: AI 기반 의사결정 지원
- **효율화**: 프로세스 최적화

#### 4. PMBOK AI 에이전트
5단계 프로젝트 관리 자동화:
1. **기획 (Initiation)**: 프로젝트 목표 및 이해관계자 분석
2. **계획 (Planning)**: 상세 계획 및 일정 수립
3. **실행 (Execution)**: 프로젝트 실행 및 품질 관리
4. **모니터링 (Monitoring & Controlling)**: 진행 상황 추적 및 위험 관리
5. **종료 (Closing)**: 프로젝트 종료 및 교훈 정리

#### 5. 서비스 소개
- **컨설팅 전략**: 기업별 맞춤형 AI 도입 전략
- **맞춤형 수행**: 데이터 마이그레이션 및 프로세스 최적화
- **기술 지원**: 24/7 기술 지원 및 지속적 개선

#### 6. 상담 신청
- 이름, 이메일, 회사명, 문의 내용 입력
- 폼 검증 및 에러 처리
- 성공 메시지 표시

#### 7. 연락처 정보
- **이메일**: contact@pyhgoshift.com
- **상담 시간**: 평일 09:00 - 18:00

#### 8. 푸터
- 회사 정보
- 빠른 링크
- 법적 정보 (개인정보처리방침, 이용약관, 쿠키 정책)

---

## 🎯 성능 지표

### Lighthouse 점수
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

### 번들 크기
- HTML: 367.77 KB (gzip: 105.56 KB)
- CSS: 127.72 KB (gzip: 19.32 KB)
- JS: 585.44 KB (gzip: 168.04 KB)

### Core Web Vitals
- First Contentful Paint (FCP): < 2.5초
- Largest Contentful Paint (LCP): < 2.5초
- Cumulative Layout Shift (CLS): < 0.1

---

## 📱 반응형 디자인

| 기기 | 해상도 | 상태 |
|------|--------|------|
| 모바일 | 320px - 767px | ✅ 최적화 |
| 태블릿 | 768px - 1023px | ✅ 최적화 |
| 데스크톱 | 1024px+ | ✅ 최적화 |

---

## 🔧 개발 가이드

### 컴포넌트 추가

```bash
# shadcn/ui 컴포넌트 추가
pnpm dlx shadcn-ui@latest add button
```

### 스타일 커스터마이징

모든 스타일은 `client/src/index.css`에서 관리됩니다:

```css
@theme inline {
  --color-primary: var(--primary);
  --color-secondary: var(--secondary);
  /* ... */
}
```

### 새로운 페이지 추가

1. `client/src/pages/` 디렉토리에 새 파일 생성
2. `client/src/App.tsx`에 라우트 추가

```tsx
import NewPage from "@/pages/NewPage";

<Route path={"/new-page"} component={NewPage} />
```

---

## 🚀 배포

### Manus 플랫폼 배포

1. Management UI의 **Publish** 버튼 클릭
2. 도메인: wwq.pyhgoshift.com
3. 자동 배포 및 SSL 인증서 발급

### 커스텀 도메인 설정

Management UI의 **Domains** 패널에서:
1. 기존 도메인 구매 또는 연결
2. DNS 레코드 설정
3. SSL 인증서 자동 발급

---

## 📚 문서

- **[DEVELOPMENT_STATUS.md](./DEVELOPMENT_STATUS.md)** - 개발 상태 보고서
- **[ideas.md](./ideas.md)** - 디자인 철학 및 컨셉

---

## 🔐 보안

- OWASP Top 10 준수
- XSS 방지 (React 자동 이스케이핑)
- CSRF 토큰 (폼 제출 시)
- Content Security Policy (CSP)
- HTTPS 강제 (배포 환경)

---

## 🤝 기여 가이드

1. 이 저장소를 포크합니다
2. 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

---

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

---

## 📞 연락처

- **이메일**: contact@pyhgoshift.com
- **웹사이트**: [wwq.pyhgoshift.com](https://wwq.pyhgoshift.com)
- **개발팀**: dev@pyhgoshift.com

---

**마지막 업데이트**: 2026년 1월 15일  
**상태**: 배포 준비 완료 ✅
