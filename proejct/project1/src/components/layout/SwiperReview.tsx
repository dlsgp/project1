import { Box, Grid, useMediaQuery } from "@mui/material";
import {
  Virtual,
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import review from "../../components/img/review.jpg";

const SwiperReview = () => {
  const isXSmall = useMediaQuery("(max-width: 576px)");
  const isSmall = useMediaQuery("(max-width: 768px)");
  const isMedium = useMediaQuery("(max-width: 992px)");
  const isLarge = useMediaQuery("(max-width: 1200px)");

  let slidesPerView = 6;
  if (isXSmall) {
    slidesPerView = 2;
  } else if (isSmall) {
    slidesPerView = 3;
  } else if (isMedium) {
    slidesPerView = 4;
  } else if (isLarge) {
    slidesPerView = 6;
  }

  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Virtual, Navigation, Pagination, Scrollbar]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Box
          sx={{
            width: 210,
            height: 210,
            overflow: "hidden",
          }}
        >
          <img
            src={review}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{
            width: 210,
            height: 210,
            overflow: "hidden",
          }}
        >
          <img
            src={review}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{
            width: 210,
            height: 210,
            overflow: "hidden",
          }}
        >
          <img
            src={review}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{
            width: 210,
            height: 210,
            overflow: "hidden",
          }}
        >
          <img
            src={review}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{
            width: 210,
            height: 210,
            overflow: "hidden",
          }}
        >
          <img
            src={review}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{
            width: 210,
            height: 210,
            overflow: "hidden",
          }}
        >
          <img
            src={review}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{
            width: 210,
            height: 210,
            overflow: "hidden",
          }}
        >
          <img
            src={review}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{
            width: 210,
            height: 210,
            overflow: "hidden",
          }}
        >
          <img
            src={review}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperReview;
