<template>
  <div>
    <Head activeIndex="2"></Head>
    <div class="top_img">
      <img src="../assets/pagein-banner.jpg" alt />
    </div>
    <div class="content_box">
      <div class="content_box_center w">
        <div class="content_leftBox">
          <Classfiy></Classfiy>
          <ProList></ProList>
        </div>
        <div class="content_rightBox">
          <div class="content_box_right_content">
            <div class="contentBox_one">
              <div class="mode_con_title">公司介绍</div>
              <div class="content_one">
                <div class="content_one_left">
                  <img src="../assets/logo.png" alt />
                </div>
                <div
                  class="content_one_right"
                >湖北杰锐钢结构工程有限公司是一家具有钢结构、钢架工程设计、制作和安装、生产销售的企业，自成立以来，我们主要从轻钢结构厂房 、钢平台、C型钢等项目。杰锐秉承“团结、诚信、务实的企业精神和“视质量为生命、以信誉求发展”的企业理念，遵循“诚为上，信为本”的准则，以“钢的质量、铁的信誉”为宗旨来回报长期以来关怀和杰锐钢构成长的新老客户，欢迎你们的光临、指导，让我们携手合作，共谋发展，构筑美好明天！</div>
              </div>
            </div>
            <div class="contentBox_two">
              <div class="mode_con_title">基本信息</div>
              <div class="content_two">
                <div class="content_twoText">公司名称：湖北杰锐钢结构工程有限公司</div>
                <div class="content_twoText">联系人：邹经理</div>
                <div class="content_twoText">手机：13871461313</div>
                <div class="content_twoText">固定电话： 0713-3119333</div>
                <div class="content_twoText">公司地址：湖北省 黄冈市 浠水县 安时大道 众奥汽车服务中心3楼</div>
                <div class="content_twoText">公司网址：http://hbjrgg.d17.cc</div>
              </div>
            </div>
            <div class="contentBox_two">
              <div class="mode_con_title">详细资料</div>
              <div class="content_two">
                <div class="content_twoText">公司类型：</div>
                <div class="content_twoText">经营模式：生产型</div>
                <div class="content_twoText">所属行业：建筑建材</div>
                <div class="content_twoText">主营产品：轻钢结构厂房，钢平台，C型钢</div>
                <div class="content_twoText">成立时间：2018年</div>
                <div class="content_twoText">营业执照注册号：91421127MA494B5575</div>
              </div>
            </div>
            <ContactUs></ContactUs>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Head from "@/components/head";
import Footer from "@/components/footer";
import ProList from "@/components/proList";
import Classfiy from "@/components/classfiy";
import ContactUs from "@/components/contactUs";
export default {
  components: {
    Head,
    Footer,
    Classfiy,
    ProList,
    ContactUs
  }
};
</script>
<style lang="scss" scoped>
.top_img {
  height: 296px;
  width: 100%;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
.content_box {
  background-color: #f4f4f4;
  .w {
    width: 1200px;
    margin: auto;
  }
  .content_box_center {
    display: flex;
    justify-content: flex-start;
    padding-top: 50px;
    .content_leftBox {
      width: 296px;
      margin-right: 20px;
      position: relative;
    }
    .content_rightBox {
      .content_box_right_content {
        margin-bottom: 30px;
        margin-top: 8px;
        .contentBox_one {
          position: relative;
          background-color: #fff;
          margin-bottom: 40px;
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
          .content_one {
            display: flex;
            justify-content: flex-start;
            align-content: center;
            padding: 60px 20px 20px;
            .content_one_left {
              padding: 5px;
              border: 1px solid #d7d7d7;
              width: 140px;
              height: 140px;
              margin-right: 15px;
              box-sizing: border-box;
              img {
                display: block;
                width: 100%;
                height: 100%;
              }
            }
            .content_one_right {
              width: calc(100% - 165px);
              font-family: "Microsoft YaHei";
              font-size: 14px;
              line-height: 26px;
              color: #606366;
            }
          }
        }
        .contentBox_two {
          background-color: #fff;
          position: relative;
          margin-bottom: 40px;
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
          .content_two {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            padding: 60px 20px 20px;
            .content_twoText {
              width: 327px;
              line-height: 30px;
              padding-left: 15px;
              font-family: "Microsoft YaHei";
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
</style>
