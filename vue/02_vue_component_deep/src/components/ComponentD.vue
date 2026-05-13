<script setup>
import { ref, computed } from 'vue';
//컴포넌트는 내장된 $emit 메서드를 사용하여 v-on 으로 직접 커스텀 이벤트를 발생시킬 수 있음
//부모는 emit으로 정의된 이벤트를 v-on 또는 @ 으로 사용할 수 있음
//컴포넌트에서는 cammelcase 로, 부모에서는 자동으로 kebab case로 변환됨

//이벤트 선언하기
const emit = defineEmits(['inFocus', 'submit'])

function onSubmitClicked(message) {
    emit('submit', message);
}

function onInFocusClicked(message) {
    emit('inFocus', message);
}

</script>

<template>
    <div>
        <button @click="$emit('increaseBy', 1)">ComponentD에서 클릭이벤트 emit</button>
    </div>

    <div>
        <button @click="onSubmitClicked('submited')">자식의 submitEvent</button>
        <button @click="onInFocusClicked('focused')">자식의 onFocusEvent</button>
    </div>
</template>

<style scoped></style>
