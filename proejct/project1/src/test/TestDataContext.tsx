// import React, { ReactNode, useContext } from "react";

// interface LayoutProps{
//   children: ReactNode;
// }

// // const TestDataContext = React.createContext();

// export const TestDataProvider: React.FC<LayoutProps> = ({ children }) => {
//   const notices = [
//     {
//       num: 1,
//       name: "홍길동",
//       title: "공지",
//       contents: "안녕하세요",
//       date: "2024.07.05",
//       readCount: 1,
//       image: 0,
//     },
//     {
//       num: 1,
//       name: "홍길동",
//       title: "공지",
//       contents: "안녕하세요",
//       date: "2024.07.05",
//       readCount: 1,
//       image: 0,
//     },
//     {
//       num: 1,
//       name: "홍길동",
//       title: "공지",
//       contents: "안녕하세요",
//       date: "2024.07.05",
//       readCount: 1,
//       image: 0,
//     },
//     {
//       num: 1,
//       name: "홍길동",
//       title: "공지",
//       contents: "안녕하세요",
//       date: "2024.07.05",
//       readCount: 1,
//       image: 0,
//     },
//   ];

//   return (
//     <TestDataContext.Provider value={{ notices }}>
//       {children}
//     </TestDataContext.Provider>
//   );
// };

// export const useTestData = () => useContext(TestDataContext);
