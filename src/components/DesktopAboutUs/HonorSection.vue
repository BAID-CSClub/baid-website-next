<template>
    <section class="section">
        <div id="honor" class="p-y-10 font-sans flex-col">
            <h2 class="title">
                {{ $t("AboutUs.Honor.Title") }}
            </h2>
            <div class="flex pt-10 pb-10">
                <div class="honor-small-pic">
                    <img :src="homeBg1" style="max-width: 100%;
        max-height: 100%;" alt="pic1" />
                </div>
                <div class="honor-small-pic">
                    <img :src="homeBg1" style="max-width: 100%;
        max-height: 100%;" alt="pic1" />
                </div>
                <div class="honor-small-pic">
                    <img :src="homeBg1" style="max-width: 100%;
        max-height: 100%;" alt="pic1" />
                </div>
            </div>
            <div class="flex items-center">
                <p style="width: 50%;" class="pr-7">{{ $t("AboutUs.Honor.Content") }}</p>
                <div style="width: 50%;" class="pl-7">
                    <img :src="homeBg1" style="max-width: 100%;
        max-height: 100%;" alt="pic1" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
</script>

<style>
.honor-small-pic {
    padding: 0 2.5rem;
}
</style>