# 건강 관리 시스템 (Health Management System)

AI 기반 건강 상담과 맞춤형 건강 관리 서비스를 제공하는 웹 애플리케이션입니다.

## 주요 기능

### 1. AI 건강 상담
- 24시간 AI 기반 건강 상담 서비스
- 맞춤형 건강 조언 제공
- 대화형 인터페이스

### 2. 건강 기록 관리
- 일일 건강 상태 기록
- 운동 기록 관리
- 체계적인 건강 데이터 분석

### 3. 맞춤형 운동 추천
- 개인 건강 상태 기반 운동 추천
- 운동 강도 및 종류 최적화
- 운동 효과 분석

## 기술 스택

### 프론트엔드
- React.js
- Tailwind CSS
- Font Awesome
- Axios
- React Router

### 백엔드
- Spring Boot
- Spring Security
- JWT Authentication
- MyBatis
- MySQL

## 설치 및 실행 방법

### 프론트엔드
```bash
cd frontend
npm install
npm start
```

### 백엔드
```bash
cd backend
./gradlew build
./gradlew bootRun
```

## 환경 설정

### 프론트엔드 환경 변수
- `REACT_APP_API_URL`: 백엔드 API 서버 URL

### 백엔드 환경 변수
- `spring.datasource.url`: 데이터베이스 URL
- `spring.datasource.username`: 데이터베이스 사용자명
- `spring.datasource.password`: 데이터베이스 비밀번호
- `jwt.secret`: JWT 시크릿 키
- `jwt.expiration`: JWT 만료 시간

## 프로젝트 구조

```
├── frontend/                # React 프론트엔드
│   ├── src/
│   │   ├── components/     # 재사용 가능한 컴포넌트
│   │   ├── pages/         # 페이지 컴포넌트
│   │   ├── contexts/      # 상태 관리
│   │   └── routes/        # 라우팅 설정
│   └── public/            # 정적 파일
│
└── backend/               # Spring Boot 백엔드
    ├── src/
    │   ├── main/
    │   │   ├── java/
    │   │   │   ├── controller/  # API 엔드포인트
    │   │   │   ├── service/     # 비즈니스 로직
    │   │   │   ├── repository/  # 데이터 접근
    │   │   │   ├── entity/      # 데이터 모델
    │   │   │   ├── dto/         # 데이터 전송 객체
    │   │   │   ├── config/      # 설정 파일
    │   │   │   └── secu/        # 보안 관련 설정
    │   │   └── resources/       # 설정 파일 및 리소스
    │   └── test/               # 테스트 코드
    └── build.gradle           # Gradle 빌드 설정
```

## API 문서

### 인증 API
- `POST /api/auth/signup`: 회원가입
- `POST /api/auth/login`: 로그인
- `POST /api/auth/logout`: 로그아웃

### 채팅 API
- `POST /api/chat`: AI 상담 시작
- `GET /api/chat/history`: 상담 기록 조회
- `POST /api/chat/feedback`: 상담 피드백

### 건강 기록 API
- `POST /api/health/record`: 건강 기록 추가
- `GET /api/health/records`: 건강 기록 조회
- `GET /api/health/analysis`: 건강 데이터 분석

## 기여 방법

1. 이 저장소를 포크합니다.
2. 새로운 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`).
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`).
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`).
5. Pull Request를 생성합니다.

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 연락처

- 이메일: support@health.com
- 전화: 123-456-7890 