import { Home } from "./components/Home";
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";

export default [
  { name: "Home", component: Home, path: "/", routeProps: { exact: true } },
  { name: "Counter", component: Counter, path: "/counter" },
  {
    name: "Fetch Data",
    component: FetchData,
    path: "/fetch-data"
  }
];
