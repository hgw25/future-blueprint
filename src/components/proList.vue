<template>
  <div class="content_box_left1">
    <div class="companyInfo">
      <div class="mode_con_title">
        <h3>产品列表</h3>
      </div>
    </div>
    <div class="product_list">
      <div class="product_listOne" v-for="(item,index) in proList" :key="index" @click="goDetail(item.id, item.title)">
        <div class="product_listOne_left">
          <img :src="item.img" alt />
        </div>
        <div class="product_listOne_right">
          <p>{{item.title}}</p>
          <p>面议</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      proList: [
        {
          id: "5",
          img: require("../assets/DSC_0930.jpg"),
          title: "加工制作钢结构厂房框架安装 厂房.."
        },
        {
          id: "6",
          img: require("../assets/product8.jpg"),
          title: "厂家直销 未来蓝图钢构产品"
        },
        {
          id: "7",
          img: require("../assets/product9.jpg"),
          title: "钢结构 销售厂家"
        },
        {
          id: "8",
          img: require("../assets/DSC_0952.jpg"),
          title: "厂家直销 钢结构厂房 安装钢结构..."
        }
      ]
    };
  },
  methods: {
    goDetail(id, title) {
      this.$router.push({
        path: "/productDetail",
        query: {
          id,
          title
        }
      });
    },
  }
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
  .product_list {
    padding: 10px;
    .product_listOne {
      display: flex;
      justify-content: flex-start;
      background-color: #fff;
      margin-bottom: 10px;
      .product_listOne_left {
        width: 120px;
        height: 120px;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .product_listOne_right {
        width: calc(100% - 140px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px;
        p:first-child {
          font-family: "Microsoft YaHei";
          font-size: 14px;
          color: #323232;
        }
        p:last-child {
          color: #00a0e9;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
