import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import HomeScreen from "./HomeScreen";
import ModuleDetail from "./ModuleDetail";
import GameHomePage from "./game/GameHomePage";
import NeedHelp from "../components/NeedHelp";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Outlet />
        <NeedHelp />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
      {
        path: "/module/:id",
        element: <ModuleDetail />,
      },
    ],
  },
  {
    path: "/game",
    children: [
      {
        index: true,
        element: <GameHomePage />,
      },
    ],
  },
]);

export default function RootRouteProvider() {
  return <RouterProvider router={router} />;
}
