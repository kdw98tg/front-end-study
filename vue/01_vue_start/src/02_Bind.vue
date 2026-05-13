<script setup>
//Vue에서 머스태시는 텍스트 보간에만 사용됨

//디렉티브는 v- 접두사로 시작하는 특별한 속성임
//디렉티브의 값은 컴포넌트의 상태에 접근할 수 있는 JavaScript 표현식임
//:두의 부분은 디렉티브의 인자임
//v-bind 는 자주 사용되기 때문에 전용 축약 문법이 있음

import { ref } from "vue";
const titleClass = ref("title");
</script>

<template>
    <!-- v-bind는 js의 변수값을 읽는 용도라서 사용 가능 -->
    <h1 v-bind:class="titleClass">ㅎㅇ</h1>
    <!-- v-bind가 없으면 단순한 문자열을 넣는게 됨-->
    <h1 class="title">ㅎㅇ</h1>
    <!-- 아래처럼 v-bind가 없으면 머스태시 쓸 수 없음-->
    <h1 class="{{ titleClass }}">ㅎㅇ</h1>
</template>

<style>
.title {
    color: red;
}
</style>
