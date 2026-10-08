import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/404";
import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
      
    </>,
  ),
);

export default function Router() {
  return <RouterProvider router={router} />;
}
