<template>
  <div class="content_box_left1">
    <div class="companyInfo">
      <div class="mode_con_title">
        <h3>公司介绍</h3>
      </div>
    </div>
    <div class="tps_company_info">
      <div class="name_link name_link_img1">
        <p>湖北未来蓝图钢结构工程有限公司</p>
      </div>
      <div class="name_link name_link_img2">
        <p class="comCertification">公司认证：</p>
      </div>
      <div class="name_link name_link_img3">
        <p>公司地址：湖北省 黄冈市 浠水县 浠水经济开发区安时大道</p>
      </div>
      <div class="name_link name_link_img4">
        <p>企业类型：建筑类</p>
      </div>
      <div class="name_link name_link_img5">
        <p>主营：轻钢结构厂房，重钢结构厂房，畜牧工程，轻钢别墅</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.content_box_left1 {
  margin-bottom: 40px;
  background-color: #fff;
  .companyInfo {
    width: 100%;
    // background: #fff;
    position: relative;
    padding-top: 45px;
    .mode_con_title {
      height: 45px;
      line-height: 45px;
      position: absolute;
      width: 310px;
      top: 0;
      left: -7px;
      h3 {
        line-height: 45px;
        color: #fff;
        font-size: 20px;
        font-weight: 500;
        font-family: "Microsoft YaHei";
        text-align: center;
        position: relative;
        background: #00a0e9;
      }
    }
    .mode_con_title:before {
      top: 44px;
      left: 0;
      background: url(../assets/pagein_title-left.png) no-repeat center;
      content: "";
      display: block;
      width: 8px;
      height: 8px;
      position: absolute;
    }
    .mode_con_title:after {
      visibility: inherit;
      top: 43px;
      right: 0;
      background: url(../assets/pagein_title-right.png) no-repeat center;
      content: "";
      display: block;
      width: 8px;
      height: 8px;
      position: absolute;
    }
  }
  .tps_company_info {
    width: 266px;
    padding: 0 15px;
    height: auto;
    background-color: #fff;
    .name_link {
      display: flex;
      align-items: center;
      width: 210px;
      height: 76px;
      border-bottom: 1px dashed #d7d7d7;
      padding: 0 0 0 56px;
      font-size: 14px;
      font-family: "Microsoft YaHei";
      text-align: left;
      font-weight: 400;
      .comCertification {
        padding-right: 30px;
        height: 24px;
        line-height: 24px;
        background: #fff url(../assets/allico.png) no-repeat 70px -143px;
      }
    }
    .name_link:last-child {
      border-bottom: none;
    }
    .name_link_img1 {
      background: #fff url(../assets/companyinfolink_pic1.png) no-repeat left
        center;
    }
    .name_link_img2 {
      background: #fff url(../assets/companyinfolink_pic2.png) no-repeat left
        center;
    }
    .name_link_img3 {
      background: #fff url(../assets/companyinfolink_pic3.png) no-repeat left
        center;
    }
    .name_link_img4 {
      background: #fff url(../assets/companyinfolink_pic4.png) no-repeat left
        center;
    }
    .name_link_img5 {
      background: #fff url(../assets/companyinfolink_pic5.png) no-repeat left
        center;
    }
  }
}
</style>
