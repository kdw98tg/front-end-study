<script setup>
import { ref, computed } from 'vue';
const greetingMessage = ref('greeting!');

</script>

<template>
    <button>
        <!--이름이 없는 slot은 암묵적으로 default 라는 이름을 가지게 됨-->
        <slot>slot에 아무것도 없을때의 기본값</slot>
    </button>
    <!-- slot에게 이름에 따라서 다른녀석들을 넣고 싶을때 -->
    <header>
        <slot name="header"></slot>
    </header>
    <main>
        <slot name="main"></slot>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>

    <div v-if="$slots.header">
        header의 slot이 있을때만 랜더링 됩니다.
    </div>

    <!-- 이때 자식이 부모에게 "부모님, 화면 그리실 때 제 데이터도 가져다 쓰세요!" 하고 데이터를 위로 올려보내 주는 기능이 바로 '스코프드 슬롯'입니다. -->
    <!-- 이렇게 하면, text 라는 이름으로 greetingMessage가 올라가고
     count 라는 이름으로 1이라는 값이 올라감 -->
    <div>
        <slot :text="greetingMessage" :count="1"></slot>
    </div>
</template>

<style scoped></style>