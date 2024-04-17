<template>
  <div class="">
    <component :is="$clientType === 'desktop' ? DesktopLayout : MobileLayout">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </component>
  </div>
</template>

<script setup>
import DesktopLayout from "./layouts/DesktopLayout.vue";
import MobileLayout from "./layouts/MobileLayout.vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
const { locale, t } = useI18n({ useScope: "global" });

const router = useRouter();
router.beforeEach((to) => {
  const lang = to.params.lang || navigator.language;
  locale.value = lang;

  // Set title
  console.log(to, import.meta.env.BASE_URL, lang);
  const title = t("views." + to.name);
  document.title = title;

  if (
    to.path === import.meta.env.BASE_URL ||
    to.path === import.meta.env.BASE_URL + "/" ||
    to.path === "/"
  ) {
    if (window.prod) {
      return { path: "/" + lang + "/" };
    }

    return { path: import.meta.env.BASE_URL + "/" + lang + "/" };
  }
});
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.fade-enter-active,
.fade-leave-active {
  /* transition: opacity 0.5s ease; */
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
