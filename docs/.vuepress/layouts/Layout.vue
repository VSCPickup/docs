<script setup lang="ts" >

import { Layout } from 'vuepress-theme-plume/client'



</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <Layout #aside-outline-after>
    <div class="custom-content">
      <div class="divider"></div>
      <a href="https://qm.qq.com/q/SWDWmDGsE0"><Icon name="brands:qq" color="currentColor" /> 加入QQ交流群 -></a><br>
      <a href="/"><Icon name="brands:bilibili" color="currentColor"/> 频道B站账号 -></a><br>
    </div>
  </Layout>
</template>

<style scoped>
 a {
   font-size: 13px;
   margin-left: 18px;
   color: #67676c;
 }

 .divider {
   border: 0;
   height: 1px;
   background-color: #e2e2e3;
   margin: 30px auto 15px auto;
 }


</style>