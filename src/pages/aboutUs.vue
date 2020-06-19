<template>
  <div>
    <Head activeIndex="4"></Head>
    <div class="top_img">
      <img src="../assets/pagein-banner.jpg" alt />
    </div>
    <div class="content_box">
      <div class="content_box_center w">
        <div class="content_leftBox">
          <CompanyInfo></CompanyInfo>
          <Classfiy></Classfiy>
          <ProList></ProList>
        </div>
        <div class="content_rightBox">
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Head from "@/components/head";
import Footer from "@/components/footer";
import Classfiy from "@/components/Classfiy";
import CompanyInfo from "@/components/CompanyInfo";
import ProList from "@/components/ProList";
export default {
  components: {
    Head,
    Footer,
    Classfiy,
    CompanyInfo,
    ProList
  }
}
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
    }
  }
}
</style>
