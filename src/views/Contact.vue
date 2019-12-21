<template>
  <div class="contact-content">
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="12" :offset="6">
            <div class="header-title">
              <h2>Contact</h2>
              <p>お仕事の依頼・ご相談などはこちら</p>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col>
            <ul class="sns-links">
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
img {
  width: 50px; height: 50px;
  object-fit: contain;
}
ul {
	list-style-type: none;
	padding-left: 0;
}
li {
	width: 50px;
	height: 50px;
	padding: 10px;
	margin: 10px;
}
.sns-links {
	text-align: center;
}
.sns-links li {
	display: inline-block;
}

</style>
