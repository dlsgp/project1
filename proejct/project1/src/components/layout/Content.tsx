import {
  Grid,
  Box,
  TextField,
  Typography,
  MenuItem,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import svgGroup from "../../components/img/Mask group.svg";
import map from "../../components/img/map.jpg";
import review from "../../components/img/review.jpg";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import CallIcon from "@mui/icons-material/Call";
import { Swiper, SwiperSlide } from "swiper/react";
import "../layout/Content.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay } from "swiper/modules";
import { Check, CheckBox } from "@mui/icons-material";

const currencies = [
  {
    value: "구 선택",
    label: "구 선택",
  },
  {
    value: "북구",
    label: "북구",
  },
  {
    value: "서구",
    label: "서구",
  },
  {
    value: "중구",
    label: "중구",
  },
  {
    value: "달서구",
    label: "달서구",
  },
  {
    value: "수성구",
    label: "수성구",
  },
  {
    value: "달성군",
    label: "달성군",
  },
  {
    value: "군위군",
    label: "군위군",
  },
];

const Content = () => {
  return (
    <div className="content">
      <Box className="styledBox">
        <Grid className="grid-container">
          <Grid className="grid-item">
            <img className="styledImage" src={svgGroup} alt="사진" />
          </Grid>
          <Grid className="grid-item">
            <div className="styleBox">
              <div className="title">온라인상담</div>
              <hr />
              <div className="form-container">
                <div className="form-item">
                  <input
                    className="form-input"
                    type="text"
                    placeholder="이름"
                  />
                </div>
                <div className="form-item">
                  <input
                    className="form-input"
                    type="tel"
                    placeholder="전화번호"
                  />
                </div>
                <div className="form-item">
                  <select className="form-select" defaultValue="중구">
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-item">
                  <textarea
                    className="form-textarea"
                    placeholder="요청사항/문의사항"
                  ></textarea>
                </div>
              </div>
              <Button className="styledButton">
                첨부파일
                <input className="visually-hidden-input" type="file" />
              </Button>
              <CheckBox className="checkbox">
                <label className="checkbox-label">
                  <Checkbox className="checkbox" />
                  개인정보수집 및 이용동의
                </label>
              </CheckBox>
              <div className="submit">
                <Button className="submit-button">신청하기</Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
      {/* 박스 */}
      <Grid className="grid-container">
        <Grid className="grid-item">
          <Box className="SBox">
            <CallIcon fontSize="large" />
            053-123-1234
          </Box>
        </Grid>
        <Grid className="grid-item">
          <Box className="SBox">
            <div className="SlideSwiper">
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </div>
          </Box>
        </Grid>
      </Grid>

      {/* 지도, 공지사항 */}
      <Grid className="grid-container">
        <Grid className="grid-item">
          <Box className="SsBox">
            <img className="styleImage" src={map} alt="지도사진" />
          </Box>
        </Grid>
        <Grid className="grid-item">
          <Box className="SsBox"></Box>
        </Grid>
      </Grid>

      {/* 인스타그램 */}
      <div className="Insta">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={64}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="InBox">Slide 1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="InBox">Slide 2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="InBox">Slide 3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="InBox">Slide 4</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="InBox">Slide 5</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="InBox">Slide 6</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="InBox">Slide 7</div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* 이용후기 */}
      {/* <Grid item xs={8}> */}
      <Grid className="grid-container">
        <Grid className="grid-items">
          <Box className="RBox">
            <img className="reviewImage" src={review} alt="이용후기" />
            <img className="reviewImage" src={review} alt="이용후기" />
            <img className="reviewImage" src={review} alt="이용후기" />
            <img className="reviewImage" src={review} alt="이용후기" />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Content;
