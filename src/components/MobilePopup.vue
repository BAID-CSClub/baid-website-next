<template>
  <div
    class="backdrop flex items-center justify-center flex-col"
    @click.self="$emit('close')"
  >
    <div
      class="bg-white rd-5 p-6 max-w-80vw max-h-70vh box-border overflow-auto"
    >
      <slot name="content"></slot>
    </div>
    <slot name="description"></slot>
  </div>
</template>
<style scoped>
.backdrop {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: 20;
  backdrop-filter: blur(3px);
}
</style>
