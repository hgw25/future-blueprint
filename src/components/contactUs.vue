<template>
  <div class="concatWe">
    <div class="mode_con_title">联系我们</div>
    <div class="concatWe_content">
      <p>湖北未来蓝图钢结构工程有限公司</p>
      <p>联系人：邹经理</p>
      <p>手机：13871461313</p>
      <p>邮箱：</p>
      <p>地址： 湖北省 黄冈市 浠水县 安时大道 众奥汽车服务中心3楼</p>
      <p>邮编：</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.concatWe {
  background-color: #fff;
  margin-bottom: 30px;
  position: relative;
  .mode_con_title {
    position: absolute;
    left: 0;
    top: -8px;
    height: 45px;
    line-height: 45px;
    width: 120px;
    text-align: center;
    background: #00a0e9;
    font-size: 16px;
    font-family: "Microsoft YaHei";
    color: #fff;
  }
  .mode_con_title:before {
    content: "";
    display: block;
    width: 6px;
    height: 8px;
    top: 0;
    right: -6px;
    position: absolute;
    background: url(../assets/pagein_title-top.png) no-repeat center;
  }
  .concatWe_content {
    padding: 50px 30px;
    p {
      font-family: "Microsoft YaHei";
      font-size: 14px;
      line-height: 25px;
      padding-left: 15px;
      color: #606366;
    }
    p:first-child {
      font-size: 14px;
      font-weight: bold;
      line-height: 30px;
      color: #606366;
      font-weight: bold;
      padding: 0;
    }
  }
}
</style>
