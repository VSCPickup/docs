<script setup lang="ts">
import { computed } from 'vue'
import { VPLink } from 'vuepress-theme-plume/client'
import { useRouteLocale } from 'vuepress/client'

</script>

<template>
  <div class="aside-nav-wrapper">
    <VPLink class="link" no-icon href="">
      <span class="vpi-bilibili" />
      <span class="link-text">在Bilibili关注我们</span>
      <span class="vpi-arrow-right" />
    </VPLink>
    <VPLink class="link" no-icon href="https://qm.qq.com/q/dmHPau0k5q">
      <span class="vpi-qq" />
      <span class="link-text">加入我们的QQ交流群</span>
      <span class="vpi-arrow-right" />
    </VPLink>

  </div>
</template>

<style scoped>
.aside-nav-wrapper {
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  margin: 16px 16px 0;
  border-top: solid 1px var(--vp-c-divider);
}

.aside-nav-wrapper .link {
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 14px;
  color: var(--vp-c-text-2);
  transition: color var(--vp-t-color);
}

.aside-nav-wrapper .link:hover {
  color: var(--vp-c-brand-1);
}

.aside-nav-wrapper .link .link-text {
  flex: 1 2;
  font-size: 12px;
}

.vpi-bilibili {
  --icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M488.6 104.1c16.7 18.1 24.4 39.7 23.3 65.7l0 202.4c-.4 26.4-9.2 48.1-26.5 65.1-17.2 17-39.1 25.9-65.5 26.7L92 464c-26.4-.8-48.2-9.8-65.3-27.2-17.1-17.4-26-40.3-26.7-68.6L0 169.8c.8-26 9.7-47.6 26.7-65.7 17.1-16.3 38.8-25.3 65.3-26.1l29.4 0-25.4-25.8c-5.7-5.7-8.6-13-8.6-21.8s2.9-16.1 8.6-21.8 13-8.6 21.9-8.6 16.1 2.9 21.9 8.6l73.3 69.4 88 0 74.5-69.4C381.7 2.9 389.2 0 398 0s16.1 2.9 21.9 8.6c5.7 5.7 8.6 13 8.6 21.8s-2.9 16.1-8.6 21.8L394.6 78 423.9 78c26.4 .8 48 9.8 64.7 26.1zm-38.8 69.7c-.4-9.6-3.7-17.4-10.7-23.5-5.2-6.1-14-9.4-22.7-9.8l-320.4 0c-9.6 .4-17.4 3.7-23.6 9.8-6.1 6.1-9.4 13.9-9.8 23.5l0 194.4c0 9.2 3.3 17 9.8 23.5s14.4 9.8 23.6 9.8l320.4 0c9.2 0 17-3.3 23.3-9.8s9.7-14.3 10.1-23.5l0-194.4zM185.5 216.5c6.3 6.3 9.7 14.1 10.1 23.2l0 33.3c-.4 9.2-3.7 16.9-9.8 23.2-6.2 6.3-14 9.5-23.6 9.5s-17.5-3.2-23.6-9.5-9.4-14-9.8-23.2l0-33.3c.4-9.1 3.8-16.9 10.1-23.2s13.2-9.6 23.3-10c9.2 .4 17 3.7 23.3 10zm191.5 0c6.3 6.3 9.7 14.1 10.1 23.2l0 33.3c-.4 9.2-3.7 16.9-9.8 23.2s-14 9.5-23.6 9.5-17.4-3.2-23.6-9.5c-7-6.3-9.4-14-9.7-23.2l0-33.3c.3-9.1 3.7-16.9 10-23.2s14.1-9.6 23.3-10c9.2 .4 17 3.7 23.3 10z"/></svg>')
}
.vpi-qq {
  --icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M530.1 484.4C518.6 485.8 485.2 431.7 485.2 431.7C485.2 463 469.1 503.9 434.2 533.5C451 538.7 489 552.7 480 567.9C472.7 580.2 354.5 575.8 320.4 571.9C286.3 575.7 168.1 580.2 160.8 567.9C151.8 552.7 189.7 538.7 206.6 533.5C171.7 504 155.5 463.1 155.5 431.7C155.5 431.7 122.2 485.8 110.6 484.4C105.2 483.8 98.2 454.8 119.9 384.7C130.2 351.7 141.9 324.2 160 278.9C156.9 162 205.2 63.9 320.3 63.9C434 63.9 483.5 160 480.6 278.9C498.7 324.1 510.5 351.8 520.7 384.7C542.5 454.8 535.4 483.8 530 484.4z"/></svg>')
}

.vpi-bubble-tea {
  --icon: url('data:image/svg+xml,');
}
</style>

