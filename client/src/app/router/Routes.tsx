import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "catalog", element: <Catalog /> },
      { path: "catalog/:id", element: <ProductDetails /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

// export const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route index element={<HomePage />} />
//       <Route path="catalog" element={<Catalog />} />
//       <Route path="catalog/:id" element={<ProductDetails />} />
//       <Route path="about" element={<AboutPage />} />
//       <Route path="contact" element={<ContactPage />} />
//     </Route>
//   )
// );
