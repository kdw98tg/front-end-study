<script setup>
//리스트를 렌더링 하는 방식
//v-for 디렉티브를 사용함

//완료된 할 일을 다르게 랜더링하는 과정이 필요함
//그럴때, computed를 사용함
//다른 반응형 데이터 소스를 기반으로 value를 계산하는 ref를 만드는 녀석임
import { ref, computed } from 'vue'

let id = 0;

const hideCompletedTodos = ref(false);
const newTodo = ref('');
const todos = ref([
    { id: id++, text: "HTML 배우기", isDone: true },
    { id: id++, text: "js 배우기", isDone: false },
    { id: id++, text: "ts 배우기", isDone: false },
]);

function toggleHideCompletedTodos() {
    hideCompletedTodos.value = !hideCompletedTodos.value;
}

//A와 B가 있으면 그걸 합쳐서 C라는걸 만들어줄게 라는 역할
//만약에 성과 이름이 있는데, 그걸 template 에서는 머스태치를 사용해서 더해줘야 함
//근데 computed가 있으면, ref로 참조된 변수들을 연산해서 반환하는게 가능함
//그리고 ref 로 참조되는 녀석들이 computed 안에 있으면, ref의 값이 바뀔 때, 자동으로 다시 연산해서 리렌더링 해줌
const filteredTodos = computed(() => {
    //todos.value 와 hideCompleted.value에 따라서
    //필터링된 할 일 목록을 반환함
    // const undoTodoArray = todos.value.filter(todo => todo.isDone !== true);
    // return undoTodoArray;
    let result = undefined;
    if (hideCompletedTodos.value === true) {
        result = todos.value.filter(todo => todo.isDone !== true)
    }
    else {
        result = todos.value;
    }
    return result;
});

function addTodo() {
    todos.value.push({ id: id++, text: newTodo.value })
    newTodo.value = '';
}

function removeTodo(todo) {
    const newTodoArray = todos.value.filter(t => t.id !== todo.id);
    todos.value = newTodoArray;
}


</script>

<template>
    <div>
        <input type="text" v-model="newTodo">
        <button @click="addTodo">할 일 추가</button>
    </div>

    <ul>
        <li v-for="todo in filteredTodos" :key="todo.id">
            <input type="checkbox" v-model="todo.isDone">
            <!-- done: todo.isDone 이렇게 하면, todo.isDone 의 값이 true, false 로 바뀜에 따라서 자동으로 done 이라는 클래스를 넣었다 빼줌-->
            <span :class="{ done: todo.isDone }">{{ todo.text }}</span>

            <button @click="removeTodo(todo)">x</button>
        </li>
    </ul>
    <button @click="toggleHideCompletedTodos">
        {{ hideCompletedTodos ? "모두 보기" : "완료된 항목 숨기기" }}
    </button>
</template>

<style>
.done {
    text-decoration: line-through;
}
</style>

