<template>
  <div>
    <div class="center-header clearfloat">
      <div class="margnt_center head_per weui-flex">
        <div class="perID margnt_center">编号</div>
        <div class="pername margnt_center">姓名</div>
        <div class="pergender margnt_center" >性别</div>
        <div class="perage margnt_center" >年龄</div>
        <div class="btn margnt_center">录取</div>
      </div>
    </div>

    <div v-if="List" style="margin-top: 14%">
      <div v-for="(list, index) in List" class="margnt_center per weui-flex">
        <div class="perID margnt_center" style="color:#f58611;">{{index+1}}</div>
        <div  @click="perInfo(list)"  class="pername margnt_center" style="color: #007aff;">{{list.name}}</div>
        <div  @click="perInfo(list)"  class="pergender margnt_center" >{{list.gender}}</div>
        <div  @click="perInfo(list)"  class="perage margnt_center" >{{list.age}}</div>
        <div class="btn margnt_center" style="padding-top: 5px;">
          <a @click="statusBtn(list.id, index)" id="statusBtn" v-if="list.status === 1" class="weui-btn weui-btn_mini weui-btn_primary">录取</a>
          <a @click="statusBtn(list.id, index)" id="statusBtn1" v-else-if="list.status === 2" class="weui-btn weui-btn_mini weui-btn_primary" style="background-color: #dddddd;">已录取</a>
        </div>
      </div>
    </div>
    <div v-if="!List" class="fnull">暂时还没有人申请哟</div>
  </div>
</template>

<script>
  // 我的岗位报名人数页面
  import myjobper from '../../api/myjobper'

  export default {
    name: 'myjobper',
    data () {
      return {
        List: [],
        status: false,
        job_id:this.$route.query.job_id
      }
    },

    created: function () {
     this.init()
    },

    methods: {
      async init () {
        const res = await myjobper.getJobPer(this.job_id)
        this.List = res.ApplyList
      },

      async statusBtn (pro_id, index) {
        const res = await myjobper.getStatus(pro_id)
        if (res.success === 'ok') {
          if (this.List[index].status === 1) {
            this.List[index].status = 2
          } else if (this.List[index].status === 2) {
            this.List[index].status = 1
          }
        }
      },

      async perInfo (list) {
        layer.open({
          type: 1,
          content: '<div style="text-align: center;color: #ffffff;">'
            + '<p><span><span>性名: </span></span><span><span>'+ list.name + '</span></span></p>'
            + '<p><span><span>性别: </span></span><span><span>'+ list.gender + '</span></span></p>'
            + '<p><span><span>年龄: </sapn></span><span><span>' + list.age + '</span></span></p>'
            + '<p><span><span>身份证: </sapn></span><span><span>' + list.card_id + '</span></span></p>'
            + '<p><span><span>电话号码: </sapn></span><span><span>' + list.number + '</span></span></p></div>'
          ,skin: 'footer'
        });
      }
    }
  }
</script>

<style scoped>
  .center-header{
    font-size: 14px;
    background-color: #ffffff;
  }
  .margnt_center{
    margin: auto;
    text-align: center;
  }
  .recom{
    margin-top: 14%;
  }
  .head_per{
    width: 95%;
  }
  .per{
    font-size: 14px;
    width: 95%;
    margin: auto;
    background-color: #ffffff;
    border-radius: 4px;
    border-bottom: #dddddd 1px solid;
  }
  .perID {
    width: 10%;
  }
  .pername {
    width: 30%;
  }
  .pergender {
    width: 20%;
  }
  .perage {
    width: 20%;
  }
  .btn{
    width: 20%;
  }
  .weui-btn_mini{
    font-size: 15px;
  }
  .fnull {
    text-align: center;
    margin-top: 14%;
    font-size: 17px;
  }
  </style>
