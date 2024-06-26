import * as React from "react";
import { Grid, Box, styled, Paper, TextField, Typography } from "@mui/material";
import svgGroup from "../../components/img/Mask group.svg";

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

const StyledImage = styled("img")({
  width: "100%",
  maxWidth: "860px",
  height: "100%",
  maxHeight: "800px",
  borderRadius: "10px",
});

export function Content() {
  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  // }));

  return (
    <StyledBox sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} justifyContent={"flex-end"}>
        <Grid item xs={6}>
          <StyledImage src={svgGroup} alt="사진" />
        </Grid>
        <Grid item xs={6}>
          <StyleBox>
            <Typography fontSize={"20px"} marginLeft={"30px"}>
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
            </Grid>
          </StyleBox>
        </Grid>
      </Grid>
    </StyledBox>
  );
}

export default Content;
