<script setup>
//때로, 부수 효과를 반응적으로 수행해야 할 필요가 있음
//예를들어 숫자가 변경될 때마다 콘솔에 로그를 남기는 경우임
//이러한 작업은 watcher를 통해서 달성할 수 있음
//useEffect에 DependencyArray를 넣어서 사용하는것과 같은 맥락인듯

//인자로 넘겨준 count의 값이 바뀔 때 마다, 콜백이 실행됨.
import { ref, watch } from 'vue';
const count = ref(0);

const todoId = ref(1);
const todoData = ref(null);

watch(count, (newCount) => {
    console.log(`new Count is ${newCount}`);
})

//react의 useEffect는 마운트 되자마자 자동으로 실행되는데, vue는 안됨
//그래서 immediate를 true로 만들어주던가
//아니면 getTodo 함수를 위에서 한번 실행시켜주는 과정이 필요함
watch(todoId, getTodo, { immediate: true })

async function getTodo() {
    todoData.value = null;
    const newTodoData = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`);
    todoData.value = await newTodoData.json();
}
function addTodoId() {
    ++todoId.value;
}

</script>

<template>
    <div>
        <button @click="count++">할일 Counter : {{ count }}</button>
    </div>

    <div>
        <button @click="addTodoId()">할일 가져오기 : {{ todoId }}</button>
        <p>{{ todoData }}</p>
    </div>
</template>

<style></style>