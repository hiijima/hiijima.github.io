<template>
  <div class="about-content">
    <el-container>
      <el-header height="100">
        <div class="header-title">
          <h2>自己紹介</h2>
          <p>埼玉県熊谷市のフリーランスWebエンジニア</p>
          <div class="fixed-mobile trim">
            <img src="@/assets/self.jpg">
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="150px">
          <div class="trim">
            <img src="@/assets/self.jpg">
          </div>
        </el-aside>
        <el-main>
          <div class="block">
            <el-timeline>
              <el-timeline-item timestamp="2011/4" placement="top">
                <el-card>
                  <h4>某SIer・SES企業に就職</h4>
                  <p>主にJavaを使ったバックエンド開発・テストを実施</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2012/1" placement="top">
                <el-card>
                  <h4>旅行ECサイトの開発・保守</h4>
                  <p>Javaによるバックエンド＋Pythonフロントエンド開発。7年ほど経験</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/8" placement="top">
                <el-card>
                  <h4>不正検知Saasの開発・運用・保守</h4>
                  <p>オンプレ利用からAWSへ。オンプレとは違うクラウド特有の問題解決アプローチを知る</p>
                  <p>Serverlessの良さに気付き始める。Serverlessの運用をどう回していくかに奮闘中</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2020/1" placement="top">
                <el-card>
                  <h4>フリーランスとして活動</h4>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
</script>

<style scoped>
.fixed-mobile {
  display:none;
}
@media screen and (max-width: 700px) {
  .fixed-mobile {
    display:block;
  }
}
/* profile imageの角取 */
.trim {
  position:relative;
  overflow: hidden;
  width:150px;
  height:150px;
  border-radius:50%;
}
.trim img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  height:100%;
}
</style>
