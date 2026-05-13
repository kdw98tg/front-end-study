<script setup>
const props = defineProps({
    message: String,
});

//발생시킬 이벤트 선언
const emit = defineEmits(['response']);

emit('response', "자식으로부터 hello")
</script>

<template>
    <h1>Child Component</h1>
    <h2>Props로 받은 message : {{ message }}</h2>
    <h3>
        <div>
            <slot></slot>
        </div>
        <div>
            <slot name="test"></slot>
        </div>
    </h3>
</template>