<template>
    <section id="container" style="align-content:center max_width:100% max_height:268px height:268px')">
        <h1 class="text-12 font-300 font-title color-white text-center pt-9">{{ $t("CampusLife.Clubs.Title") }}</h1>
        <div id="clubs" class="flex justify-center">
            <div id="club1" style="height:250px;width:250px;margin:20px;box-shadow: 8px 4px 4px 3px rgba(0, 0, 0, 0.5);background-color: var(--standard-blue)">
                <p class="mt-25% ml-36% text-8 font-400 font-title color-white">{{ $t("CampusLife.Clubs.Sub1") }}</p>
                <img :src="homeBg1" style="max-width:81px;max-height:81px;" class="ml-32%"/>
            </div>
            <div id="club2" style="height:250px;width:250px;margin:20px;box-shadow: 8px 4px 4px 3px rgba(0, 0, 0, 0.5);background-color: rgba(255, 251, 243, 1)">
                <p style="color:rgba(18, 42, 43, 1)" class="mt-25% ml-38% text-8 font-400 font-title">{{ $t("CampusLife.Clubs.Sub2") }}</p>
                <img :src="homeBg1" style="max-width:81px;max-height:81px" class="ml-35%"/>
            </div>
            <div id="club3" style="height:250px;width:250px;margin:20px;box-shadow: 8px 4px 4px 3px rgba(0, 0, 0, 0.5);background-color: rgba(255, 195, 0, 1)">
                <p class="mt-25% ml-38% text-8 font-400 font-title color-white">{{ $t("CampusLife.Clubs.Sub3") }}</p>
                <img :src="homeBg1" style="max-width:81px;max-height:81px" class="ml-35%"/>
            </div>
            <div id="club4" style="height:250px;width:250px;margin:20px;box-shadow: 8px 4px 4px 3px rgba(0, 0, 0, 0.5);background-color: rgba(131, 5, 14, 1)">
                <p class="mt-25% ml-38% text-8 font-400 font-title color-white">{{ $t("CampusLife.Clubs.Sub4") }}</p>
                <img :src="homeBg1" style="max-width:81px;max-height:81px" class="ml-35%"/>
            </div>
        </div>
    </section>
</template>

<script setup>
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
import campusBg3 from '../../assets/images/campusBg3.png?webp'
</script>

<style scoped>
    .clubimg{
        padding: 0 2.5rem;
    }
    #container{
        background-image: url("../../assets/images/campusBg3.png?webp");
        background-repeat: no-repeat;
        background-size: 100% 600px;
    }
</style>
