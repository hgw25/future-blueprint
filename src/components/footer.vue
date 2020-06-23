<template>
  <div class="footer_box">
    <!-- <div class="footer_box_one">
      <div class="footer_box_link w">
        <div class="footer_box_title">友情链接</div>
        <div class="footer_box_linkBox">
          <p>江西钢结构</p>
          <p>江西彩钢瓦生产批发</p>
          <p>江西预制结构施工</p>
        </div>
      </div>
    </div> -->
    <div class="footer_box_two">
      <ul class="foot_ul w">
        <li>
          <p class="p1">关于我们</p>
          <p class="p2">企业介绍</p>
          <p class="p2">网站地图</p>
        </li>
        <li>
          <p class="p1">主营品牌</p>
          <p class="p2">轻钢结构厂房，重钢结构厂房，畜牧工程，轻钢别墅</p>
        </li>
        <li>
          <p class="p1">联系我们</p>
          <p class="p2">地址：湖北省 黄冈市 浠水县 浠水经济开发区安时大道</p>
          <p class="p2">电话:13871461313</p>
        </li>
        <li>
          <div class="foot_logo">
            <img class="foot_logoImg" src="../assets/logo.png" alt />
          </div>
          <p class="p2">© 湖北未来蓝图钢结构工程有限公司 版权所有</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<style lang="scss" scoped>
.w {
  width: 1200px;
  margin: auto;
}
.footer_box {
  .footer_box_one {
    background: #ebebeb;
    height: 80px;
    .footer_box_link {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
      .footer_box_title {
        height: 26px;
        line-height: 26px;
        text-align: left;
        font-size: 22px;
        font-family: "Microsoft YaHei";
        color: #00a0ea;
        padding: 0 22px 0 0;
        border-right: 2px solid #bbbbbb;
      }
      .footer_box_linkBox {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-left: 100px;
        p {
          height: 20px;
          line-height: 20px;
          font-size: 14px;
          color: #767676;
          font-family: "Microsoft YaHei";
          margin-right: 18px;
        }
      }
    }
  }
  .footer_box_two {
    background: #01a1ea;
    padding: 56px 0 35px;
    .foot_ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      li:nth-child(1) {
        width: 75px;
        height: 154px;
        padding-right: 23px;
        border-right: 1px solid #ebebeb;
        .p1 {
          font-size: 18px;
          font-family: "微软雅黑";
          color: #fff;
          text-align: right;
          margin-bottom: 10px;
        }
        .p2 {
          font-size: 12px;
          font-family: "微软雅黑";
          color: #fff;
          text-align: right;
          margin-bottom: 10px;
        }
      }
      li:nth-child(2) {
        width: 335px;
        height: 154px;
        padding-right: 23px;
        border-right: 1px solid #ebebeb;
        .p1 {
          font-size: 18px;
          font-family: "微软雅黑";
          color: #fff;
          text-align: right;
          margin-bottom: 10px;
        }
        .p2 {
          font-size: 12px;
          font-family: "微软雅黑";
          color: #fff;
          text-align: right;
          margin-bottom: 10px;
        }
      }
      li:nth-child(3) {
        width: 335px;
        height: 154px;
        padding-right: 23px;
        border-right: 1px solid #ebebeb;
        .p1 {
          font-size: 18px;
          font-family: "微软雅黑";
          color: #fff;
          text-align: right;
          margin-bottom: 10px;
        }
        .p2 {
          font-size: 12px;
          font-family: "微软雅黑";
          color: #fff;
          text-align: right;
          margin-bottom: 10px;
        }
      }
      li:nth-child(4) {
        width: 335px;
        height: 154px;
        .foot_logo {
          width: 135px;
          height: 135px;
          margin: 0 0 0 auto;
          .foot_logoImg {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        .p2 {
          margin: 0 0 0 auto;
          width: 135px;
          font-size: 12px;
          font-family: "微软雅黑";
          color: #fff;
          text-align: center;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
