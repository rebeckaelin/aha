import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../src/pages/LandingPage";
import TodosPage from "../src/pages/TodosPage";
import React from "react";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: React.createElement(LandingPage),
    },
    {
      path: "/todos",
      element: React.createElement(TodosPage),
    },
  ],
  { basename: "/aha" }
);

export default router;
