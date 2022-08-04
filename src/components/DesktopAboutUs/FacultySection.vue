<template>
    <section class="section">
        <div id="faculty" class="p-y-10 font-sans flex-col">
            <h2 class="title"> {{ $t("AboutUs.Faculty.Title") }}</h2>
            <div class="flex items-center p-y-10 text-center">
                <div style="width: 50%;" class="ratio">{{ $t("AboutUs.Faculty.Ratio") }}</div>
                <div style="width: 50%;">{{ $t("AboutUs.Faculty.Content") }}</div>
            </div>
        </div>

    </section>
</template>

<script>
</script>
<style>
.ratio {
    font-size: 4rem;
    font-weight: 700;
}
</style>
