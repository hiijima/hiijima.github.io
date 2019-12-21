<template>
  <div id="app">

    <el-container>

      <el-header height="350px">
        <header-area />
        <navigation />
      </el-header>

      <el-container>
        <el-container>
          <el-main>
            <transition mode="out-in">
              <router-view />
            </transition>
          </el-main>
          <el-footer></el-footer>
        </el-container>
      </el-container>

    </el-container>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'

export default {
  components: {
    'header-area': Header,
    'navigation': Navigation,
  }
}
</script>


<style>
/* 各章タイトルの中央よせ */
@media screen and (max-width: 700px) {
  aside {
    display:none;
  }
}
.header-title {
  text-align: center;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
