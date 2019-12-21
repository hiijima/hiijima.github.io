<template>
  <div class="contact-content">
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="12" :offset="6">
            <div class="header-title">
              <h2>Contact</h2>
              <p>お仕事の依頼・ご相談などSNSまたはメールにてご連絡ください。</p>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-main>
          <el-row :gutter="20">
            <el-col :span="12" :offset="8">
              <ul id="sns-links">
                <li v-for="item in items" :key="item.name">
                  <a :href="item.link" class="btn-circle-flat" target="_blank">
                    <img :src="item.image">
                  </a>
                </li>
              </ul>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [{
        name: 'mail',
        image: require('@/assets/mail.png'),
        link: 'mailto:mail@hiroakiiijima.biz'
      },
      {
        name: 'github',
        image: require('@/assets/github.png'),
        link: 'https://github.com/hiijima'
      },
      {
        name: 'twitter',
        image: require('@/assets/twitter.png'),
        link: 'https://twitter.com/hiijima79'
      }]
    }
  },
  methods: {
  }
}
</script>

<style scoped>

li {
  display: inline;
  padding: 0 5px;
}

img {
  width: 80px; height: 80px;
  object-fit: contain;
}

</style>
