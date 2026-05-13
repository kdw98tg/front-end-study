<script setup>
  import {reactive, ref} from 'vue';
  const counter = reactive({count: 1});
  const message = ref("안녕하세요")
</script>

<template>
  <h1>{{ message }}</h1>
  <p>숫자 세기 : {{ counter.count }}</p>
</template>

<style scoped></style>
