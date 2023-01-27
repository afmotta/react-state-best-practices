import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from "react-router-dom";
import { Context } from "./Context";
import { Home } from "./Home";
import "./index.css";
import { Jotai } from "./Jotai";
import { XState } from "./XState";
import { Layout } from "./Layout";
import { Remote } from "./Remote";
import { Character } from "./Remote/Character";
import { Characters } from "./Remote/Characters";
import { State } from "./State";
import { URL } from "./URL";
import { QueryParams } from "./URL/QueryParams";
import { Tabs } from "./URL/Tabs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "use-state",
        element: <State />,
      },
      {
        path: "url",
        element: <URL />,
        children: [
          {
            path: "tabs",
            element: <Navigate to='account' replace={true} />,
          },
          {
            path: "tabs/:tab",
            element: <Tabs />,
          },
          {
            path: "query-params",
            element: <QueryParams />,
          },
        ],
      },
      {
        path: "context",
        element: <Context />,
      },
      {
        path: "remote",
        element: <Remote />,
        children: [
          {
            index: true,
            element: <Navigate to='characters' replace={true} />,
          },
          {
            path: "characters",
            element: <Characters />,
          },
          {
            path: "characters/:id",
            element: <Character />,
          },
        ],
      },
      {
        path: "jotai",
        element: <Jotai />,
      },
      {
        path: "xstate",
        element: <XState />,
      },
    ],
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
