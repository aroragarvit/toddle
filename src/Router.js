import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Dashboard, Auth, Posts, Bookmarks } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/boards/:id",
    element: <Posts />,
  },
  {
    path: "/bookmarks",
    element: <Bookmarks />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
