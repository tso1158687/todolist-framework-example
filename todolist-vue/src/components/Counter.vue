<script setup lang="ts">
import { useCountStore } from '@/stores/counter.store';
import { storeToRefs } from 'pinia';
import { computed, ref, watch } from 'vue';

const props = defineProps({
    initValue: {
        type: Number,
        default: 100
    }
});

const emits = defineEmits<{
    reset: []
    counterValue: [value: number] // named tuple syntax
}>()

// const emits = defineEmits<{
//     (e: 'reset'): void
// },{
//     (e: 'count-change', newCount: number): void
// }>();
// }>(['reset']);
// const emit = defineEmits<{
//   (e: 'count-change', newCount: number): void
// }>()
const count = ref(0);
const double = computed(() => count.value * 2)
const counterStore = useCountStore()
const { shareCount, shareTripleCount } = storeToRefs(counterStore)
const { increment, decrement } = counterStore
const sValue = ref(0)
watch(() => props.initValue, (newVal, oldVal) => {
    count.value = newVal;
}, { immediate: true });

function add() {
    count.value++
    increment()
}

function sub() {
    count.value--
    decrement()
}

function reset() {

    emits('reset')
}

function resetTo() {
    emits('counterValue', sValue.value)
}




</script>
<template>
    <div>
        <div>Counter</div>{{ initValue }}
        <button @click="add">Increment</button>
        <button @click="sub">Sub</button>

        <div>current:{{ count }}</div>
        <div>double:{{ double }}</div>
        <div>share{{ shareCount }}</div>
        <div>shareTriple{{ shareTripleCount }}</div>
        <button @click="reset">reset share</button>

        <input type="number" v-model="sValue"><button @click="resetTo">reset to</button>
    </div>
</template>