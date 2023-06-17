import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard, Auth, Posts, Bookmarks } from "./pages";
import { Protected } from "./layouts/Protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Dashboard />
      </Protected>
    ),
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/boards/:id",
    element: (
      <Protected>
        <Posts />
      </Protected>
    ),
  },
  {
    path: "/bookmarks",
    element: (
      <Protected>
        <Bookmarks />
      </Protected>
    ),
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
