<template>
    <section class="pt-30 pl-20 pr-20 pb-40">
        <FancyTitle :top="$t('CampusLife.Events.Title')" btm="Special Events" color="red"></FancyTitle>
        <div id="photo" class="flex flex-row pt-10">
            <div id="leftSide" class="flex flex-col">
                <div id="activity1" class="flex bg-red" style="width:510px;height:623px">

                </div>
                <div id="activity2" class="flex bg-blue" style="width:510px;height:251px">

                </div>
            </div>
            <div id="rightSide" class="flex flex-col">
                <div id="rightUpper" class="flex flex-row">
                    <div id="rightUpperLeft" class="flex flex-col">
                        <div id="rightUpperLeftUpper" class="flex bg-yellow" style="width:427px;height:260px">

                        </div>
                        <div id="rightUpperLeftBottom" class="flex bg-pink" style="width:427px;height:250px">

                        </div>
                    </div>
                    <div id="rightUpperRight" class="flex bg-green" style="width:300px;height:510px">

                    </div>
                </div>
                <div id="activity3" class="flex bg-black" style="width:727px;height:364px">

                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import FancyTitle from '../../components/FancyTitle.vue'
</script>

<style scoped>

</style>
