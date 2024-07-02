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
  //   const [selectedOption, setSelectedOption] = useState("구 선택");

  //   const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //     setSelectedOption(event.target.value);
  //   };

  return (
    <div>
      <Box className="styledBox">
        <Grid className="grid-container">
          <img className="bannerImage" src={svgGroup} alt="사진" />
        </Grid>
        <Grid className="grid-container">
          <Box className="formBox">
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

            <Grid className="grid-container">
              <Box
                className="text-box"
                sx={{
                  marginLeft: "52px",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="이름"
                  variant="outlined"
                />
              </Box>

              <Box
                className="text-box"
                sx={{
                  marginRight: "52px",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="전화번호"
                  variant="outlined"
                />
              </Box>
            </Grid>

            <TextField
              className="text-field"
              sx={{
                height: "52px",
              }}
              id="outlined-select-currency"
              select
              label="주소"
              defaultValue="구 선택"
              helperText="구를 선택해주세요"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            {/* <TextField className="form-item">
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
                </TextField> */}

            <TextField
              className="text-field"
              sx={{
                height: "240px",
              }}
              id="outlined-basic"
              label="요청사항/문의사항"
              variant="outlined"
              multiline
              rows={5}
            />

            <Button
              className="file-button"
              variant="contained"
              endIcon={<AddPhotoAlternateOutlinedIcon />}
            >
              첨부파일
            </Button>

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
          </Box>
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
          <Box
            sx={{
              padding: 0,
              marginLeft: 0,
              marginRight: "94px",
              marginTop: "138px",
              backgroundColor: "#ffffff",
            }}
          >
            <Swiper
              className="SlideSwiper"
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
            </Swiper>
          </Box>
        </Grid>
      </Grid>
      {/* 지도, 공지사항 */}
      <Grid className="grid-container">
        <Grid className="grid-item">
          <Box className="SsBox">
            <img className="styledImage" src={map} alt="사진" />
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
      <Grid className="grid-container">
        <Grid className="grid-items">
          <Box className="RBox">
            <img className="styledImage" src={review} alt="이용후기 사진" />
            <img className="styledImage" src={review} alt="이용후기 사진" />
            <img className="styledImage" src={review} alt="이용후기 사진" />
            <img className="styledImage" src={review} alt="이용후기 사진" />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
export default Content;
