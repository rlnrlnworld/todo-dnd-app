# 📝 Todo DnD App
> 이 프로젝트는 프론트엔드 개발 학습을 위한 교육용 토이 프로젝트입니다.

간단한 할 일 목록(Todo List)을 작성하고, 항목들을 **마우스로 드래그 앤 드롭(Drag and Drop)** 하여 순서를 자유롭게 조정할 수 있는 React 기반의 프로젝트입니다.  
드래그 앤 드롭은 [@dnd-kit](https://github.com/clauderic/dnd-kit)을 사용하여 구현되었으며, 키보드 접근성까지 고려된 유연한 방식으로 동작합니다.
사용자는 항목을 마우스로 누른 채 이동하거나, 키보드로 포커스를 이동해 순서를 바꿀 수 있습니다.  
Next.js와 TypeScript를 사용하여 작성되었으며, **단위 테스트 + 자동화된 테스트 환경(CI/CD)** 을 구성하여 테스트 중심 개발 방식을 연습합니다.

---

## 🚀 데모

👉 [배포 링크 (Vercel)](https://todo-dnd-app-five.vercel.app/)

---

## 📦 기술 스택

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **@dnd-kit/core** – 드래그 앤 드롭 구현
- **Jest + React Testing Library** – 테스트
- **GitHub Actions** – 테스트 자동화

---

## 🔄 CI/CD란?

CI/CD는 **지속적 통합(Continuous Integration)** 과 **지속적 배포(Continuous Deployment)** 를 의미합니다.  
이 프로젝트에서는 GitHub Actions를 통해 코드를 `main` 브랜치에 푸시하거나 PR할 때 자동으로 테스트를 실행하여, 코드 품질을 지속적으로 확인합니다.

- CI: 테스트 자동 실행으로 코드 안정성 확보
- CD: 테스트 통과 시 자동 배포 (Vercel 연동 시 가능)

✅ 즉, 실수로 인한 버그가 코드에 포함되지 않도록 방지하고, 테스트가 실패하면 병합/배포가 중단됩니다.

---

## 🧪 테스트

이 프로젝트는 **단위 테스트(Unit Test)** 와 **통합 테스트(Integration Test)** 를 포함하고 있습니다.

### ✅ 단위 테스트

- 개별 컴포넌트 동작 테스트
- 예: `할 일 추가 버튼을 누르면 onAdd가 호출되는지 확인`

### ✅ 통합 테스트

- 여러 컴포넌트 간 상호작용 검증
- 예: `할 일을 추가한 후 삭제 버튼 클릭 → 화면에서 사라짐 확인`

### 🛠 실행 방법

```bash
npm install
npm test
```