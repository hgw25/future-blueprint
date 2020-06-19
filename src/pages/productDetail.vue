<template>
  <div>
    <Head activeIndex="3"></Head>
    <div class="top_img">
      <img src="../assets/pagein-banner.jpg" alt />
    </div>
    <div class="content_box">
      <div class="content_box_center w">
        <div class="content_box_left">
          <CompanyInfo></CompanyInfo>
          <Introduction></Introduction>
          <ProList></ProList>
        </div>
        <div class="content_box_right">
          <div class="content_box_right_content">
            <div class="mode_con_title">详情</div>
            <div class="content_box_right_contentBox">
              <h3 class="content_box_right_title">钢结构 可定制钢构厂房</h3>
              <div class="content_box_right_head">
                <div class="content_box_right_headLeft">
                  <div class="content_imgBox">
                    <img class="content_img" src alt />
                  </div>
                  <div></div>
                </div>
                <ul class="content_box_right_headRight">
                  <li>
                    <p>供应商</p>
                    <p class="p1">湖北未来蓝图钢结构工程有限公司【公司网站】</p>
                  </li>
                  <li>
                    <p>所在地</p>
                    <p class="p1">中国 湖北省 黄冈市 黄梅县</p>
                  </li>
                  <li>
                    <p>联系人</p>
                    <p>赵先生</p>
                  </li>
                  <li>
                    <p>价格</p>
                    <p class="p2">面议</p>
                  </li>
                  <li>
                    <p>最小采购量</p>
                    <p>不限制</p>
                  </li>
                  <li class="hotTel">热线电话：18071226788</li>
                </ul>
              </div>
              <h3 class="content_box_right_title">产品详情</h3>
              <ul class="proDetail">
                <li>厂家:其他</li>
                <li>材质:其他</li>
                <li>底模结构构造:其他</li>
                <li>侧模截面型式:其他</li>
                <li>型号:钢结构</li>
              </ul>
              <div class="pro_imgBox">
                <img class="pro_img" src alt />
              </div>
              <div class="pro_des">
                <p class="p1">特点</p>
                <div v-for="(item,index) in 4" :key="index">
                  <p class="p2">1、材料强度高，自身重量轻</p>
                  <p
                    class="p2"
                  >钢材强度较高，弹性模量也高。与混凝土和木材相比，其密度与屈服强度的比值相对较低，因而在同样受力条件下钢结构的构件截面小，自重轻，便于运输和安装，适于跨度大，高度高，承载重的结构。</p>
                </div>
              </div>
              <div
                class="statement"
              >内容声明：第一枪网为第三方互联网信息服务提供者，第一枪（含网站、微信、百家号等）所展示的产品/服务的标题、价格、详情等信息内容系由卖家发布，其真实性、准确性和合法性均由卖家负责，第一枪网概不负责，亦不负任何法律责任。第一枪网提醒您选择产品/服务前注意谨慎核实，如您对产品/服务的标题、价格、详情等任何信息有任何疑问的，请与卖家沟通确认；如您发现有任何违法/侵权信息，请立即向第一枪网举报并提供有效线索至website@d17.cc</div>
            </div>
          </div>
          <ContactUs></ContactUs>
          <div class="pro_other">
            <div class="mode_con_title">该公司其他产品</div>
            <div class="pro_other_list">
              <div class="pro_other_listOne" v-for="(item, index) in proOther" :key="index">
                <div class="pro_imgBox">
                  <img class="pro_img" :src="item.img" alt />
                </div>
                <div class="pro_bottom">
                  <p class="sl-1">{{item.title}}</p>
                  <p>面议</p>
                </div>
              </div>
            </div>
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
import Introduction from "@/components/introduction";
import CompanyInfo from "@/components/CompanyInfo";
import ProList from "@/components/ProList";
import ContactUs from "@/components/ContactUs";
export default {
  components: {
    Head,
    Footer,
    Introduction,
    CompanyInfo,
    ProList,
    ContactUs
  },
  data() {
    return {
      proOther:[
        {
          img: require('../assets/product9.jpg'),
          title: '钢结构建设厂房工程'
        },
        {
          img: require('../assets/product10.jpg'),
          title: '建设钢结构 厂房'
        },
        {
          img: require('../assets/product11.jpg'),
          title: '安装钢构大桥工程'
        },
        {
          img: require('../assets/product12.jpg'),
          title: '厂家直销 钢结构厂房 安装钢结构平台'
        },
      ]
    }
  }
};
</script>
<style lang="scss" scoped>
.w {
  width: 1200px;
  margin: auto;
}
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
  padding-top: 50px;
  .content_box_center {
    display: flex;
    justify-content: flex-start;
    .content_box_left {
      width: 296px;
      margin-right: 20px;
      position: relative;
    }
    .content_box_right {
      margin-top: 8px;
      .content_box_right_content {
        // width: 874px;
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
        .content_box_right_contentBox {
          // width: 874px;
          padding: 43px 10px 0 10px;
          .content_box_right_title {
            font-size: 16px;
            font-weight: bold;
            padding: 20px 0 20px;
          }
          .content_box_right_head {
            display: flex;
            justify-content: flex-start;
            .content_box_right_headLeft {
              width: 266px;
              height: 266px;
              color: #606366;
              font: 12px tahoma, Arial, "宋体", Helvetica, sans-serif;
              margin: 0;
              border: 1px solid #dddddd;
              .content_img {
                width: 100%;
                height: 100%;
              }
            }
            .content_box_right_headRight {
              width: 580px;
              margin-left: 30px;
              li {
                height: 36px;
                line-height: 36px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                p:first-child {
                  color: #999999;
                  width: 90px;
                }
                .p1 {
                  color: #012cae;
                }
                .p1:hover {
                  color: #ef3a07;
                  text-decoration: underline;
                  cursor: pointer;
                }
                .p2 {
                  color: #ef3a07;
                  font-size: 18px;
                }
              }
              .hotTel {
                background-color: #fff7e1;
                height: 44px;
                line-height: 44px;
                border: 2px solid #ffa772;
                padding-left: 50px;
                color: #ef3a07;
                font-size: 18px;
                background: url(../assets/companyallico.png) no-repeat #fff7e1
                  12px -183px;
              }
            }
          }
          .proDetail {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            border: 1px solid #eaeaea;
            border-top: 2px solid #ef3a07;
            padding: 10px 0;
            background: #f7f7f7;
            li {
              width: 31%;
              height: 14px;
              margin: 8px 0 8px 12px;
            }
          }
          .pro_imgBox {
            margin: auto;
            width: 690px;
            height: 690px;
            img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          .pro_des {
            .p1 {
              color: #606366;
              font: 16px tahoma, Arial, "宋体", Helvetica, sans-serif;
            }
            .p2 {
              font-size: 16px;
              color: #333333;
              font-family: arial, 宋体, sans-serif;
            }
          }
          .statement {
            padding: 20px;
            font-size: 12px;
            line-height: 24px;
            color: #999;
            background: #f5f5f5;
            margin: 20px 0px 0;
            border-bottom: 20px solid #fff;
          }
        }
      }

      .pro_other {
        background-color: #fff;
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
        .pro_other_list {
          padding: 50px 30px;
          display: flex;
          justify-content: flex-start;
          .pro_other_listOne {
            margin-right: 10px;
            .pro_imgBox {
              width: 200px;
              height: 200px;
              border: 1px solid #eee;
              .pro_img {
                display: block;
                width: 100%;
                height: 100%;
              }
            }
            .pro_bottom {
              p:first-child {
                font-size: 14px;
                line-height: 28px;
                font-family: "Microsoft YaHei";
                margin: 8px 0 4px 0;
              }
              p:last-child {
                height: 24px;
                line-height: 24px;
                font-family: "微软雅黑";
                font-size: 18px;
                color: #f49b00;
              }
            }
          }
          .pro_other_listOne:last-child {
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
