<template>
  <div class="skillset-content">
    <el-container>
      <el-header>
        <div class="header-title">
          <h2>Skillset</h2>
        </div>
      </el-header>
      <el-container>
        <el-main>
          <el-row :gutter="20">
            <el-col :span="20" :offset="1">
              <el-table :data="tableData" style="width: 100%">
                <el-table-column label="Category" width="150">
                  <template slot-scope="scope">
                    <img v-for="(icon, index) in scope.row.icons" :src="icon" height="30" :key="index">
                  </template>
                </el-table-column>
                <el-table-column prop="subject"></el-table-column>
                <el-table-column prop="overview" label="Overview"></el-table-column>
              </el-table>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>

export default {
  name: 'Skillset',
  data() {
    return {
      tableData: [
        {
          category: 'java',
          icons: [
            require('@/assets/skillset/java.png'),
            require('@/assets/skillset/spring.png'),
            require('@/assets/skillset/tomcat.png'),
          ],
          subject: 'Java8/Struts1/Play/Spring(boot)',
          overview: '環境構築、運用、開発一通り経験済み。spring-boot1系から2系へのupdate経験有',
        },
        {
          category: 'python',
          icons: [
            require('@/assets/skillset/python.png'),
            require('@/assets/skillset/pyramid.png'),
          ],
          subject: 'Python2.7/Python3.6/Pyramid',
          overview: 'おもにServerlessで活用中',
        },
        {
          category: 'ruby',
          icons: [
            require('@/assets/skillset/ruby.png'),
            require('@/assets/skillset/rails.png'),
          ],
          subject: 'Ruby/Rails',
          overview: 'Ruby Gold(2.1)保有 Rails経験はあまりない',
        },
        {
          category: 'golang',
          icons: [
            require('@/assets/skillset/golang.png'),
          ],
          subject: 'Go lang',
          overview: '勉強中',
        },
        {
          category: 'frontend',
          icons: [
            require('@/assets/skillset/html5.png'),
            require('@/assets/skillset/css3.png'),
            require('@/assets/skillset/node.png'),
            require('@/assets/skillset/jquery.png'),
            require('@/assets/skillset/backbonejs.png'),
            require('@/assets/skillset/vue.png'),
          ],
          subject: 'HTML5/CSS3/Node/jQuery/Backbon.js/Vue.js',
          overview: '基本的には触れる程度。Backbone.jsは開発で使ったことがある程度。Vueは勉強中',
        },
        {
          category: 'infra',
          icons: [
            require('@/assets/skillset/aws.png'),
          ],
          subject: 'EC2/S3/Lambda/ECS/Cloudwatch/Cloudformation/SAM',
          overview: 'AWS歴2年弱。Serverlessを中心にAWSのマネージドサービスを組み合わせてシステムを構築する経験を積む',
        },
        {
          category: 'database',
          icons: [
            require('@/assets/skillset/mysql.png'),
            require('@/assets/skillset/dynamodb.jpeg'),
            require('@/assets/skillset/elasticsearch.png'),
            require('@/assets/skillset/oracle.png'),
            require('@/assets/skillset/redis.png'),
          ],
          subject: 'MySQL/DynamoDB/Elasticsearch/Oracle(11g)/Redis',
          overview: 'オンプレで長らくMySQL+Oracle(+Redis)を使用。AWSでサービス運用中はDynamoDB+Elasticsearchが中心',
        },
        {
          category: 'middleware',
          icons: [
            require('@/assets/skillset/fluentd.png'),
            require('@/assets/skillset/embulk.png'),
            require('@/assets/skillset/docker.png'),
            require('@/assets/skillset/nginx.png'),
          ],
          subject: 'Fluentd/Embulk/Docker/Nginx',
          overview: '開発、保守。構築経験はあまりない',
        },
        {
          category: 'social',
          icons: [
            require('@/assets/skillset/backlog.png'),
            require('@/assets/skillset/slack.png'),
            require('@/assets/skillset/redmine.png'),
            require('@/assets/skillset/github.png'),
            require('@/assets/skillset/gitlab.png'),
          ],
          subject: 'Backlog/Redmine/Slack/Github/Gitlab',
          overview: '特に特筆なし',
        },
      ]
    }
  }
}

</script>
