import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";

// Original commented out code
// const router = createBrowserRouter([
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="/home" element={<Home />}></Route>
//       <Route path="/about" element={<About />}></Route>
//     </Route>
//   ),
// ]);

// Original Router function (commented out)
// function Router() {
//   return (
//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route path="/home" element={<Home />}></Route>
//         <Route path="/about" element={<About />}></Route>
//       </Route>
//     </Routes>
//   );
// }
// export default Router;

// New working router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="resume" element={<Resume />} />
    </Route>
  )
);

export default router;
