import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Signup from "./landing_page/signup/Signup";
import Login from "./landing_page/login/Login";
import NotFound from "./landing_page/NotFound";
import ProductsPage from "./landing_page/products/ProductsPage";
import ProtectedRoute from "./auth/ProtectedRoute";
import DashboardIndex from "./dashboard/src/index";
import Summary from "./dashboard/src/components/Summary";
import Orders from "./dashboard/src/components/Orders";
import Holdings from "./dashboard/src/components/Holdings";
import Positions from "./dashboard/src/components/Positions";
import Funds from "./dashboard/src/components/Funds";
import Apps from "./dashboard/src/components/Apps";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/dashboard/:id" element={<ProtectedRoute><DashboardIndex /></ProtectedRoute>}>
          <Route index element={<Summary />} />
          <Route path="orders" element={<Orders />} />
          <Route path="holdings" element={<Holdings />} />
          <Route path="positions" element={<Positions />} />
          <Route path="funds" element={<Funds />} />
          <Route path="apps" element={<Apps />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
