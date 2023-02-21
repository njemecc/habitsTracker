import "./App.css";

//components
import NavBar from "./components/UI/NavBar";
import HabbitManager from "./components/habbits/HabbitManager";

//router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import { store } from "./store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/manage-habbits",
        element: <HabbitManager />,
      },
    ],
  },
]);

function App() {
  <Provider store={store}>
    return <RouterProvider router={router} />;
  </Provider>;
}

export default App;
