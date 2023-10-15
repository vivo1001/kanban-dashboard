import { create } from "zustand";

// import { boardData } from "../data/index";
import APIDetails, { boardData } from "../data/index"
import fetchDataFromAPI from "../data/getData";


const useBoard = create((set) => ({
  board: boardData,
  setBoard: (board) => set((state) => ({ board })),
}));

export default useBoard;

// import { useState } from "react";
// import { create } from "zustand";

// const FetchBoardData = () => {
//   const [boardData, setBoardData] = useState(null);
//   const data = {
//     columns: [
//       {
//         id: 1,
//         title: "Backlog",
//         cards: [
//           {
//             id: 1,
//             title: "Database Setup",
//             description: "Firebase Integration",
//           },
//           {
//             id: 2,
//             title: "Data Flow",
//             description: "Setup Diagram with other developers",
//           },
//         ],
//       },
//       {
//         id: 2,
//         title: "TODO",
//         cards: [
//           {
//             id: 9,
//             title: "Data Table Page",
//             description: "Server side Pagination",
//           },
//         ],
//       },
//       {
//         id: 3,
//         title: "Doing",
//         cards: [
//           {
//             id: 10,
//             title: "Full Calendar Extension",
//             description: "Make new events and store in global states",
//           },
//           {
//             id: 11,
//             title: "Custom Kanban Board",
//             description:
//               "Setup react-kanban dep within Dashboard as seperate page",
//           },
//         ],
//       },
//       {
//         id: 4,
//         title: "Completed",
//         cards: [
//           {
//             id: 12,
//             title: "Vite Server Setup",
//             description: "Configure required modules and starters",
//           },
//           {
//             id: 13,
//             title: "Modular structre",
//             description:
//               "Write css in form of modules to reduce the naming conflicts",
//           },
//         ],
//       },
//     ],
//   };
//   setBoardData(data);
//   return boardData;
// };

// // Call the function to fetch data when the store is created.

// // const useBoard = create((set) => {

// //   return {
// //     board: boardData,
// //     setBoard:(board) => set((state) => ({ board })),
// //   };
// // });
// const useBoard = create((set) => ({
//   board: FetchBoardData().boardData,
//   setBoard: (board) => set((state) => ({ board })),
// }));
// export default useBoard;
