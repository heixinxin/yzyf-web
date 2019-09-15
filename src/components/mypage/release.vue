<template>
  <div>
    <div class="headertwo clearfloat" id="header">
      <p class="fl">我的发布</p>
      <a href="#" class="fr" @click="jobCreate"><i class="iconfont icon-jia fl"></i>新建</a>
    </div>

    <div v-if="List" class="recom clearfloat">
      <div class="content clearfloat box-s">
        <div class="list clearfloat fl box-s" v-for="(list, index) in List">
          <a @click="detail(list.id)" href="">
            <div class="tit clearfloat">
              <p class="fl">{{index+1}}、{{ list.name }}</p>
              <span class="fr">￥{{ list.price }}<!--<samp>元/月</samp>--></span>
            </div>
            <p class="recom-jianjie">{{ list.company }}</p>
            <div class="right clearfloat">
              <div class="tit clearfloat">
                <p class="fl">{{ list.place }}</p>
                <span class="fr">入职奖励：100<!--<samp>元/月</samp>--></span>
              </div>
              <div class="tit clearfloat">
                <p class="fl renshu">人数:{{ list.job_number }}人</p>
                <span class="fr">推荐奖励：100<!--<samp>元/月</samp>--></span>
              </div>
            </div>
          </a>
            <div class="prebtn">
              <a href="" @click="edit(list.id)" class="weui-btn weui-btn_mini weui-btn_default">编辑</a>
              <a href="" @click="perlist(list.id)" class="weui-btn weui-btn_mini weui-btn_primary">查看报名</a>
            </div>
        </div>
        <div v-if="!loadMore" class="load-tip clearfloat fl box-s" id="zy-load">
          <p v-if="!loadErr && !loadEnd && loadK" id="load-genduo" @click="clickList" class="load-genduo"><a class="btn dis_inBlock">点击加载更多</a></p>
          <p v-if="loadEnd" class="zanwugenduo"><span>加载到底了</span></p>
          <p v-if="loadErr" class="zanwugenduo"><span style="color: red">加载失败</span></p>
        </div>
        <div v-if="loadMore" class="weui-loadmore">
          <i class="weui-loading"></i>
          <span class="weui-loadmore__tips">正在加载</span>
        </div>
      </div>
    </div>

    <div v-else-if="!List" class="recom1">你还没有发布岗位哟</div>
  </div>
</template>

<script>
  // 我的发布岗位页面
  import Home from '../../api/home'

  export default {
    name: 'release',
    data () {
      return {
        List: [],
        page: 1,
        loadK:true,
        loadMore: false,
        loadEnd: false,
        loadErr: false
      }
    },

    created: function () {
      this.init()
    },

    methods: {
      tangK () {
        layer.open({
          content: "你还不是商家哟"
          ,btn: ['申请成为商家', '取消']
          ,skin: 'footer'
          ,yes: function(index){
            window.location.href = '/auth'
          }
          ,no: function (index) {
            history.go(-1)
          }
        });
      },

      async init () {
        if (!this.$store.state.userinfo.perAdmin) {
          this.loadK = false
          this.tangK()
        }else{
          this.List = await Home.getMyList(this.page)
        }
      },

      async jobCreate () {
        if (this.$store.state.userinfo.perAdmin) {
          this.$router.push({name: 'jobOperation'})
        }else {
          this.tangK()
        }
      },

      async detail(detail_id) {
        this.$router.push({ name: 'job_detail',  query: { detail_id: detail_id}})
      },

      async clickList() {
        this.loadMore = true
        // await Home.getMyList(++this.page).then( (list) => {
        //   if (list && list.length === 10) {
        //     Array.prototype.push.apply(this.List, list);
        //     this.loadMore = false
        //   }else if (list){
        //     Array.prototype.push.apply(this.List, list);
        //     this.loadEnd = true
        //     this.loadMore = false
        //   }else {
        //     this.loadErr = true
        //   }
        // }).catch(() => {
        //   this.loadErr = true
        // })
        const list = await Home.getMyList(++this.page)
        if (list && list.length === 10) {
          Array.prototype.push.apply(this.List, list);
          this.loadMore = false
        }else if (list){
          Array.prototype.push.apply(this.List, list);
          this.loadEnd = true
          this.loadMore = false
        }else {
          this.loadErr = true
        }
      },

      async perlist (job_id) {
        this.$router.push({ name: 'myjobper', query: { job_id: job_id}})
      },

      async edit (job_id) {
        console.log(job_id)
        this.$router.push({name: 'editOperation', query:{ job_id: job_id}})
      }

    }
  }
</script>

<style scoped>
  .headertwo p{
    width: 60%;
  }
  .recom{
    margin-top: 14%;
  }
  .recom1{
    margin-top: 17%;
    text-align: center;
    font-size: 0.6rem;
  }
  .weui-btn{
    width: 40%;
  }
  .prebtn{
    text-align: -webkit-center
  }
  .weui-btn_default{
    float: left;
  }
  .weui-btn_primary {
    float: right;
  }
  .weui-btn+.weui-btn {
    margin: 0;
  }
  /*.weui-btn_mini{*/
    /*font-size: 13px;*/
  /*}*/
  #header p {
    margin-left: 20%;
  }
  #header a {
    font-size: .5rem;
    color: #fff;
  }
  #header a i {
    margin: 0.07rem;
  }
</style>
