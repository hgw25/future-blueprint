<template>
  <div>
    <Head activeIndex="1"></Head>
    <div class="swiper_box">
      <el-carousel trigger="click" height="500px">
        <el-carousel-item v-for="(item,index) in carouselImg" :key="index">
          <img class="swiperImg" :src="item" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="com_introduce_box">
      <div class="w location">
        <h3 class="com_introduce">公司介绍</h3>
        <p class="com_introduce_usa">ABOUT US</p>
        <div class="com_des">
          <p class="com_name">湖北未来蓝图钢结构工程有限公司</p>
          <p
            class="com_content"
          >湖北未来蓝图钢结构工程有限公司是一家具有钢结构、钢架工程设计、制作和安装、生产销售的企业，自成立以来，我们主要从轻钢结构厂房 、钢平台、C型钢等项目。杰锐秉承“团结、诚信、务实的企业精神和“视质量为生命、以信誉求发展”的企业理念，遵循“诚为上，信为本”的准则，以“钢的质量、铁的信誉”为宗旨来回报长期以来关怀和杰锐钢构成长的新老客户，欢迎你们的光临、指导，让我们携手合</p>
        </div>
        <div class="item_btn">【详细】</div>
        <img class="com_logo" src="../assets/logo.png" alt />
      </div>
    </div>
    <div class="w">
      <h3 class="product">产品列表</h3>
      <p class="product_usa">PRODUCTS</p>
      <div class="product_list">
        <div class="product_list_one" v-for="(item,index) in productList" :key="index">
          <div class="product_list_oneImg">
            <img class="product_img" :src="item.img" alt />
          </div>
          <div class="product_list_oneBottom">
            <p class="sl-1">{{item.title}}</p>
            <p>查看</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w">
      <h3 class="contact">联系我们</h3>
      <p class="contact_usa">PRODUCTS</p>
      <div class="contact_box">
        <div class="contact_box_left">
          <img src="../assets/map.png" alt />
        </div>
        <ul class="ul_box">
          <li>联系人：邹经理</li>
          <li>手机：13871461313</li>
          <li>联系人：南经理</li>
          <li>电话：13691859456</li>
          <li>地址：湖北省 黄冈市 浠水县 安时大道 众奥汽车服务中心3楼</li>
        </ul>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Head from '@/components/head'
import Footer from '@/components/footer'
export default {
  components: {
    Head,
    Footer
  },
  data() {
    return {
      carouselImg: [
        require("../assets/qiantai.jpg"),
        require("../assets/威诺思展厅1.jpg"),
        require("../assets/威诺思展厅2.jpg")
      ],
      productList: [
        {
          img: require("../assets/product1.jpg"),
          title: "钢结构建设厂房工程"
        },
        {
          img: require("../assets/product2.jpg"),
          title: "钢结构 可定制钢构厂房"
        },
        {
          img: require("../assets/product3.jpg"),
          title: "钢结构 材质生产 工程用材料"
        },
        {
          img: require("../assets/product4.jpg"),
          title: "厂家直销 供应刚结构"
        },
        {
          img: require("../assets/product5.jpg"),
          title: "加工制作钢结构厂房框架安装 厂房工程"
        },
        {
          img: require("../assets/product6.jpg"),
          title: "厂家直销  未来蓝图钢构产品"
        },
        {
          img: require("../assets/product7.jpg"),
          title: "钢结构 销售厂家"
        },
        {
          img: require("../assets/product8.jpg"),
          title: "厂家直销 钢结构厂房 安装钢结构平台"
        },
        {
          img: require("../assets/product9.jpg"),
          title: "湖北杰锐 大型钢结构"
        },
        {
          img: require("../assets/product10.jpg"),
          title: "湖北 金属钢铁结构 加工钢结构 钢构件加工 建筑厂家"
        },
        {
          img: require("../assets/product11.jpg"),
          title: "钢结构设计 生产 安装"
        },
        {
          img: require("../assets/product12.jpg"),
          title: "生产钢结构工程 "
        },
      ]
    };
  },
};
</script>
<style lang="scss" scoped>
.w {
  width: 1200px;
  margin: auto;
}

.el-carousel__item .swiperImg {
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.com_introduce_box {
  background: #fff url(../assets/home_content_aboutbg.jpg) no-repeat center;
  height: 340px;
  .location {
    height: 100%;
    position: relative;
    .com_introduce {
      color: #fff;
      position: relative;
      text-align: center;
      font-size: 22px;
      font-family: "Microsoft YaHei";
      padding-top: 35px;
    }
    .com_introduce_usa {
      padding: 0 50px;
      width: 62px;
      position: relative;
      font-family: "Microsoft YaHei";
      color: #fff;
      margin: 10px auto 0;
    }
    .com_introduce_usa:before {
      content: "";
      display: block;
      width: 275px;
      height: 7px;
      position: absolute;
      top: 5px;
      left: -275px;
      background: url(../assets/module-titlebg-lefts.png) no-repeat center;
    }
    .com_introduce_usa:after {
      content: "";
      display: block;
      width: 275px;
      height: 7px;
      position: absolute;
      top: 5px;
      right: -275px;
      background: url(../assets/module-titlebg-rights.png) no-repeat center;
    }
    .com_des {
      width: 845px;
      .com_name {
        font-size: 26px;
        line-height: 79px;
        padding-left: 118px;
        color: #fff;
        font-family: "Microsoft YaHei";
        height: 79px;
        margin: 20px 0 35px;
        background: url(../assets/home_content-aboutus-img1.png) no-repeat left;
      }
      .com_content {
        max-height: 90px;
        line-height: 30px;
        text-align: justify;
        font-family: "宋体";
        text-indent: 2em;
        font-size: 14px;
        color: #fff;
        overflow: hidden;
      }
    }
    .item_btn {
      width: 142px;
      height: 42px;
      line-height: 42px;
      display: block;
      color: #646464;
      text-align: center;
      font-size: 16px;
      font-family: "宋体";
      background: #fff;
      position: absolute;
      right: 285px;
      bottom: -20px;
      z-index: 2;
      -moz-box-shadow: 0 15px 25px #eee;
      -webkit-box-shadow: 0 15px 25px #eee;
      box-shadow: 0 15px 25px #eee;
    }
    .item_btn:hover {
      cursor: pointer;
      text-decoration: underline;
    }
    .com_logo {
      padding: 0;
      border: 0;
      margin: 0;
      width: 180px;
      height: 180px;
      position: absolute;
      right: 62px;
      bottom: -20px;
      z-index: 10;
      max-height: 180px;
      -moz-box-shadow: 0 0 15px rgba(255, 255, 255, 0.65);
      -webkit-box-shadow: 0 0 15px rgba(255, 255, 255, 0.65);
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.65);
    }
  }
  .location:before {
    content: "";
    display: block;
    width: 174px;
    height: 238px;
    border: 3px solid #4097e9;
    position: absolute;
    right: 0;
    bottom: -40px;
    z-index: 2;
  }
}
.product {
  text-align: center;

  font-size: 22px;
  font-family: "Microsoft YaHei";
  color: #00a0ea;
  padding-top: 40px;
}
.product_usa {
  padding: 0 50px;
  width: 66px;
  position: relative;
  font-family: "Microsoft YaHei";
  color: #00a0ea;
  margin: 10px auto 0;
}
.product_usa:before {
  content: "";
  display: block;
  width: 275px;
  height: 7px;
  position: absolute;
  top: 5px;
  left: -275px;
  background: url(../assets/module-titlebg-left.png) no-repeat center;
}
.product_usa:after {
  content: "";
  display: block;
  width: 275px;
  height: 7px;
  position: absolute;
  top: 5px;
  right: -275px;
  background: url(../assets/module-titlebg-right.png) no-repeat center;
}

.product_list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 35px;
  .product_list_one {
    width: 260px;
    margin: 0 53px 53px 0;
    .product_list_oneImg {
      width: 260px;
      height: 260px;
      .product_img {
        display: block;
        width: 100%;
        height: 100%;
        background-color: #000;
      }
    }
    .product_list_oneBottom {
      p:first-child {
        line-height: 52px;
        color: #4f4f4f;
        height: 52px;
        text-align: center;
        font-family: "Microsoft YaHei";
        font-size: 16px;
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      p:last-child {
        display: block;
        width: 78px;
        height: 21px;
        text-align: center;
        line-height: 21px;
        color: #00a0ea;
        border: 1px solid #00a0ea;
        font-family: "宋体";
        font-size: 14px;
        margin: 0 auto;
      }
    }
  }
  .product_list_one:hover {
    cursor: pointer;
    p:first-child {
      color: #00a0ea;
    }
  }
  .product_list_one:nth-child(4n) {
    margin-right: 0;
  }
}

.contact {
  text-align: center;
  font-size: 22px;
  font-family: "Microsoft YaHei";
  color: #00a0ea;
  padding-top: 40px;
}
.contact_usa {
  padding: 0 50px;
  width: 66px;
  position: relative;
  font-family: "Microsoft YaHei";
  color: #00a0ea;
  margin: 10px auto 0;
}
.contact_usa:before {
  content: "";
  display: block;
  width: 275px;
  height: 7px;
  position: absolute;
  top: 5px;
  left: -275px;
  background: url(../assets/module-titlebg-left.png) no-repeat center;
}
.contact_usa:after {
  content: "";
  display: block;
  width: 275px;
  height: 7px;
  position: absolute;
  top: 5px;
  right: -275px;
  background: url(../assets/module-titlebg-right.png) no-repeat center;
}

.contact_box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 0 0;
  .contact_box_left {
    margin-right: 50px;
    img {
      width: 700px;
      height: 280px;
    }
  }
  .ul_box {
    li {
      font-size: 16px;
      color: #585858;
      font-family: "Microsoft YaHei";
      position: relative;
      padding-left: 44px;
      line-height: 28px;
      margin: 25px 0;
    }
    li:nth-child(1) {
      background: url(../assets/contact0519.png) no-repeat left 3px;
    }
    li:nth-child(2) {
      background: url(../assets/contact0519.png) no-repeat left -25px;
    }
    li:nth-child(3) {
      background: url(../assets/contact0519.png) no-repeat left 3px;
    }
    li:nth-child(4) {
      background: url(../assets/contact0519.png) no-repeat left -25px;
    }
    li:nth-child(5) {
      background: url(../assets/contact0519.png) no-repeat left -105px;
    }
  }
}

</style>
