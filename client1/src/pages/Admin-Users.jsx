// import { useEffect } from "react";

// export const users = () => {
//   const getAllUsersData = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/admin/users", {
//         method: "GET",
//       });

//       const data = await response.json();
//       console.log("Users:", data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getAllUsersData();
//   }, []);

//   return <div>Admin Users Page</div>;
// };
