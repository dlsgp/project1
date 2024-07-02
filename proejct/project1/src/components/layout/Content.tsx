import { useState } from "react";
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
import { CheckBox } from "@mui/icons-material";

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
  const [selectedOption, setSelectedOption] = useState("구 선택");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <StyledBox sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} justifyContent={"flex-end"}>
          <Grid item xs={6}>
            <StyledImage
              sx={{ borderRadius: "10px" }}
              src={svgGroup}
              alt="사진"
            />
          </Grid>
          <Grid item xs={6}>
            <StyleBox>
              <Typography
                fontSize={"20px"}
                marginLeft={"30px"}
                marginTop={"38px"}
                marginBottom={"14px"}
              >
                온라인상담
              </Typography>
              <Typography>
                <hr />
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": {
                        height: "52px",
                        width: "212px",
                        marginLeft: "52px",
                        marginTop: "28px",
                      },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="이름"
                      variant="outlined"
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": {
                        height: "52px",
                        width: "212px",
                        marginRight: "52px",
                        marginTop: "28px",
                      },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="전화번호"
                      variant="outlined"
                    />
                  </Box>
                </Grid>

                <TextField
                  sx={{
                    width: "456px",
                    height: "52px",
                    marginLeft: "68px",
                    marginTop: "30px",
                  }}
                  id="outlined-select-currency"
                  select
                  label="주소"
                  defaultValue="중구"
                  helperText="구를 선택해주세요"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                {/* <div className="form-item">
                  <select
                    className="form-select"
                    value={selectedOption}
                    onChange={handleOptionChange}
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div> */}

                <TextField
                  sx={{
                    width: "456px",
                    height: "52px",
                    marginLeft: "68px",
                    marginTop: "50px",
                  }}
                  id="outlined-select-currency"
                  select
                  label="상담유형"
                  defaultValue="원하는 상담 유형 선택"
                  helperText="원하시는 상담 유형을 선택해주세요"
                >
                  {advice.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": {
                      width: "456px",
                      height: "102px",
                      marginLeft: "68px",
                      marginTop: "50px",
                    },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    sx={{
                      width: "456px",
                      height: "auto",
                      marginLeft: "68px",
                      marginTop: "50px",
                      textAlign: "center",
                    }}
                    id="outlined-basic"
                    label="요청사항/문의사항"
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Box>
              </Grid>
              <StyledButton
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                endIcon={<AddPhotoAlternateOutlinedIcon />}
              >
                첨부파일
                <VisuallyHiddenInput type="file" />
              </StyledButton>
              <FormGroup>
                <FormControlLabel
                  sx={{
                    flexDirection: "row",
                    alignItems: "center",
                    textAlign: "center",
                    marginTop: "38px",
                    justifyContent: "center",
                  }}
                  control={<Checkbox />}
                  label="개인정보수집 및 이용동의"
                />
              </FormGroup>

              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
              >
                <Button
                  sx={{
                    flexDirection: "row",
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "center",
                    width: "180px",
                    height: "50px",
                  }}
                  variant="contained"
                >
                  신청하기
                </Button>
              </Box>
            </StyleBox>
          </Grid>
        </Grid>
      </StyledBox>

      {/* 박스 */}
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
            <Box className="InBox">Slide 1</Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="InBox">Slide 2</Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="InBox">Slide 3</Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="InBox">Slide 4</Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="InBox">Slide 5</Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="InBox">Slide 6</Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="InBox">Slide 7</Box>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* 이용후기 */}
      {/* <Grid item xs={8}> */}
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
