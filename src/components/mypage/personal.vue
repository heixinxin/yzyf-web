<template>
<div id="app">
  <div class="center-header clearfloat" id="header">
    <!--<a href="" class="fr shezhi">设置</a>-->
    <div class="top fl clearfloat box-s">
      <a v-if="TOKEN" href="/myInfo">
        <div class="tu fl">
          <span></span>
          <img src="img/touxiang.png"/>
        </div>
        <p class="tit fl">{{ user.username }}</p>
        <i class="iconfont icon-arrowright fr"></i>
      </a>
      <a v-else href="/login">
        <div class="tu fl">
          <span></span>
          <img src="img/touxiang.png"/>
        </div>
        <p class="tit fl">未登录</p>
        <i class="iconfont     fr"></i>
      </a>
    </div>
    <!--<div class="bottom clearfloat">
        <ul>
            <li>
                <a href="rent-order.html">
                    <p>1</p>
                    <p>房租订单</p>
                </a>
            </li>
            <li>
                <a href="rent-order.html">
                    <p>1</p>
                    <p>待付款</p>
                </a>
            </li>
            <li>
                <a href="empty-list.html">
                    <p>0</p>
                    <p>待评价</p>
                </a>
            </li>
            <li>
                <a href="empty-list.html">
                    <p>0</p>
                    <p>已完成</p>
                </a>
            </li>
        </ul>
    </div>-->
  </div>

  <div class="clearfloat pcenter" id="main1">
    <div v-if="TOKEN">
      <div class="clearfloat p-list box-s">
        <i class="iconfont icon-caifu fl ben"></i>
        <span class="fl">我的资产</span>
      </div>
      <div class="clearfloat p-fenlei">
        <ul>
          <li>
            <a href="profit.html">
              <p>￥19.90</p>
              <p>余额</p>
            </a>
          </li>
          <li>
            <a href="#" class="clearfloat">
              <p>3000</p>
              <p>积分</p>
            </a>
          </li>
          <li>
            <a href="coupon.html">
              <p>3张</p>
              <p>优惠券</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div @click="favoriteBtn" class="clearfloat p-list p-listwo box-s">
      <a>
        <i class="iconfont icon-favorite fl xing"></i>
        <span class="fl">我的收藏</span>
        <i class="iconfont icon-arrowright fr you"></i>
      </a>
    </div>
    <div @click="MyApplyBtn" class="p-list p-listwo clearfloat box-s">
      <a>
        <i class="iconfont icon-favorite fl xing"></i>
        <span class="fl">我的报名</span>
        <i class="iconfont icon-arrowright fr you"></i>
      </a>
    </div>

    <div @click="Info" class="p-list p-listhree clearfloat box-s">
      <a>
        <i class="iconfont icon-weituoguanli fl weituoguanli"></i>
        <span class="fl">我的信息</span>
        <i class="iconfont icon-arrowright fr you"></i>
      </a>
    </div>

    <!--<div class="p-list p-listwo clearfloat box-s">-->
      <!--<a href="extension.html">-->
        <!--<i class="iconfont icon-gonggao fl gonggao"></i>-->
        <!--<span class="fl">我要推广</span>-->
        <!--<i class="iconfont icon-arrowright fr you"></i>-->
      <!--</a>-->
    <!--</div>-->
    <div @click="myReleaseBtn" class="p-list p-listwo clearfloat box-s">
      <a>
        <i class="iconfont icon-weituoguanli fl weituoguanli"></i>
        <span class="fl">我的发布</span>
        <i class="iconfont icon-arrowright fr you"></i>
      </a>
    </div>
    <div v-if="userAdmin" @click="myPerBtn" class="p-list p-listhree clearfloat box-s">
      <a>
        <i class="iconfont icon-weituoguanli fl weituoguanli"></i>
        <span class="fl">商家审核</span>
        <i class="iconfont icon-arrowright fr you"></i>
      </a>
    </div>
    <div @click="modifyPwd" class="p-list p-listhree clearfloat box-s">
      <a>
        <i class="iconfont icon-lock fl lock"></i>
        <span class="fl">修改密码</span>
        <i class="iconfont icon-arrowright fr you"></i>
      </a>
    </div>
    <div @click="feedbackBtn" class="p-list p-listhree clearfloat box-s">
      <a href="">
        <i class="iconfont icon-gerenzhongxin fl gerenzhongxin"></i>
        <span class="fl">意见反馈</span>
        <i class="iconfont icon-arrowright fr you"></i>
      </a>
    </div>
    <div class="p-list p-listhree clearfloat box-s">
      <a href="about.html">
        <i class="iconfont icon-gerenzhongxin fl gerenzhongxin"></i>
        <span class="fl">关于我们</span>
        <i class="iconfont icon-arrowright fr you"></i>
      </a>
    </div>

    <a v-if="TOKEN" @click="logout" class="pay-btn clearfloat mui-btn-red" id="login" >
      退出登录
    </a>
    <a v-else href="/login" class="pay-btn clearfloat mui-btn-red">
      登录
    </a>
  </div>

  <my-footer></my-footer>
</div>
</template>

<script>
  import {mapState} from 'vuex'
  import App from '../../App'
  import User from '../../api/user'
  import MyFooter from '@/components/base/footer'

  export default {
    data () {
      return {
        userAdmin: this.$store.state.userinfo.perAdmin,
        TOKEN: localStorage.getItem('token'),
        pwd:'',
      }
    },
    components: {
      MyFooter
    },
    computed: mapState({
      userinfo: state => state.userinfo,
      user: 'userinfo',
    }),
    methods: {
      logout() {
        localStorage.clear()
        window.location.reload()
      },

      async myReleaseBtn () {
        if (!App.methods.ifToken()){
          return
        }
        this.$router.push({ name: 'release' })
      },

      async myPerBtn () {
        if (!App.methods.ifToken()){
          return
        }
        this.$router.push({name: 'perAuthList'})
      },

      async favoriteBtn () {
        if (!App.methods.ifToken()){
          return
        }
        this.$router.push({ name: 'favorite' })
      },

      async MyApplyBtn () {
        if (!App.methods.ifToken()){
          return
        }
        this.$router.push({ name: 'myapply' })
      },

      async feedbackBtn () {
        if (!App.methods.ifToken()){
          return
        }
        this.$router.push({ name: 'feedback' })
      },

      async Info () {
        if (!App.methods.ifToken()){
          return
        }
        this.$router.push({ name: 'my_info' })
      },

      // 修改密码
      async modifyPwd() {
        if (!App.methods.ifToken()){
          return
        }
        layer.open({
          type:1,
          content: '<input type="password" name="usernmae" value="" placeholder="密码" class="sname"/>',
          anim:'up',
          title: ['请输入新的密码', 'background-color:#8DCE16; color:#fff;margin-top: 0;margin-bottom: 15px;'],
          btnAlign: 'c',//对齐方式　r l c
          btn:["修改","取消"],
          fixed:true,
          top:10,
          style:'width:80%;border-radius:0.2rem;',
          async yes (index,layero){
            let pwd = $('.sname').val()
            const res =  await User.postPwd(pwd)
            console.log(res.success)
            if (res.success === 'ok'){
              layer.open({
                content: '修改成功'
                ,style: 'background-color:#09C1FF; color:#fff; border:none;' //自定风格
                ,time: 3
              });
              App.methods.sleep(3000).then(() => {
                localStorage.clear()
                window.location.reload()
              })
              layer.close(index);//为关闭
            }else {
              layer.open({
                content: '修改失败'
                , btn: '我知道了'
              });
              layer.close(index);
            }
          },
          btn2:function(index,layero){
            layer.close(index);//为关闭
          },

        });

      }


    }

  }
</script>
<style>
  .pay-btn {
    line-height: initial;
  }
  #main1{
    padding-top: 114px;
    padding-bottom: 63px;
  }
  input[type='password']{
    position: relative;
    width: 60%;
    height: 0.5rem;
    text-align: left;
    font-size: .45rem;
    color: #333;
    left: 1.3rem;
  }
</style>
