import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import About from "../Pages/About";

interface RouteType {
    path:string,
    component: () => JSX.Element,
    name:string
}


const routes: any = [
    {
        path: "",
        component: Home,
        name: "Home Screen",

    },
    {
        path: "/dashboard",
        component: Dashboard,
        name: "Dashboard",
    },
    {
        path: "/About",
        component: About,
        name: "Dashboard",
    },
];

export default routes