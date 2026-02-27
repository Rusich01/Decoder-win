import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import VariablesPages from "./pages/variables-pages";
import DecoderPages from "./pages/decoder-pages";
import Layout from "./components/layout";
import VariableIdPages from "./pages/variableId-pages";

const router = createBrowserRouter([
  {
    path: "/",

    element: <Layout />,

    children: [
      { index: true, element: <Navigate to="/decoder" replace /> },

      { path: "decoder", element: <DecoderPages /> },

      { path: "variables", element: <VariablesPages /> },

      { path: "variable/:id", element: <VariableIdPages /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
