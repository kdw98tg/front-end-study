<script setup>
import { ref } from 'vue';

// v-if 디렉티브를 사용하여 요소를 조건부로 렌더링 할 수 있음
// 조건에 따라서 하려면 v-if, v-else 를 사용해서 렌더링 하면 됨
const isTrue = ref(true);

function toggle() {
    isTrue.value = !isTrue.value;
}
</script>

<template>
    <button @click="toggle">토글 버튼 {{ isTrue }}</button>
    <h1 v-if="isTrue">true 인 상태임</h1>
    <h1 v-else>false 인 상태임</h1>
</template>

<style></style>