<template>
  <div>
    <div class="top_box w">
      <div class="top_box_left">
        <div class="logo_box">
          <img class="logoImg" src="../assets/logo.png" alt />
        </div>
        <div class="top_cmName">
          <h1>湖北未来蓝图钢结构工程有限公司</h1>
          <p>主营：轻钢结构厂房，重钢结构厂房，畜牧工程，轻钢别墅</p>
        </div>
      </div>
      <div class="top_box_right">
        <div class="top_tel">
          <img class="top_telImg" src="../assets/icontels.png" alt />
        </div>
        <div class="top_telNum">
          <p>联系人：邹经理</p>
          <p>13871461313</p>
        </div>
      </div>
    </div>
    <div class="head_box">
      <el-menu
        :default-active="toActiveIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">网站首页</el-menu-item>
        <el-menu-item index="2">公司介绍</el-menu-item>
        <el-menu-item index="3">产品介绍</el-menu-item>
        <el-menu-item index="4">联系我们</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  name: "Head",
  data() {
    return {
      toActiveIndex: this.activeIndex
    };
  },
  props: {
    activeIndex: {
      type: String,
      default: "1"
    }
  },
  mounted() {
  },
  methods: {
    handleSelect(key, keyPath) {
      this.toActiveIndex = key;
      if (key == "1") {
        this.$router.push({
          path: "/",
        });
      } else if (key == "2") {
        this.$router.push({
          path: "/comInfo",
        });
      } else if (key == "3") {
        this.$router.push({
          path: "/productDetail",
        });
      } else if (key == "4") {
        this.$router.push({
          path: "/aboutUs",
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.w {
  width: 1200px;
  margin: auto;
}
.head_box {
  background-color: rgb(84, 92, 100);
  /deep/ .el-menu {
    width: 1200px;
    margin: auto;
    border-bottom: none;
  }
}
.top_box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  .top_box_left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .logo_box {
      width: 65px;
      height: 65px;
      .logoImg {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .top_cmName {
      margin-left: 10px;
      h1 {
        height: 24px;
        line-height: 24px;
        font-size: 24px;
        font-family: "微软雅黑";
        padding-bottom: 10px;
      }
    }
  }
  .top_box_right {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .top_tel {
      width: 30px;
      height: 35px;
      .top_telImg {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .top_telNum {
      margin-left: 10px;
      p:first-child {
        font-family: "微软雅黑";
        height: 14px;
        line-height: 14px;
        font-size: 14px;
        display: block;
        color: #555;
        margin-bottom: 10px;
      }
      p:last-child {
        font-family: "Microsoft YaHei";
        color: #01a0eb;
        font-style: normal;
        font-weight: 400;
        height: 18px;
        line-height: 18px;
        font-size: 18px;
      }
    }
  }
}
</style>
