<template>
  <div>

    <div class="content_box_left1">
      <div class="companyInfo">
        <div class="mode_con_title">
          <h3>联系我们</h3>
        </div>
      </div>
      <div class="contact_info">
        <p class="contact_info_one">联系人： 赵先生</p>
        <p class="contact_info_one">手机：18071226788</p>
        <p class="contact_info_one">电话： 0713-3119333</p>
        <p class="contact_info_one">地址： 中国 湖北省 黄冈市 黄梅县 大胜工业园区（湖北星火建设工程有限公司院内</p>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: "introduction",
  
};
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
  .contact_info {
    padding: 10px 15px;
    background-color: #fff;
    .contact_info_one {
      font-size: 14px;
      margin: 0;
      color: #585858;
      font-family: "Microsoft YaHei";
      line-height: 30px;
    }
  }
}
</style>
