<template>
    <section class="pt-45 pl-20 pr-20">
        <FancyTitle :top="$t('CampusLife.Activities.Title')" btm="Student Activities" color="red"></FancyTitle>
        <div id="selector" class="flex-row flex justify-center pt-15">
            <div id="selected" style="width: 880px; height: 508px" class="bg-red">
                <h2 class="ml-5 font-sans color-white mt-80 font-400 text-18 mb-0">{{ $t("CampusLife.Activities.Selected.Title") }}</h2>
                <p class="ml-5 font-sans color-white font-400 text-12 mt-0">{{ $t("CampusLife.Activities.Selected.Description") }}</p>
            </div>
            <div id="options" class="flex-col flex">
                <div id="option1" style="width: 350px; height: 125px" class="flex-row flex border-lightblue b-1 bg-white">
                    <div id="option1Text" style="width: 175px; height: 125px">
                        <p class="ml-5 font-sans color-[var(--standard-blue)]">{{ $t("CampusLife.Activities.Option1.Date") }}</p>
                        <p class="ml-5 font-sans color-[var(--standard-blue)]">{{ $t("CampusLife.Activities.Option1.Title") }}</p>
                    </div>
                    <img :src="homeBg1" style="width: 175px; height: 125px">
                </div>
                <div id="option2" style="width: 350px; height: 125px" class="flex-row flex border-lightblue b-1 bg-white">
                    <div id="option2Text" style="width: 175px; height: 125px">
                        <p class="ml-5 font-sans color-[var(--standard-blue)]">{{ $t("CampusLife.Activities.Option2.Date") }}</p>
                        <p class="ml-5 font-sans color-[var(--standard-blue)]">{{ $t("CampusLife.Activities.Option2.Title") }}</p>
                    </div>
                    <img :src="homeBg1" style="width: 175px; height: 125px">
                </div>
                <div id="option3" style="width: 350px; height: 125px" class="flex-row flex border-lightblue b-1 bg-white">
                    <div id="option3Text" style="width: 175px; height: 125px">
                        <p class="ml-5 font-sans color-[var(--standard-blue)]">{{ $t("CampusLife.Activities.Option3.Date") }}</p>
                        <p class="ml-5 font-sans color-[var(--standard-blue)]">{{ $t("CampusLife.Activities.Option3.Title") }}</p>
                    </div>
                    <img :src="homeBg1" style="width: 175px; height: 125px">
                </div>
                <div id="option4" style="width: 350px; height: 125px" class="flex-row flex border-lightblue b-1 bg-white">
                    <div id="option3Text" style="width: 175px; height: 125px">
                        <p class="ml-5 font-sans color-[var(--standard-blue)]">{{ $t("CampusLife.Activities.Option4.Date") }}</p>
                        <p class="ml-5 font-sans color-[var(--standard-blue)]">{{ $t("CampusLife.Activities.Option4.Title") }}</p>
                    </div>
                    <img :src="homeBg1" style="width: 175px; height: 125px">
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
