<script setup>
import { ref, computed, inject } from 'vue';

//component를 설계하다보면, props drilling이 생길 수 있음
//이걸 막기 위해서 provide를 사용함
//provide는 부모폼에서 정의를 하고
//그걸 받아서 쓰는 쪽에서는 inject를 사용하여 사용함
const providedMessage = inject('provideMessage');
</script>

<template>
    <div>
        <h1>{{ providedMessage }}</h1>
    </div>
</template>

<style scoped></style>