<template>
    <section class="section">
        <div id="test-center" class="p-y-10 font-sans flex">
            <div class="text-white flex-col w-1/2 pr-7">
                <h2 class="title" style="color: white">
                    {{ $t("AboutUs.TestCenter.Title") }}
                </h2>
                <p class="content "> {{ $t("AboutUs.TestCenter.Content") }}</p>
            </div>
            <div style="width: 50%" class="pl-7 w-1/2">
                <img :src="homeBg1" style="max-width: 100%;
        max-height: 100%;" alt="pic1" />
            </div>
        </div>
    </section>
</template>

<script setup>
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
</script>
