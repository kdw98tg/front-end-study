<script setup>
import { ref, computed, useAttrs } from 'vue';

//폴스루 속성이란, 자식 컴포넌트의 template 안에 하나의 요소로 묶여 있을 때,
//부모에서 정한 class id 같은 속성이 자식의 최상위 요소로 적용되는걸 말함
//react에서는 jsx 에서 반환할때, 무조건 하나의 요소로 묶여있어야 함
//vue는 그런 제약 없음.
//근데 폴스루 속성 때문에 보통 하나의 요소로 관리하는게 좋아보임

//폴스루 속성은 자주 안쓰일거처럼 보임
//어떤 프로젝트에서도 사용될 수 있는 input 이나 이런 공용 컴포넌트를 조절할때,
//모든 요소를 props 로 내려주기 힘드니까 이걸 쓰는거처럼 보임

//이거 쓰면, 스타일 상속 안됨
defineOptions({
    inheritAttrs: false,
})

//js로도 접근 가능
//얘는 폴스루 속성을 반영하지만, 성능상의 이유로 반응형이 아님
//변경을 감지하려면 watcher로 억지로 추적해야 함
//또한, watcher말고, 반응성이 필요하다면 props로 넘기면 됨
const attrs = useAttrs();
console.log(attrs);
//
</script>

<template>
    <div>
        123
        <button>
            <!-- $attrs 객체에는 컴포넌트의 props나 emits 옵션에 선언되지 않은
              모든 속성(예: class, style, v-on 리스너 등)이 포함됩니다. -->
            <div>폴스루 속성 : {{ $attrs }}</div>
            123123
        </button>
    </div>
    <div v-bind="$attrs">123123</div>
</template>

<style scoped></style>