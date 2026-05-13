<script setup>
//리스트를 렌더링 하는 방식
//v-for 디렉티브를 사용함
import { ref } from 'vue'

let id = 0;

const newTodo = ref('');
const todos = ref([
    { id: id++, text: "HTML 배우기" },
    { id: id++, text: "js 배우기" },
    { id: id++, text: "ts 배우기" },
]);

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
        <li v-for="todo in todos" :key="todo.id">
            <span>{{ todo.text }}</span>

            <button @click="removeTodo(todo)">x</button>
        </li>
    </ul>
</template>

<style></style>