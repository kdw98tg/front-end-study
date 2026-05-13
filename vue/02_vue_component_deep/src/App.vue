<script setup>
import ComponentC from './components/ComponentC.vue';
import ComponentD from './components/ComponentD.vue';
import { ref, provide } from 'vue';
import ComponentE from './components/ComponentE.vue';
import ComponentF from './components/ComponentF.vue';
import ComponentG from './components/ComponentG.vue';
import ComponentH from './components/ComponentH.vue';
const count = ref(0);
const countModel = ref(0);
const message = ref('부모에서 정의된 반응형 message');

//provide 할 값은 ref 를 비롯하여 어떤 타입이든 될 수 있음
provide('provideMessage', 'Provided Message');
</script>

<template>
    <!--props로 값을 전달할 때, 반응형 값이라면 v-bind:message 이렇게 쓰고-->
    <!--그게 아니라 그냥 값만 넘길거면 message 만 써도 됨-->
    <!--또한, Props의 데이터 방향은 반드시 하향식임.-->
    <!--부모컴포넌트가 업데이트 되면 물려있는 자식 컴포넌트의 props 값이 바뀌면서 자식컴포넌트 전부가 리렌더링 대상임-->
    <!--즉, 자식 컴포넌트 내부에서 prop을 변경하려고 시도해서는 안됨-->
    <!--그러면, Vue는 콘솔에서 경고를 표시하게 됨-->

    <!-- 자식에서 바꿔야 하는 경우를 막는 방법에는 뭐가 있을까 -->
    <!-- prop이 초기값을 전달하는 용도로 사용되고, 자식 컴포넌트가 이후에 로컬 데이터 속성처럼 사용하고 싶을때
      그냥 로컬 데이터로 만드는게 좋음 -> prop으로 관리하는게 아니었던거지 -->
    <!-- props가 변환이 필요한 원시데이터로 전달될때
       props는 데이터만 넘겨주고, 그 값을 이용해서 다른 값을 얻어야 할 때는, props를 바꾸는게 아니라, props 는 readonly로 
       남겨두고, 다른 속성을 만들어서 계산된 결과값을 거기에 대입하는게 좋음-->

    <!-- 또한, 리스트의 아이템이나 이런걸 자식에서 변경할때는, 직접 배열이나 객체를 변경하는게 아니라
        이벤트를 prop으로 받아서, 이벤트를 발생시키는게 좋음 
        결국 부모컴포넌트에서 변경을 다 관리하는거지-->
    <div class="parent">
        <ComponentC message="Hello, World!" />
    </div>

    <div class="parent">
        <p>ComponentD에서 이벤트를 발생시켜 증가된 count : {{ count }}</p>
        <ComponentD @increase-by="(n) => { count += n; console.log(count) }" @in-focus="(str) => console.log(str)"
            @submit="(str) => console.log(str)" />
    </div>

    <div class="parent">
        <ComponentE v-model="countModel" />
        <p>부모에 정의된 model의 값: {{ countModel }}</p>
    </div>

    <div class="parent">
        <ComponentF class="someBtn" id="btn" />
    </div>

    <div class="parent">
        <ComponentG>slot으로 내용물을 채워보자</ComponentG>

        <!-- text만 들어가는게 아니라, 요소도 slot으로 들어갈 수 있음 걍 위치를 잡아준다 느낌인듯 -->
        <ComponentG>
            <span style="color:red;">123</span>
        </ComponentG>

        <!-- 부모에서 정의된 message 템플릿 표현식은 부모에서만접근 가능하고, 자식도 마찬가지 자식에서 정의된 템플릿 포현식은 자식에서만 접근 가능하다 -->
        <ComponentG>{{ message }}</ComponentG>

        <!--slot에 아무것도 안넣으면 기본값으로 설정된 녀석이 나옴-->
        <ComponentG></ComponentG>

        <ComponentG>
            <template v-slot:default>기본 slot에 들어갈 내용</template>
            <template v-slot:header>header에 들어갈 내용</template>
            <template v-slot:main>main에 들어갈 내용</template>
            <template v-slot:footer>footer에 들어갈 내용</template>
        </ComponentG>

        <!-- 아래는 축약형 -->
        <ComponentG>
            <!--아무 이름도 없으면 암묵적으로 기본 slot-->
            기본 slot에 들어갈 내용
            <template #header>header에 들어갈 내용</template>
            <template #main>main에 들어갈 내용</template>
            <template #footer>footer에 들어갈 내용</template>
        </ComponentG>

        <ComponentG>
            <!--아무 이름도 없으면 암묵적으로 기본 slot-->
            기본 slot에 들어갈 내용
            <template #main>main에 들어갈 내용</template>
            <template #footer>footer에 들어갈 내용</template>
        </ComponentG>

        <ComponentG>
            <template v-slot="slotProps">
                <h1>{{ slotProps.text }}</h1>
                <h2>{{ slotProps.count }}</h2>
            </template>
        </ComponentG>


    </div>

    <div class="parent">
        <!-- 반응형 provide / inject 값을 사용할 때는,
        가능하다면 반응형 상태의 모든 변경을 제공자 내부에서만 처리하는 것이 좋습니다.
        이렇게 하면 제공된 상태와 그 변이 로직이 동일 컴포넌트에 위치하게 되어, 향후 유지보수가 쉬워집니다. -->
        <ComponentH />
    </div>
</template>

<style scoped>
div.parent {
    margin-bottom: 3rem;
    border: 3px solid green;
}

.someBtn {
    color: blue;
}
</style>
