import { RouterProvider } from "react-router";

import router from "./routes/routes";
// import UserProvider from "./context/user/UserProvider";

function App(){
  return (
    // <UserProvider>
      <RouterProvider router={router} />
    // </UserProvider>
  );
}

export default App;