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
import "../layout/Content.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay } from "swiper/modules";

const StyledBox = styled(Box)({
  width: "100%",
  maxWidth: "1720px",
  height: "100%",
  maxHeight: "800px",
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: "0px",
  margin: "200px auto 0",
});

const StyleBox = styled(Box)({
  width: "100%",
  maxWidth: "574px",
  height: "100%",
  maxHeight: "800px",
  backgroundColor: "#ffffff",
  border: "1px solid #e5e5e5",
  borderRadius: "40px 0 0 40px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginLeft: "70px",
  marginRight: "70px",
});

const SBox = styled(Box)({
  width: "860px",
  height: "240px",
  marginLeft: "94px",
  marginTop: "138px",
  backgroundColor: "#1565c0",
  borderRadius: "10px",
  color: "#FFFFFF",
  textAlign: "center",
  fontSize: "40px",
  fontWeight: "bold",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& > *": {
    marginRight: "24px",
    marginTop: "8px",
  },
});

const SsBox = styled(Box)({
  width: "860px",
  height: "580px",
  marginLeft: "94px",
  marginTop: "244px",
  backgroundColor: "#1565c0",
  color: "#FFFFFF",
  fontSize: "32px",
  display: "flex",
});

const InBox = styled(Box)({
  width: "220px",
  height: "220px",
  marginRight: "64px",
  backgroundColor: "yellow",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const RBox = styled(Box)({
  marginLeft: "290px",
  marginTop: "244px",
  marginBottom: "240px",
  display: "flex",
});

const StyledImage = styled("img")({
  width: "100%",
  maxWidth: "860px",
  height: "100%",
  maxHeight: "800px",
});

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

const advice = [
  {
    label: "원하는 상담 유형 선택",
    value: "원하는 상담 유형 선택",
  },
  {
    label: "원하는 상담 유형 선택",
    value: "원하는 상담 유형 선택",
  },
  {
    label: "원하는 상담 유형 선택",
    value: "원하는 상담 유형 선택",
  },
  {
    label: "원하는 상담 유형 선택",
    value: "원하는 상담 유형 선택",
  },
  {
    label: "원하는 상담 유형 선택",
    value: "원하는 상담 유형 선택",
  },
  {
    label: "원하는 상담 유형 선택",
    value: "원하는 상담 유형 선택",
  },
];

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "32px",
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: "120px",
});

const StyledButton = styled(Button)({
  width: "120px",
  height: "32px",
  padding: "0px",
  backgroundColor: "white",
  color: "black",
  display: "flex",
  marginTop: "60px",
  marginLeft: "auto",
  marginRight: "68px",
});

const StyledSwiper = styled(Swiper)({
  color: "black",
});

const Content = () => {
  return (
    <div className="content">
      <div className="styledBox">
        <div className="grid-container">
          <div className="grid-item">
            <img className="styledImage" src={svgGroup} alt="사진" />
          </div>
          <div className="grid-item">
            <div className="styleBox">
              <h2 className="title">온라인상담</h2>
              <hr />
              <div className="form-container">
                <div className="form-item">
                  <input className="form-input" type="text" placeholder="이름" />
                </div>
                <div className="form-item">
                  <input className="form-input" type="tel" placeholder="전화번호" />
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
                  <select className="form-select" defaultValue="원하는 상담 유형 선택">
                    {advice.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-item">
                  <textarea className="form-textarea" placeholder="요청사항/문의사항"></textarea>
                </div>
              </div>
              <button className="styledButton">
                첨부파일
                <input className="visually-hidden-input" type="file" />
              </button>
              <div className="checkbox-container">
                <label className="checkbox-label">
                  <input className="checkbox" type="checkbox" />
                  개인정보수집 및 이용동의
                </label>
              </div>
              <div className="submit-container">
                <button className="submit-button" variant="contained">
                  신청하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 박스 */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <SBox>
            <CallIcon fontSize="large" />
            053-123-1234
          </SBox>
        </Grid>
        <Grid item xs={6}>
          <SBox
            sx={{
              padding: 0,
              marginLeft: 0,
              marginRight: "94px",
              marginTop: "138px",
              backgroundColor: "#ffffff",
            }}
          >
            <StyledSwiper
              direction="vertical"
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </StyledSwiper>
          </SBox>
        </Grid>
      </Grid>
      {/* 지도, 공지사항 */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <SsBox>
            <StyledImage sx={{ borderRadius: "0" }} src={map} alt="사진" />
          </SsBox>
        </Grid>
        <Grid item xs={6}>
          <SsBox
            sx={{
              margin: 0,
              padding: 0,
              marginLeft: 0,
              marginRight: "94px",
              marginTop: "244px",
            }}
          ></SsBox>
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
            <InBox>Slide 1</InBox>
          </SwiperSlide>
          <SwiperSlide>
            <InBox>Slide 2</InBox>
          </SwiperSlide>
          <SwiperSlide>
            <InBox>Slide 3</InBox>
          </SwiperSlide>
          <SwiperSlide>
            <InBox>Slide 4</InBox>
          </SwiperSlide>
          <SwiperSlide>
            <InBox>Slide 5</InBox>
          </SwiperSlide>
          <SwiperSlide>
            <InBox>Slide 6</InBox>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* 이용후기 */}
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <RBox>
            <StyledImage
              sx={{ borderRadius: "0", width: "290px", height: "290px" }}
              src={review}
              alt="이용후기 사진"
            />
            <StyledImage
              sx={{
                width: "290px",
                height: "290px",
                marginLeft: "64px",
              }}
              src={review}
              alt="이용후기 사진"
            />
            <StyledImage
              sx={{
                width: "290px",
                height: "290px",
                marginLeft: "64px",
              }}
              src={review}
              alt="이용후기 사진"
            />
            <StyledImage
              sx={{
                width: "290px",
                height: "290px",
                marginLeft: "64px",
              }}
              src={review}
              alt="이용후기 사진"
            />
          </RBox>
        </Grid>
      </Grid>
    </div>
  );
};

export default Content;
