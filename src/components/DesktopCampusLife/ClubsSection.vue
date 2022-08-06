<template>
    <section class="bg-blue" style="align-content:center">
        <h1 class="text-18 font-300 font-sans color-white text-center">Clubs</h1>
        <div id="clubs" class="flex justify-center">
            <div id="club1" class="clubimg">
                <img :src="homeBg1" style="max-width:100px;max-height:100px"/>
            </div>
            <div id="club2" class="clubimg">
                <img :src="homeBg1" style="max-width:100px;max-height:100px"/>
            </div>
            <div id="club3" class="clubimg">
                <img :src="homeBg1" style="max-width:100px;max-height:100px"/>
            </div>
            <div id="club4" class="clubimg">
                <img :src="homeBg1" style="max-width:100px;max-height:100px"/>
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
