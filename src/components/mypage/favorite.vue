<template>
  <div>
    <div class="headertwo clearfloat" id="header">
      <p class="fl">我的收藏</p>
    </div>
    <div v-if="List" class="recom clearfloat">
    <div class="content clearfloat box-s">
      <div class="list clearfloat fl box-s" v-for="(list, index) in List">
    <a @click="detail(list[0].id)" href="">
      <div class="tit clearfloat">
        <p class="fl">{{index+1}}、{{ list[0].name }}</p>
        <span class="fr">￥{{ list[0].price }}<!--<samp>元/月</samp>--></span>
      </div>
      <p class="recom-jianjie">{{ list[0].company }}</p>
      <div class="right clearfloat">
        <div class="tit clearfloat">
          <p class="fl">{{ list[0].place }}</p>
          <span class="fr">入职奖励：100<!--<samp>元/月</samp>--></span>
        </div>
        <div class="tit clearfloat">
          <p class="fl renshu">人数:{{ list.job_number }}人</p>
          <span class="fr">推荐奖励：100<!--<samp>元/月</samp>--></span>
        </div>
      </div>
    </a>
  </div>
  </div>
  </div>
    <div v-else-if="!List" class="recom1">你还没有收藏岗位哟</div>
  </div>
</template>

<script>
  // 收藏页面
  import favorite from '../../api/favorite'
  export default {
    name: 'favorite',
    data () {
      return {
        List: []
      }
    },
    created: function () {
      this.init()
    },
    methods: {
      async init () {
        const res = await favorite.getList()
        this.List = res.favoriteList
      },

      async detail(detail_id) {
        this.$router.push({ name: 'job_detail',  query: { detail_id: detail_id}})
      }
    },
  }
</script>

<style scoped>
.recom{
  margin-top: 14%;
}
.recom1{
  margin-top: 17%;
  text-align: center;
  font-size: 0.6rem;
}
</style>
