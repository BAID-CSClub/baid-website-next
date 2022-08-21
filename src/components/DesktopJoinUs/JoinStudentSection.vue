<template>
  <section class="section">
    <div class="p-y-10 font-sans flex-col">
      <h2 class="title">{{ $t('JoinUs.Student.Title') }}</h2>
      <p class="content">{{ $t('JoinUs.Student.Content') }}</p>
      <div
        class="flex items-center justify-center text-8 m-t-10 p-y-10 bg-[var(--standard-red)] rd-5 color-white"
      >
        <div style="flex: 3" class="text-center">{{ $t('JoinUs.Join') }}</div>
        <div style="flex: 1" class="text-center">→</div>
        <div style="flex: 3" class="text-center color-[var(--standard-red)]">
          <div class="bg-white rd-5 p-3" style="display: inline-block">
            {{ $t('JoinUs.Faculty.Join') }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
