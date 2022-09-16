<template>
  <section class="section font-sans">
    <div>
      <h3>{{ $t('JoinUs.Faculty.Title') }}</h3>
      <pre class="content">{{ $t('JoinUs.Faculty.Content') }}</pre>
      <div
        class="flex items-center justify-center text-8 m-t-10 p-y-10 bg-[var(--standard-blue)] rd-5 color-white"
      >
        <div style="flex: 3" class="text-center">{{ $t('JoinUs.Join') }}</div>
        <div style="flex: 1" class="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
            fill="white"
          >
            <path
              d="M22.95 38.9q-.4-.4-.4-1.05t.4-1.05l11.3-11.3H9.5q-.65 0-1.075-.425Q8 24.65 8 24q0-.65.425-1.075Q8.85 22.5 9.5 22.5h24.75l-11.3-11.3q-.4-.4-.4-1.075 0-.675.4-1.075.4-.4 1.05-.4t1.05.4l13.9 13.9q.25.25.35.5.1.25.1.55 0 .25-.1.525t-.35.525l-13.9 13.9q-.4.4-1.05.375-.65-.025-1.05-.425Z"
            />
          </svg>
        </div>
        <div style="flex: 3" class="text-center color-[var(--standard-blue)]">
          <div class="bg-white rd-5 p-3" style="display: inline-block">
            {{ $t('JoinUs.Faculty.Join') }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
