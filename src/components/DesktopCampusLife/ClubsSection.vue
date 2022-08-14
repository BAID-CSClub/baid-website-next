<template>
    <section class="bg-blue" style="align-content:center max_width:100% max_height:268px height:268px">
        <h1 class="text-18 font-300 font-title color-white text-center pt-9">{{ $t("CampusLife.Clubs.Title") }}</h1>
        <div id="clubs" class="flex justify-center">
            <div id="club1" style="height:250px;width:250px;margin:20px;box-shadow: 8px 4px 4px 3px rgba(0, 0, 0, 0.5)" class="bg-yellow">
                <p class="mt-20% ml-32% text-9 font-400 font-title color-white">{{ $t("CampusLife.Clubs.Sub1") }}</p>
                <img :src="homeBg1" style="max-width:100px;max-height:100px;" class="ml-30%"/>
            </div>
            <div id="club2" style="height:250px;width:250px;margin:20px;box-shadow: 8px 4px 4px 3px rgba(0, 0, 0, 0.5)" class="bg-red" >
                <p class="mt-20% ml-32% text-9 font-400 font-title color-white">{{ $t("CampusLife.Clubs.Sub2") }}</p>
                <img :src="homeBg1" style="max-width:100px;max-height:100px" class="ml-30%"/>
            </div>
            <div id="club3" style="height:250px;width:250px;margin:20px;box-shadow: 8px 4px 4px 3px rgba(0, 0, 0, 0.5)" class="bg-green">
                <p class="mt-20% ml-32% text-9 font-400 font-title color-white">{{ $t("CampusLife.Clubs.Sub3") }}</p>
                <img :src="homeBg1" style="max-width:100px;max-height:100px" class="ml-30%"/>
            </div>
            <div id="club4" style="height:250px;width:250px;margin:20px;box-shadow: 8px 4px 4px 3px rgba(0, 0, 0, 0.5)" class="bg-lightblue">
                <p class="mt-20% ml-32% text-9 font-400 font-title color-white">{{ $t("CampusLife.Clubs.Sub4") }}</p>
                <img :src="homeBg1" style="max-width:100px;max-height:100px" class="ml-30%"/>
            </div>
        </div>
    </section>
</template>

<script setup>
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
</script>

<style scoped>
    .clubimg{
        padding: 0 2.5rem;
    }
</style>
