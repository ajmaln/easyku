import About from "./views/About";
import { Results, Notifications } from "./views/Results";

const fullPath = (path) => process.env.PUBLIC_URL + path;

export const ROUTES = [
  {
    title: "Results",
    path: fullPath("/"),
    component: Results,
  },
  {
    title: "Notifications",
    path: fullPath("/notifications"),
    component: Notifications,
  },
  {
    title: "About",
    path: fullPath("/about"),
    component: About,
  },
];

