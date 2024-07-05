import {
  Container,
  Grid,
  Table,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import "../layout/AllNotice.css";
import { DataGrid } from "@mui/x-data-grid";

const AllNotice = () => {
  const notices = [
    {
      num: 1,
      name: "홍길동",
      title: "공지",
      contents: "안녕하세요",
      date: "2024.07.05",
      readCount: 1,
      image: 0,
    },
    {
      num: 1,
      name: "홍길동",
      title: "공지",
      contents: "안녕하세요",
      date: "2024.07.05",
      readCount: 1,
      image: 0,
    },
    {
      num: 1,
      name: "홍길동",
      title: "공지",
      contents: "안녕하세요",
      date: "2024.07.05",
      readCount: 1,
      image: 0,
    },
    {
      num: 1,
      name: "홍길동",
      title: "공지",
      contents: "안녕하세요",
      date: "2024.07.05",
      readCount: 1,
      image: 0,
    },
  ];

  return (
    <Container id="noticeContainer">
      <Grid container>
        <Grid xs>
          <p id="notice-title">공지사항</p>
        </Grid>
        <Grid xs="auto">
          <p>---</p>
        </Grid>
      </Grid>

      <hr />
      <TableContainer>
        <Table>
          {notices.map((notice) => (
            <TableRow>
              <TableCell>{notice.num}</TableCell>
              <TableCell sx={{ width: "50%" }}>{notice.title}</TableCell>
              <TableCell>{notice.date}</TableCell>
              <TableCell>{notice.readCount}</TableCell>
            </TableRow>
          ))}
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AllNotice;
