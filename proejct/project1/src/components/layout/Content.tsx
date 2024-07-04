import { Grid, Box, Container } from "@mui/material";
import banner from "../../components/img/banner.jpg";
import banner2 from "../../components/img/banner2.jpg";
import banner3 from "../../components/img/banner3.jpg";
import map from "../../components/img/map.jpg";
import review from "../../components/img/review.jpg";
import CallIcon from "@mui/icons-material/Call";
import { Swiper, SwiperSlide } from "swiper/react";
import "../layout/Content.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay } from "swiper/modules";
import Form from "./Form";

const Content = () => {
  return (
    <Container className="mainContainer" maxWidth={"md"}>
      <Grid container spacing={4} className="gridContnainer">
        <Grid item xs={6} className="gridSwiper">
          <Swiper
            className="swiper"
            modules={[Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <img className="bannerImage" src={banner} alt="사진" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="bannerImage" src={banner2} alt="사진" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="bannerImage" src={banner3} alt="사진" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="bannerImage" src={banner} alt="사진" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="bannerImage" src={banner2} alt="사진" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="bannerImage" src={banner3} alt="사진" />
            </SwiperSlide>
          </Swiper>
        </Grid>

        <Grid item xs={6} className="gridForm">
          <Form></Form>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item md={6}>
          <Box className="">
            <CallIcon fontSize="large" />
            053-123-1234
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box></Box>
        </Grid>
      </Grid>
    </Container>

    // <div>
    //   <Box className="styledBox">
    //     <Grid className="grid-container">
    //       <Grid className="grid-item">
    //         <div>
    //           <Swiper
    //             className="swiper"
    //             modules={[Autoplay]}
    //             slidesPerView={1}
    //             loop={true}
    //             autoplay={{
    //               delay: 3000,
    //               disableOnInteraction: false,
    //             }}
    //           >
    //             <SwiperSlide>
    //               <img className="bannerImage" src={banner} alt="사진" />
    //             </SwiperSlide>
    //             <SwiperSlide>
    //               <img className="bannerImage" src={banner2} alt="사진" />
    //             </SwiperSlide>
    //             <SwiperSlide>
    //               <img className="bannerImage" src={banner3} alt="사진" />
    //             </SwiperSlide>
    //             <SwiperSlide>
    //               <img className="bannerImage" src={banner} alt="사진" />
    //             </SwiperSlide>
    //             <SwiperSlide>
    //               <img className="bannerImage" src={banner2} alt="사진" />
    //             </SwiperSlide>
    //             <SwiperSlide>
    //               <img className="bannerImage" src={banner3} alt="사진" />
    //             </SwiperSlide>
    //           </Swiper>
    //         </div>
    //       </Grid>
    //     </Grid>
    //     <Grid className="grid-container">
    //       <Form></Form>
    //     </Grid>
    //   </Box>

    //   {/* 박스 */}
    //   <Grid className="grid-contnainer">
    //     <div>
    //       <Grid className="grid-item">
    //         <div>
    //           <Box className="LBox">
    //             <CallIcon fontSize="large" />
    //             053-123-1234
    //           </Box>
    //         </div>
    //       </Grid>
    //       <Box className="RBox">
    //         <Swiper
    //           direction="vertical"
    //           autoplay={{
    //             delay: 2000,
    //             disableOnInteraction: false,
    //           }}
    //         >
    //           <SwiperSlide>Slide 1</SwiperSlide>
    //           <SwiperSlide>Slide 2</SwiperSlide>
    //           <SwiperSlide>Slide 3</SwiperSlide>
    //           <SwiperSlide>Slide 4</SwiperSlide>
    //         </Swiper>
    //       </Box>
    //     </div>
    //   </Grid>

    //   {/* 지도, 공지사항 */}
    //   <Grid className="grid-container">
    //     <Grid className="grid-item">
    //       <Box className="SsBox">
    //         <img className="styledImage" src={map} alt="사진" />
    //       </Box>
    //     </Grid>
    //     <Grid className="grid-item">
    //       <Box className="SsBox"></Box>
    //     </Grid>
    //   </Grid>
    //   {/* 인스타그램 */}
    //   <div className="Insta">
    //     <Swiper
    //       modules={[Autoplay]}
    //       spaceBetween={64}
    //       slidesPerView={5}
    //       loop={true}
    //       autoplay={{
    //         delay: 3000,
    //         disableOnInteraction: false,
    //       }}
    //     >
    //       <SwiperSlide>
    //         <Box className="InBox">Slide 1</Box>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <Box className="InBox">Slide 2</Box>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <Box className="InBox">Slide 3</Box>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <Box className="InBox">Slide 4</Box>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <Box className="InBox">Slide 5</Box>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <Box className="InBox">Slide 6</Box>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <Box className="InBox">Slide 7</Box>
    //       </SwiperSlide>
    //     </Swiper>
    //   </div>

    //   {/* 이용후기 */}
    //   {/* <Grid item xs={8}> */}
    //   <Grid className="grid-container">
    //     <Grid className="grid-items">
    //       <Box className="RBox">
    //         <img className="styledImage" src={review} alt="이용후기 사진" />
    //         <img className="styledImage" src={review} alt="이용후기 사진" />
    //         <img className="styledImage" src={review} alt="이용후기 사진" />
    //         <img className="styledImage" src={review} alt="이용후기 사진" />
    //       </Box>
    //     </Grid>
    //   </Grid>
    // </div>
  );
};
export default Content;
