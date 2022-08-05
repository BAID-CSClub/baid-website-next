<template>
    <section class="section">
        <div id="faculty" class="p-y-10 font-sans flex-col items-center">
            <h2 class="title"> {{ $t("AboutUs.Faculty.Title") }}</h2>
            <div class="flex items-center p-y-10 text-center">
                <div style="flex: 1;" class="ratio">{{ $t("AboutUs.Faculty.Ratio") }}</div>
                <p class="content" style="flex: 1;">{{ $t("AboutUs.Faculty.Content") }}</p>
            </div>
        </div>

    </section>
</template>

<script>
</script>
<style>
.ratio {
    font-size: 4.5rem;
    font-weight: 700;
}
</style>
