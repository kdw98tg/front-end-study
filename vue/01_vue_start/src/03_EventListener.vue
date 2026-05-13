<script setup>
//v-on 디렉티브를 사용하여 DOM 이벤트 감지 가능
//이것도 마찬가지로, v-on 은 js 의 변수나 이런걸 읽을 수 있으므로, 머스태시 안쓰고 사용 가능
//또한, 자주 사용되므로, v-on 은 @로 축약할 수 있음
import { ref } from 'vue';
const count = ref(0);

function increase() {
    ++count.value;
}
</script>

<template>
    <button v-on:click="increase">{{ count }}</button>
    <button @click="increase">{{ count }}</button>
</template>

<style></style>