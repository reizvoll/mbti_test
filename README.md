
# MBTI Test

![MBTI Test](https://github.com/user-attachments/assets/a8d9ee51-d546-4942-9b22-98670cde8728)

## 📝 프로젝트 개요
**MBTI Test**은 사용자들이 자신의 MBTI 유형을 테스트하고 결과를 확인할 수 있는 웹 애플리케이션입니다. 사용자는 테스트 결과를 저장 및 삭제 가능, 저장된 결과를 기반으로 다양한 MBTI 성격 설명을 제공합니다.

---

## 🚀 배포 URL
[MBTI Test](https://mbti-test-delta.vercel.app/)

---

## 🛠️ 기술 스택
- **Frontend**: React, React Router, Styled-Components
- **State Management**: Zustand
- **Toast Notifications**: react-toastify
- **Deployment**: Vercel

---

## 📂 프로젝트 구조

```plaintext
src/
│
├── components/             # 재사용 가능한 UI 컴포넌트
│   ├── test/               # 테스트 페이지 관련 컴포넌트
│   │   ├── TestForm.jsx            # 테스트 폼 컴포넌트
│   │   └── TestResultItem.jsx      # 테스트 결과 컴포넌트
│   │   └── TestResultList.jsx      # 테스트 결과 리스트 컴포넌트
│   ├── Btn.jsx             # 버튼 컴포넌트
│   ├── LoginForm.jsx       # 로그인 폼 컴포넌트
│   ├── MainLayout.jsx      # 전체 레이아웃 컴포넌트
│   ├── ProtectedRoute.jsx  # 보호된 라우트 컴포넌트
│   ├── SignUpForm.jsx      # 회원가입 폼 컴포넌트
│
├── data/                   # 정적 데이터 파일
│   ├── questions.js        # MBTI 질문 데이터
│   ├── questionsForForeigners.js # 외국인을 위한 질문
│
├── pages/                  # 각 페이지 컴포넌트
│   ├── auth/               # 인증 관련 페이지
│   │   ├── Login.jsx       # 로그인 페이지
│   │   └── SignUp.jsx      # 회원가입 페이지
│   ├── protected/          # 보호된 페이지
│   │   ├── Home.jsx        # 홈 페이지
│   │   ├── Profile.jsx     # 프로필 수정 페이지
│   │   ├── TestPage.jsx    # 테스트 페이지
│   │   └── TestResult.jsx  # 테스트 결과 페이지
│   └── Intro.jsx           # 인트로 페이지
│
├── shared/                 # 공용 모듈 및 설정
│   └── Router.jsx          # 라우터 설정
│
├── store/                  # Zustand 상태 관리 스토어
│   ├── authStore.js        # 인증 관련 상태 관리
│   ├── testFormStore.js    # 테스트 폼 관련 상태 관리
│   └── testStore.js        # 테스트 결과 상태 관리
│
├── utils/                  # 유틸리티 함수 및 파일
│   └── mbtiCalculator.js   # MBTI 계산 로직 및 설명 데이터
│
├── App.jsx                 # 메인 App 컴포넌트
└── main.jsx                # React 진입점
```

---

## 📜 주요 기능 설명

### 1. 회원가입 및 로그인
- **회원가입**: 사용자 ID, 비밀번호, 닉네임을 입력을 통한 계정 생성.
- **로그인**: ID와 비밀번호로 인증 후 서비스 이용 가능.

### 2. MBTI 테스트
- 테스트 질문지를 통해 자신의 MBTI 유형을 계산.
- 계산된 결과는 상세한 설명과 함께 제공.

### 3. 결과 저장 및 관리
- **결과 저장**: 테스트 결과를 서버에 저장.
- **결과 목록**: 저장된 테스트 결과를 카드 형태로 확인.
- **결과 삭제**: 개별 테스트 결과 삭제 가능.

### 4. 반응형 UI
- 모바일, 태블릿, 데스크톱 화면에서 최적화된 디자인 제공.

---

# MBTI 테스트 프로젝트 체크리스트

## ✅ 필수 구현 사항

### 1. Tailwind CSS 설치 및 설정
- [[x]] **Tailwind CSS 설치** -> Styled-Components로 변경하여 사용

### 2. 라우터 설정 및 페이지 생성
- [[x]] `react-router-dom` 설치 및 라우팅 설정
- [[x]] **페이지 생성 및 라우트 연결**
  - [[x]] `/` - Home Page
  - [[x]] `/login` - 로그인 페이지
  - [[x]] `/signup` - 회원가입 페이지
  - [[x]] `/profile` - 프로필 페이지
  - [[x]] `/test` - MBTI 테스트 페이지
  - [[x]] `/results` - 테스트 결과 페이지

### 3. JWT 인증 API 연결
- [[x]] `src/api/auth.js` 생성
  - [[x]] 회원가입 API (`POST /register`)
  - [[x]] 로그인 API (`POST /login`)
  - [[x]] 회원정보 확인 API (`GET /user`)
  - [[x]] 프로필 수정 API (`PATCH /profile`)

### 4. 레이아웃과 네비게이션
- [[x]] 공통 레이아웃 (`MainLayout`) 구현
- [[x]] **ProtectedRoute 설정**
  - 인증되지 않은 사용자는 로그인 페이지로 리디렉션

### 5. MBTI 문항 가져오기
- [[x]] `src/data/questions.js` 생성
  - 20개의 MBTI 문항 작성

### 6. json-server 셋업 및 API 연결
- [x] `db.json` 생성
  - 초기 데이터 작성
- [x] `json-server` 설치 및 설정 (`scripts`에 추가)
- [x] `src/api/testResults.js` 생성
  - [x] 테스트 결과 CRUD API 작성
    - `GET /testResults`
    - `POST /testResults`
    - `DELETE /testResults/:id`
    - `PATCH /testResults/:id`

### 7. MBTI 테스트 페이지
- [x] `src/utils/mbtiCalculator.js` 생성
  - MBTI 결과 계산 로직 작성
  - MBTI 유형 설명 포함 (`mbtiDescriptions`)
- [x] `TestForm` 컴포넌트 생성
  - 질문 랜더링 및 응답 처리
- [x] `TestPage` 컴포넌트 생성
  - `TestForm` 사용 및 결과 처리

### 8. 테스트 결과 리스트 구성
- [x] `TestResultList.jsx` 생성
  - 결과 리스트 표시 및 필터링
- [ ] `TestResultItem.jsx` 생성
  - 결과 공개 여부 변경 및 삭제 기능 구현

---

## 🚀 도전 기능

### 1. 로그인 유지 기능 구현
- [ ] 새로고침 시 로그인이 유지되도록 `localStorage` 또는 `sessionStorage` 활용

### 2. Tanstack Query 사용
- [ ] 테스트 결과 상태 관리를 Tanstack Query(React Query)로 구현

### 3. Axios Instance 사용
- [x] Axios 인스턴스 생성
  - [x] 공통 설정 및 인터셉터 적용
  - [x] 재사용 가능한 API 호출 로직 작성


---

## 💻 배포
- **Vercel**을 사용하여 프로젝트 배포.
- 배포 URL: [https://mbti-test-delta.vercel.app/](https://mbti-test-delta.vercel.app/)



---

## 🌟 미리보기

### 홈 화면 (인트로)
![홈 화면 (인트로)](https://github.com/user-attachments/assets/752fc9bc-236b-4d36-9725-1b78c2607d58)

### 로그인 화면
![로그인 화면](https://github.com/user-attachments/assets/b93f8728-6ab2-4b39-bd3a-dce009707508)

### 회원가입 화면
![회원가입 화면](https://github.com/user-attachments/assets/a2bb1664-81d2-40b7-b867-ef96bc6113ff)

### 로그인 홈 화면
![로그인 홈 화면](https://github.com/user-attachments/assets/f71de6c2-d093-4ac8-9201-0053b2c69f9f)

### 테스트 화면
![테스트 화면](https://github.com/user-attachments/assets/b7aad26a-63ce-4ad2-831a-f32e39b9b0f0)

### 프로필 수정 화면
![프로필 수정 화면](https://github.com/user-attachments/assets/2de29af9-39dd-4c80-b7fe-6b8338ac8ef6)

### 결과 목록 화면
![결과 화면](https://github.com/user-attachments/assets/8c9d855b-57b7-4945-b950-d31b1f0b03d5)

### 결과 저장 목록 화면
![저장 목록 화면](https://github.com/user-attachments/assets/2a0bb07d-f593-417b-b5fd-bbb45eb37df5)

---
