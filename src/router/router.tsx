import { createHashRouter, Navigate } from "react-router-dom";
import VariablesPages from "../pages/variables-pages";
import DecoderPages from "../pages/decoder-pages";
import Layout from "../components/layout";
import VariableIdPages from "../pages/variableId-pages";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>404 | Page not found</div>,
    children: [
      { index: true, element: <Navigate to="decoder" replace /> },
      { path: "decoder", element: <DecoderPages /> },
      { path: "variables", element: <VariablesPages /> },
      { path: "variable/:id", element: <VariableIdPages /> },
    ],
  },
]);

export default router;
