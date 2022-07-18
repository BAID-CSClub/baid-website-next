<template>
    <div class="flex" :style="{color: props.color}">
        <img :src="logoUrl" alt="logo" class="w-16 h-16 m-r-1"/>
        <div class="flex flex-col justify-center font-serif transition-colors">
            <h2 class="m-0 text-4 font-500 m-b-1">北京中学国际部</h2>
            <p class="m-0 text-3">Beijing Academy International department</p>
        </div>
    </div>
    

</template>

<script setup>
import { computed } from '@vue/reactivity'
import logoNormal from '../assets/images/logoNormal.png'

const props = defineProps({
    color: {
        type: String,
        default: '#000'
    },
    logoType: {
        type: String,
        default: 'normal' // normal, ...
    }
})

const logoUrl = computed(() => {
    if (props.logoType === 'normal') {
        return logoNormal
    }
})
</script>