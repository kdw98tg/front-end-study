<script setup>
import { ref, computed } from 'vue';

const model = defineModel();

function update() {
    model.value++;
}

</script>

<template>
    <div>자식 컴포넌트에서 부모에 바인딩된 v-model 값: {{ model }}</div>
    <button @click="update">증가</button>
</template>

<style scoped></style>