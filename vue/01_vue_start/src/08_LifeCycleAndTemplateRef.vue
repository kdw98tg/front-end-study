<script setup>

//지금까지 Vue는 반응성과 선언적 렌더링 덕분에 DOM 업데이트를 자동을 수행했음
//하지만 결국에는 DOM을 수동으로 다루어야 하는 경우가 생길 수 있음
//script 영역에서 사용하는 ref가 아닌, template에서 ref를 속성으로 사용할 수 있음
//template ref는 템플릿 내의 요소에 대한 참조임
//즉, ref 변수에 DOM 안에 있는 요소를 찾아서 넣을때 사용하는듯
//querySelector나 getElement 와 같은걸 안쓰고 Vue 만의 방식인듯
//처음에 null로 초기화 하는 이유는 template이 생성되기 전이라 그럼
//template이 생성되고 나서, pElementRef를 찾아서 넣는 방식이라고 보면 됨
import { onMounted, ref } from 'vue';
const pElementRef = ref(null);
console.log("pElementRef: " + pElementRef.value);

onMounted(() => {
    //컴포넌트가 마운트 되고 나서 실행되는 영역
    //컴포넌트가 마운트 되었다면, 이제 p 태그를 찾아서 불러올 수 있음.
    //따라서 로그 찍어보면 이제 p 요소가 나옴
    console.log("pElementRef: " + pElementRef.value);
})
</script>

<template>
    <p ref="pElementRef">ㅎㅇ</p>
</template>

<style></style>