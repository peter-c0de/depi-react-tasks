import { RouterProvider } from "react-router";

import router from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./store/store";
// import UserProvider from "./context/user/UserProvider";

function App(){
  return (
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
  );
}

export default App;