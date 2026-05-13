import { createApp } from "vue";
import App from "./App.vue";
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";

const app = createApp(App);
//전역으로 컴포넌트 등록하면, 이 애플리케이션 내의 모든 컴포넌트의 템플릿에서 사용 가능함
//서로 내부에서도 사용가능함
//하지만, 전역 등록은 몇가지 문제가 존재함
//1. 전역 등록은 빌드 시스템이 사용하지 않는 컴포넌트를 제거하지 못하게 함
//   컴포넌트를 전역으로 등록했지만, 앱 어디에서도 사용하지 않아도 최종 번들에 여전히 포함됨

//2. 전역 등록은 대규모 애플리케이션에서 의존성 관계를 덜 명확하게 만듭니다. 부모 컴포넌트에서 자식 컴포넌트의 구현체를 찾기 어렵게 함
//   즉, 그냥 전역변수를 사용하는것과 마찬가지로, 전역컴포넌트가 많으면 유지보수에 어려움이 생김

// 
app.component("ComponentA", ComponentA).component("ComponentB", ComponentB);
app.mount("#app");
