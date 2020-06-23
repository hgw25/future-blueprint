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
          <ContactUs class="content_one"></ContactUs>
          <div class="contact_box_left">
            <img src="../assets/map.png" alt />
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
import Classfiy from "@/components/classfiy";
import CompanyInfo from "@/components/companyInfo";
import ProList from "@/components/proList";
import ContactUs from "@/components/contactUs";
export default {
  components: {
    Head,
    Footer,
    Classfiy,
    CompanyInfo,
    ProList,
    ContactUs
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
      .content_one {
        margin-top: 8px;
      }
      .contact_box_left {
        width: 100%;
        height: 365px;
        margin-top: -30px;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
