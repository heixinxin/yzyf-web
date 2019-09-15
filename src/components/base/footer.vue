<template>
  <footer class="page-footer fixed-footer" id="footer">
    <ul>
      <li v-for="item in footNav" :class="footUrl=== item.name || footUrl==='/' && item.name==='/home' ? 'active' : 'qw'">
        <a :href="item.name">
          <i class="iconfont" :class="item.class"></i>
          <p>{{item.title}}</p>
        </a>
      </li>
      <!--        <li>
                  <a href="schedule.html">
                      <i class="iconfont icon-richengbiao"></i>
                      <p>看房日程</p>
                  </a>
              </li>-->

    </ul>
  </footer>
</template>

<script>
  export default {
    name: 'footer',
    data () {
      return {
        footUrl: this.$route.path,
        footNav: [
          {title: '首页', class: 'icon-shouyev1', name: '/home'},
          {title: '消息', class: 'icon-chuzuwo',  name: '/list'},
          {title: '个人中心', class: 'icon-gerenzhongxin',  name: '/personal'},
        ]
      }
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
