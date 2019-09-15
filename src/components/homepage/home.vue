<template>
  <div id="app">
    <!--header star-->
    <div class="header clearfloat">
      <div class="tu clearfloat">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img data-src="../static/images/home.jpg" src=""
                   alt="">
            </div>
            <div class="swiper-slide">
              <img data-src="../static/images/demo.jpg" src=""
                   alt="">
            </div>
            <div class="swiper-slide">
              <img data-src="../static/images/home.jpg" src=""
                   alt="">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
          <!--                        &lt;!&ndash; 如果需要导航按钮 &ndash;&gt;-->
                                  <!--<div class="swiper-button-prev swiper-button-white"></div>-->
                                  <!--<div class="swiper-button-next swiper-button-white"></div>-->
        </div>
      </div>
      <header class="mui-bar mui-bar-nav fixed-top" id="search">
        <a class="btn" href="#">
          <p>武汉<i class="iconfont icon-iconfontarrowdown-copy"></i></p>
        </a>
        <div class="top-sch-box flex-col">
          <div class="centerflex">
            <i class="fdj iconfont icon-sousuo"></i>
            <div class="sch-txt">请输入您要搜索的内容</div>
          </div>
        </div>
      </header>
      <!--<div class="header-tit clearfloat">-->
        <!--<p class="header-num">同城优服已为<span>53789</span>用户服务</p>-->
        <!--<p class="header-da">轻松兼职 乐享生活</p>-->
      <!--</div>-->
    </div>
    <!--header end-->
    <div id="main" class="mui-clearfix">
      <!--    &lt;!&ndash; 搜索层 &ndash;&gt;
          <div class="pop-schwrap">
              <div class="ui-scrollview">
                  <div class="poo-mui clearfloat box-s">
                      <div class="mui-bar mui-bar-nav clone poo-muitwo">
                          <div class="top-sch-box flex-col">
                              <div class="centerflex">
                                  <i class="fdj iconfont icon-sousuo"></i>
                                  <input class="sch-input mui-input-clear" type="text" name="" id=""
                                         placeholder="请输入您要搜索的内容"/>
                              </div>
                          </div>
                      </div>
                      <a href="javascript:;" class="mui-btn mui-btn-primary btn-back" href="#">取消</a>
                  </div>
                  <div class="scroll-wrap">
                      <div class="mui-scroll">
                          <div class="sch-cont">
                              <div class="section ui-border-b">
                                  <div class="tit">热门搜索</div>
                                  <div class="tags">
                                      <span class="tag">大溪地</span><span class="tag">大溪地</span><span class="tag">大溪地</span>
                                      <span class="tag">大溪地</span><span class="tag">大溪地</span><span class="tag">大溪地</span>
                                      <span class="tag">大溪地</span><span class="tag">大溪地</span><span class="tag">大溪地</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>-->

      <div class="cation clearfloat">
        <ul class="clearfloat">
          <li>
            <a href="entire.html">
              <img src="static/img/fang.png"/>
              <p>快递</p>
            </a>
          </li>
          <li>
            <a href="entire.html">
              <img src="static/img/chuang.png"/>
              <p>兼职</p>
            </a>
          </li>
          <li>
            <a href="entire.html">
              <img src="static/img/bao.png"/>
              <p>兼职</p>
            </a>
          </li>
          <li>
            <a href="entire.html">
              <img src="static/img/lou.png"/>
              <p>快递</p>
            </a>
          </li>
          <!--            <li>
                          <a href="map.html">
                              <img src="static/img/map.png"/>
                              <p>地图找房</p>
                          </a>
                      </li>
                      <li>
                          <a href="landlord.html">
                              <img src="static/img/people.png"/>
                              <p>我是房东</p>
                          </a>
                      </li>
                      <li>
                          <a href="join.html">
                              <img src="static/img/woshou.png"/>
                              <p>加盟</p>
                          </a>
                      </li>
                      <li>
                          <a href="life-service.html">
                              <img src="static/img/self.png"/>
                              <p>生活服务</p>
                          </a>
                      </li>-->
        </ul>
      </div>

      <div class="recom clearfloat">
        <div class="recom-tit clearfloat box-s">
          <p>资源推荐</p>
        </div>
        <div class="mui-content">
          <div class="mui-row">
            <div class="mui-col-sm-3 mui-col-xs-3">
              <div class="condition active">
                <a>综合</a>
              </div>
            </div>
            <div class="mui-col-sm-3 mui-col-xs-3">
              <div class="condition">
                <a>全城</a>
              </div>
            </div>
            <div class="mui-col-sm-3 mui-col-xs-3">
              <div class="condition">
                <a>薪资</a>
              </div>
            </div>
            <div class="mui-col-sm-3 mui-col-xs-3">
              <div class="condition">
                <a>口碑</a>
              </div>
            </div>
          </div>
        </div>
        <div class="content clearfloat box-s">
          <div class="list clearfloat fl box-s" v-for="(list, index) in List">
            <a @click="detail(list.id)" href="">
              <div class="tit clearfloat">
                <p class="fl">{{index+1}}、{{ list.name }}</p>
                <span class="fr">￥{{ list.price }}<!--<samp>元/月</samp>--></span>
              </div>
              <p class="recom-jianjie">{{ list.company }}</p>
              <!--<div class="tu clearfloat">-->
                <!--<span></span>-->
              <!---->
              <!--</div>-->
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
          </div>
          <div v-if="!loadMore" class="load-tip clearfloat fl box-s" id="zy-load">
            <p v-if="!loadErr && !loadEnd" id="load-genduo" @click="clickList" class="load-genduo"><a class="btn dis_inBlock">点击加载更多</a></p>
            <p v-if="loadEnd" class="zanwugenduo"><span>加载到底了</span></p>
            <p v-if="loadErr" class="zanwugenduo"><span style="color: red">加载失败</span></p>
          </div>
          <div v-if="loadMore" class="weui-loadmore">
            <i class="weui-loading"></i>
            <span class="weui-loadmore__tips">正在加载</span>
          </div>
        </div>

      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import Home from '../../api/home'
  import MyFooter from '@/components/base/footer'

  export default {
  name: '',
  //  控制加载失败 加载中 加载完毕
  data () {
    return {
      List: [],
      page: 1,
      loadMore: false,
      loadEnd: false,
      loadErr: false
    }
  },
  components: {
    MyFooter
  },
  created: function () {
    this.init()
  },
  methods: {
    async init(){
      this.List = await Home.getList(this.page)
    },

    async clickList() {
      this.loadMore = true
      const list = await Home.getList(++this.page)
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

    async detail(detail_id) {
      console.log(detail_id)
      this.$router.push({ name: 'job_detail',  query: { detail_id: detail_id}})
    }

  },

}
</script>
<style>
  #main{
    padding-bottom: 65px;
  }
</style>
