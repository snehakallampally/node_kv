import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateEmployee from "./pages/Createemployee";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import HomeLayout from "./layouts/HomeLayout";
import EmployeeList from "./pages/EmployeeList";
import EditEmployee from "./pages/EditEmployee";
import Employee from "./pages/Employee";
import { Provider } from "react-redux";
import store from "./Store/store";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <NotFound />,
    },
    {
      path: "/employees",
      element: <HomeLayout />,
      children: [
        { index: true, element: <EmployeeList /> },
        { path: "create", element: <CreateEmployee /> },
        { path: "edit/:id", element: <EditEmployee /> },
        { path: ":id", element: <Employee /> },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
};
export default App;
