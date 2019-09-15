<template>
<div v-if="loding">
  <div class="headertwo clearfloat" id="header">
    <p class="fl">兼职信息</p>
  </div>

  <!--分享内容-->
  <div class="am-share">
    <h3 class="am-share-title">分享到</h3>
    <ul class="am-share-sns">
      <li><a href="#"> <i class="iconfont icon-weixin weixin"></i> <span>微信</span> </a></li>
      <li><a href="#"> <i class="iconfont icon-qq qq"></i> <span>QQ</span> </a></li>
      <li><a href="#"> <i class="iconfont icon-weibo weibo"></i> <span>微博</span> </a></li>
      <li><a href="#"> <i class="iconfont icon-renrenwang renren"></i> <span>人人</span> </a></li>
    </ul>
    <div class="am-share-footer">
      <button class="share_btn">取消</button>
    </div>
  </div>

  <div class="clearfloat" id="main">

    <div class="service-top clearfloat box-s">
      <div class="left fl clearfloat box-s">
        <div class="tit clearfloat" style="padding-right: 5px">
          <p class="fl space">{{ detail.name }}</p>
          <span class="fr titwo">￥{{detail.price}}<!--<samp>元/月</samp>--></span>
        </div>
        <div class="clearfloat jiangli" style="padding-right: 5px">
          <p class="fl">人数：<font style="color: red">{{ detail.job_number_count }}</font>/{{ detail.job_number }}人</p>
          <span class="fr jl" >在职奖励：200</span>
          <span class="fr jl">推荐奖励：200</span>
        </div>
        <p class="tit weui-flex"><span style="flex: 1">{{detail.company}}</span><span style="text-align: right;padding-right: 0.2rem;">{{detail.update_time}}</span></p>
      </div>
      <div @click="Collection1" class="right fl clearfloat">
        <i v-if="display" class="iconfont icon-shoucang1"></i>
        <i v-else class="iconfont icon-shoucang"></i>
        <p>收藏</p>
      </div>
    </div>
    <!--
        <div class="service-ctent clearfloat">
            <div class="recom-tit clearfloat box-s">
                <p>房屋信息</p>
            </div>
            <div class="service-list clearfloat box-s">
                <ul>
                    <li>类型：住宅</li>
                    <li>朝向：南</li>
                    <li>楼层：12/28</li>
                    <li>装修：精装修</li>
                    <li>现状：空闲</li>
                    <li>可入驻：2016/03/07</li>
                    <li>建造年代：2008年</li>
                    <li>可看房：2016/03/07以后</li>
                </ul>
                <p class="service-tit">交通：公交8路、111、124、136、156</p>
            </div>
        </div>-->

    <div class="service-ctent clearfloat">
      <div class="recom-tit clearfloat box-s">
        <p style="font-weight: bold">奖励说明</p>
      </div>
      <p class="tit box-s" style="text-indent: 2em;">
        此岗位在职奖励100元/月，可连续领取三个月；推荐奖励100元/月，可连续领取三个月。
        用户报名成功后，可进入“个人中心-我的工作”中查看，根据提示要求领取奖励，推荐人同步获取推荐奖励，并可在“个人中心-我的推荐”中查看！
      </p>
    </div>
    <div class="service-ctent clearfloat">
      <div class="recom-tit clearfloat box-s">
        <p>工作描述</p>
      </div>
      <p v-html="detail_job" class="tit box-s job" >
        <!--【岗位要求】<br>-->
        <!--1、性别不限，18-50岁；<br>-->
        <!--2、身体健康，能吃苦耐劳，品行端正；<br>-->
        <!--3、能接受轮岗及服从加班安排；<br>-->
        <!--4、有超市工作经验者优先考虑 ；<br>-->
        <!--【薪酬待遇】：<br>-->
        <!--1、2400元/月,综合工时制172小时，超出172小时按每小时14元加班费结算;<br>-->
        <!--2、不提供吃饭住宿，没有补贴.每月15号发放上个月薪资(招商银行卡）;<br>-->
        <!--3、公司设有微波炉跟冰箱可以带饭到公司，公司内部也有便民快餐购买;<br>-->
        <!--4、统一发放工服（不收取费用，但离职需退回，若有遗失，照价赔偿）<br>-->
        <!--【工作时间】:<br>-->
        <!--早班7:00–14:30，中班14:00–21:30，吃饭扣半小时，每天7小时，月休4天；倒班一天一倒（今天早班明天中班）；<br>-->
        <!--【入职须知】：<br>-->
        <!--1、面试需带身份证原件及3张身份证复印件，银行卡复印件1张，2张1寸照片（不分红蓝底），健康证原件；   <br>  -->
        <!--2、 2天（室内培训60元/人/天，门店培训按正常上班），3天离职无工资，面试通过后由专人会通知；<br>-->
      </p>
    </div>
    <div class="service-ctent clearfloat">
      <div class="recom-tit clearfloat box-s">
        <p>公司介绍</p>
      </div>
      <p class="tit box-s" style="text-indent: 2em;">
        {{detail.company_info}}
        <!--鸿通股份创建于1998年，鸿运通技术服务有限公-->
        <!--司为其全资下属企业，注册资金500万，是国内领先的企业管理综合技术服-->
        <!--务提供商之一，目前已在武汉、咸宁、北京、上海、广州、东莞和香港等多地设立分公司、办事-->
        <!--处，满足不同地区的客户需求。 鸿运通公司旨在为客户提供全方位、一站式的整体解决方案。多年来专-->
        <!--注于为客户提供：ISO体系认证咨询、药监局行政许可咨询、质监局行政许可咨询、产品认证咨询、管理培训、-->
        <!--产品代理销售等服务。 鸿运通公司是全国行业内唯一具备中国认证认可监督管理委员会二十二资格备案的专业咨-->
        <!--询机构，可合法开展ISO9001、ISO14001、OHSAS18001、 ISO/TS16949、ISO22000、HACCP、ISO13485、ISO/IEC27001-->
        <!--、ISO20000、AS9100、GB/T50430、TL9100、QC080000、SA8000、IRIS、ISO14064、CMMI、森林认证、GJB9100-->
        <!--B、有机产品、能源管理体系、实验室认可、测量管理体系、药监局行政许可代办咨询-->
        <!--、质监局行政许可代办咨询、产品认证咨询等咨询服务-->
        <!--。 欲了解更多详情，或致电鸿运通技术服务有限公司咨询 150 7110 8913 400-8784-872 周先生-->
      </p>
    </div>

    <div class="service-ctent clearfloat">
    </div>

  </div>
  <div class="footer-look clearfloat" id="footer">
    <a @click="signUp" class="fl white-bg" id="modaltrigger">我要报名</a>
    <a href="#loginmodal" class="fl" id="modaltrigger">分享赚钱100</a>
  </div>


  <!--弹窗内容 star-->
  <!--<div id="loginmodal" class="box-s loginmodal" style="display:none;">
      <form id="loginform" name="loginform" method="post" action="">
          <div class="center"><input type="submit" name="loginbtn" id="loginbtn" class="flatbtn-blu hidemodal" value=""
                                     tabindex="3"></div>
      </form>
      <div class="top clearfloat box-s">
          填写信息
      </div>
      <div class="bottom clearfloat box-s">
          <ul>
              <li class="clearfloat">
                  <i class="iconfont icon-user"></i>
                  <input type="text" name="" id="" value="" placeholder="您的姓名"/>
              </li>
              <li class="clearfloat">
                  <i class="iconfont icon-phone"></i>
                  <input type="text" name="" id="" value="" placeholder="您的手机号码"/>
              </li>
              <li class="clearfloat">
                  <i class="iconfont icon-calendar"></i>
                  <input type="text" name="" id="" value="" placeholder="请选择看房时间"/>
              </li>
          </ul>
          <input type="button" name="" id="" value="立即预约" class="btn"/>
      </div>
  </div>-->
  <!--弹窗内容 end-->
</div>
</template>

<script>
  // 岗位详情页
  import Home from '../../api/home'
  import App from '../../App'
  import favorite from '../../api/favorite'
  import title from '@/components/base/title'

  export default {
    name: 'job_detail',
    data () {
      return {
        detail_job: "",
        detail:[],
        detail_id:this.$route.query.detail_id,
        loding: false, // 控制静态页面先加载
        display: false, // 控制收藏显示
      }
    },
    mounted: function () {
     this.init()
    },
    components: {
      title
    },
    methods: {
      async init () {
        this.detail = await Home.getDetail(this.detail_id)
        this.detail_job = this.detail.job_require.replace(/\n|\r\n/g, "<br/>")
        this.loding = true
        if (localStorage.getItem('token')) {
          const res = await favorite.getFavorite(this.detail_id)
          if (res.success === "ok") {
            this.display = true
          }
        }
      },
      async Collection1 () {
        if (!App.methods.ifToken()){
          return
        }
        const res = await favorite.postFavorite(this.detail_id)
        this.display = !this.display
      },

      async signUp() {
        // layer.open({
        //   type:1,
        //   content:'<input class="nickname" value="打发" type="text" name="nickname" placeholder="请输入昵称" maxlength="8">',
        //   anim:'up',
        //   title: "提示",
        //   btnAlign: 'c',//对齐方式　r l c
        //   btn:["保存","取消"],
        //   fixed:true,
        //   top:10,
        //   style:'width:80%;height:50%;',
        //   yes:function(index,layero){
        //     layer.close(index);//为关闭
        //   },
        //   btn2:function(index,layero){
        //     layer.close(index);//为关闭
        //   },
        // });
        if (!App.methods.ifToken()){
          return
        }
        this.$router.push({name: 'applyJob', query: {detail_id: this.detail_id}})
        // if (!this.$store.state.userinfo.perAdmin) {
        //   layer.open({
        //     content: "你还不是个人服务者哟"
        //     ,btn: ['申请成为个人服务者', '取消']
        //     ,skin: 'footer'
        //     ,yes: function(index){
        //       layer.open({content: '申请中'})
        //     }
        //     ,no: function (index) {
        //     }
        //   })
        // }else {
        //   this.$router.push({name: 'applyJob', query: {detail_id: this.detail_id}})
        // }
      }
    },



  }
</script>

<style>
  .nickname{
    width: 60%;
    text-align: center;
  }
  #main {
    padding-top: 45px;
    padding-bottom: 38px;
  }
</style>
