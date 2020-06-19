<template>
  <div class="content_box_left1">
    <div class="companyInfo">
      <div class="mode_con_title">
        <h3>分类</h3>
      </div>
    </div>
    <div class="tps_company_info">
      <div class="name_link">
        <p>钢模板/模板网</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.content_box_left1 {
  margin-bottom: 40px;
  height: 300px;
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
      text-align: center;
      height: 76px;
      line-height: 76px;
      border-bottom: 1px dashed #d7d7d7;
      font-size: 14px;
      font-family: "Microsoft YaHei";
      font-weight: 400;
    }

  }
}
</style>
