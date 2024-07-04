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
  Container,
  Stack,
} from "@mui/material";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import "../layout/Form.css";

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

// const Form = () => {
//   return (
//     <Box className="formBox">
//       <Typography
//         fontSize={"20px"}
//         marginLeft={"30px"}
//         marginTop={"38px"}
//         marginBottom={"14px"}
//       >
//         온라인상담
//       </Typography>

//       <Typography>
//         <hr />
//       </Typography>

//       <Grid className="grid-container">
//         <Box
//           className="text-box"
//           sx={{
//             marginLeft: "52px",
//           }}
//         >
//           <TextField id="outlined-basic" label="이름" variant="outlined" />
//         </Box>

//         <Box
//           className="text-box"
//           sx={{
//             marginRight: "52px",
//           }}
//         >
//           <TextField id="outlined-basic" label="전화번호" variant="outlined" />
//         </Box>
//       </Grid>

//       <TextField
//         className="text-field"
//         sx={{
//           height: "52px",
//         }}
//         id="outlined-select-currency"
//         select
//         label="주소"
//         defaultValue="구 선택"
//         helperText="구를 선택해주세요"
//       >
//         {currencies.map((option) => (
//           <MenuItem key={option.value} value={option.value}>
//             {option.label}
//           </MenuItem>
//         ))}
//       </TextField>

//       <TextField
//         className="text-field"
//         sx={{
//           height: "240px",
//         }}
//         id="outlined-basic"
//         label="요청사항/문의사항"
//         variant="outlined"
//         multiline
//         rows={5}
//       />

//       <Button
//         className="file-button"
//         variant="contained"
//         endIcon={<AddPhotoAlternateOutlinedIcon />}
//       >
//         {/* <input className="buttonName" type="file" /> */}
//       </Button>

//       <FormGroup>
//         <FormControlLabel
//           sx={{
//             flexDirection: "row",
//             alignItems: "center",
//             textAlign: "center",
//             marginTop: "38px",
//             justifyContent: "center",
//           }}
//           control={<Checkbox />}
//           label="개인정보수집 및 이용동의"
//         />
//       </FormGroup>

//       <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         height="100%"
//       >
//         <Button
//           sx={{
//             flexDirection: "row",
//             alignItems: "center",
//             textAlign: "center",
//             justifyContent: "center",
//             width: "180px",
//             height: "50px",
//           }}
//           variant="contained"
//         >
//           신청하기
//         </Button>
//       </Box>
//     </Box>
//   );
// };

const Form = () => {
  return (
    <Container id="formBox">
      <p>온라인 상담</p>
      <div>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              size="small"
              label="이름"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              size="small"
              label="전화번호"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-select-currency"
              size="small"
              select
              label="주소"
              defaultValue="구 선택"
              helperText="구를 선택해주세요"
              sx={{ width: "100%" }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="요청사항/문의사항"
              variant="outlined"
              multiline
              rows={5}
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button
              variant="contained"
              endIcon={<AddPhotoAlternateOutlinedIcon />}
            >
              첨부파일
              {/* <input className="buttonName" type="file" /> */}
            </Button>
          </Grid>
          <Grid item xs={12}>
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
          </Grid>
        </Grid>
      </div>
      <Grid container></Grid>

      {/* <Container className="boxContainer">
        <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="전화번호"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
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
          </Grid>
        </Grid>

        
      </Container>

      <Container></Container> */}
    </Container>
  );
};

export default Form;

{
  /* <Grid container spacing={8}>
          <Grid item md={6}>
            <Box component="form" className="boxtext">
              <TextField id="outlined-basic" label="이름" variant="outlined" />
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box component="form" className="boxtext">
              <TextField
                id="outlined-basic"
                label="전화번호"
                variant="outlined"
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container>
          <Box component="form">
            <TextField
              className="boxtext2"
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
          </Box>
        </Grid> */
}
