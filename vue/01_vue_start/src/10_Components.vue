<script setup>
import ChildComponent from "./10_ChildComponent.vue"
import { ref } from "vue";
const childMsg = ref('');
</script>

<template>
    <ChildComponent v-bind:message="'Hello'" v-on:response="(msg) => childMsg = msg" />
    <ChildComponent v-bind:message="childMsg" v-on:response="(msg) => childMsg = msg" />
    <ChildComponent>slot에 넣은 문자열</ChildComponent>
    <ChildComponent>
        <template #default>
            이름 없는 slot에 대입
        </template>
        <template #test>
            test라는 이름을 가진 slot에 대입
        </template>
    </ChildComponent>
</template>

<script></script>