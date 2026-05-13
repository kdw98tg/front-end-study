<script setup>
//v-bind와 v-on을 함께 사용하면, 폼 입력 요소에서 양방향 바인딩을 할 수 있음
//머스태시 안쓰고도 바인딩 가능한 기능이라고 생각하면 될 듯
//v-model 은 input, textArea, select 에만 사용할 수 있음
import { ref } from 'vue'
const text = ref('')

function onInput(event) {
    console.log("123");
    text.value = event.target.value;
}
</script>

<template>
    <div>
        <h1>v-model 미사용</h1>
        <input type="text" v-bind:value="text" v-on:input="onInput" placeholder="입력해주세요.">
        <p>{{ text }}</p>
    </div>

    <div>
        <h1>v-model 사용</h1>
        <input type="text" v-model="text" placeholder="입력해주세요." />
        <p>{{ text }}</p>
    </div>

</template>

<style></style>