<template>
  <div class="navmenu">
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item
        v-for="section in sections"
        @click="doSmoothScroll(section.link)"
        :key="section.id"
      >
        <i :class="section.icon"></i>
        <span>{{ section.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import Vue from 'vue'
import SmoothScroll from 'vue-smoothscroll'

Vue.use(SmoothScroll)

export default {
  methods: {
    doSmoothScroll (id) {
      this.$SmoothScroll(document.getElementById(id), 1000, null, null, 'y')
    }
  },
  data () {
    return {
      sections: [
        {id: 1, title: 'About', link: 'about', icon: 'el-icon-s-home'},
        {id: 2, title: 'Portfolio', link: 'portfolio', icon: 'el-icon-s-platform'},
        {id: 3, title: 'Skillset', link: 'skillset', icon: 'el-icon-menu'},
        {id: 4, title: 'Contact', link: 'contact', icon: 'el-icon-message'}
      ]
    }
  }
}
</script>

<style scoped>
</style>
