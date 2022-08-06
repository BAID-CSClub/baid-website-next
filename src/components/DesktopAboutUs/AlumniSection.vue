<template>
    <section class="section">
        <div id="alumni" class="p-y-10 font-sans flex-col items-center">
            <!-- <h2 class="title">
                {{ $t("AboutUs.Alumni.Title") }}
            </h2> -->
            <FancyTitle :top="$t('AboutUs.Alumni.Title')" btm="Alumni" color="red"></FancyTitle>
            <div class="flex">
                <div style="flex: 1" class="pr-5 flex pl-8 items-center">
                    <img :src="homeBg1" style="max-width: 100%;
        max-height: 100%;" alt="pic1" class="alumni-big-pic" />
                </div>
                <div style="flex: 2" class="flex-col pl-5">
                    <div>
                        <div class="text-9 font-700">“</div>
                        <p class="p-5 content">{{ $t("AboutUs.Alumni.Content") }}</p>

                        <div class="text-9 font-700 text-right">”</div>
                    </div>
                    <div class="flex">
                        <div class="alumni-small-pic">
                            <img :src="homeBg1" style="max-width: 100%;
        max-height: 100%;" alt="pic1" />
                        </div>
                        <div class="alumni-small-pic">
                            <img :src="homeBg1" style="max-width: 100%;
        max-height: 100%;" alt="pic1" />
                        </div>
                        <div class="alumni-small-pic">
                            <img :src="homeBg1" style="max-width: 100%;
        max-height: 100%;" alt="pic1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
import FancyTitle from '../FancyTitle.vue'
</script>

<style>
.alumni-big-pic {
    box-shadow: -2rem 2rem var(--standard-red), -0.25rem 0.25rem 0.25rem grey;
}

.alumni-small-pic {
    margin: 1rem;
}
</style>
