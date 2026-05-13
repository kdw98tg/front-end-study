<script setup>
import { watchEffect, watch } from 'vue';

//구조분해할당 문법을 사용하는게 점점 많아짐
const { message } = defineProps(['message']);
//const props = defineProps(['message']);

//react의 useEffect와 같은 녀석임
//react처럼 의존성 배열을 굳이 넣어줄 필요 없이, 안에있는 변수를 추적해서 렌더링함 (vue 3.5+)
//watch, watchEffect의 차이점은, 명시적, 비명시적도 있지만
//watchEffect는 실행할 때, 바로 한번 실행한다는 장점이 있음

watchEffect(() => {
    console.log(message);
    //console.log(props.message);
})

//watch에서 props 의 값을 사용하거나,
//또는 외부 util 함수에서 props로 들어온 반응성 값을 사용해야 한다면,
//js 의 함수는 기본적으로 값타입을 넘겨주기 때문에,
//message만 넣게되면, 기본 값타입만 넘어가서, 변경사항을 추적하기 힘듦
//그래서 getter함수를 사용해서 ()=>message 로 넘겨줘야, 추적이 가능한 참조를 넣어줄 수 있음
watch(() => message, (newVail) => {
    console.log(newVail);
})
</script>

<template>
    <div>
        <h1>{{ message }}</h1>
    </div>
</template>

<style></style>

