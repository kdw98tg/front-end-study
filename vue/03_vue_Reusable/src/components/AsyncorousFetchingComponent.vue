<!-- <script setup>
import { ref, computed } from 'vue';
const data = ref(null);
const error = ref(null);

fetch('...')
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .then((err) => (error.value = err))
</script>

<template>
    <div v-if="error">Error 났음</div>
</template>

<style scoped></style> -->

<script setup>
import useFetch from '@/composable/useFetch';
import { ref, computed } from 'vue';
const { data, error } = useFetch("...");

</script>

<template>
    <div>

    </div>
</template>

<style scoped></style>