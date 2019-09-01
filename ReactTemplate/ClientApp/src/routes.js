import Home from "./components/pages/Home";
import Counter from "./components/pages/Counter";
import FetchData from "./components/pages/FetchData";

export default [
  { name: "Home", component: Home, path: "/", routeProps: { exact: true } },
  { name: "Counter", component: Counter, path: "/counter" },
  {
    name: "Fetch Data",
    component: FetchData,
    path: "/fetch-data"
  }
];
