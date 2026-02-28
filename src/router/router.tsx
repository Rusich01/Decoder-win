import { createHashRouter, Navigate } from "react-router-dom";
import VariablesPages from "../pages/variables-page";
import DecoderPages from "../pages/decoder-page";
import Layout from "../components/layout";
import VariableIdPages from "../pages/variableId-page";
import { ROUTES } from "./routes";

const router = createHashRouter([
  {
    path: ROUTES.LAYOUT,
    element: <Layout />,
    errorElement: <div>404 | Page not found</div>,
    children: [
      { index: true, element: <Navigate to="decoder" replace /> },
      { path: ROUTES.DECODER, element: <DecoderPages /> },
      { path: ROUTES.VARIABLES, element: <VariablesPages /> },
      { path: `${ROUTES.VARIABLE_ID}/:id`, element: <VariableIdPages /> },
    ],
  },
]);

export default router;
