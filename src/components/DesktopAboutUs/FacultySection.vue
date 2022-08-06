<template>
    <section class="section">
        <div id="faculty" class="p-y-10 font-sans flex-col items-center">
            <!-- <h2 class="title"> {{ $t("AboutUs.Faculty.Title") }}</h2> -->
            <FancyTitle :top="$t('AboutUs.Faculty.Title')" btm="Faculty" color="blue"></FancyTitle>
            <div class="flex items-center p-y-10 text-center">
                <div class="ratio w-1/2">{{ $t("AboutUs.Faculty.Ratio") }}</div>
                <p class="content w-1/2">{{ $t("AboutUs.Faculty.Content") }}</p>
            </div>
        </div>

    </section>
</template>

<script setup>
import FancyTitle from '../FancyTitle.vue'
</script>
<style>
.ratio {
    font-size: 4.5rem;
    font-weight: 700;
}
</style>
