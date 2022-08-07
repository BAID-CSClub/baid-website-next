<template>
    <section class="pt-45 pl-20">
        <FancyTitle :top="$t('CampusLife.Activities.Title')" btm="Student Activities" color="red"></FancyTitle>
        <div id="selector" class="flex-row flex justify-center">
            <div id="selected" class="p-0">
               <img :src="homeBg1" style="max-width: 400px; max-height: 400px;"/>
            </div>
            <div id="options" class="flex-col flex">
                <div id="option1" class="p-0">
                    <img :src="homeBg1" style="max-width: 100px; max-height: 100px;"/>
                </div>
                <div id="option2" class="p-0">
                    <img :src="homeBg1" style="max-width: 100px; max-height: 100px;"/>
                </div>
                <div id="option3" class="p-0">
                    <img :src="homeBg1" style="max-width: 100px; max-height: 100px;"/>
                </div>
                <div id="option4" class="p-0">
                    <img :src="homeBg1" style="max-width: 100px; max-height: 100px;"/>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
import FancyTitle from '../../components/FancyTitle.vue'
</script>

<style scoped>

</style>
