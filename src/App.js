import { Route, Routes } from "react-router-dom";
import React from "react";
// import Features from "./pages/Features";
import Home from "./pages/Home";
// import Market from "./pages/Market";
// import Spot from "./pages/Spot";
import Wallet from "./pages/Wallet";
import Menu from "./components/Menu";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Signup from "./pages/Signup";
import Welcome from "./pages/Welcome";
import ForgotPassword from "./pages/ForgotPassword";
import Otp from "./components/Otp";
// import MarketSpot from "./pages/MarketSpot";
import Cookies from "./components/Cookies";
// import Error from "./components/Error";
import dccLogo from "./images/dcc logo.svg";
import { useState, useEffect } from "react";
import { CookiesProvider } from "react-cookie";
import { AuthContextProvider } from "./context/AuthContext";
import Hot from "./pages/Hot";
import Favourite from "./pages/Favourite";
import Gainers from "./pages/Gainers";
// import MarketSpot from "./pages/MarketSpot";
import SignupVerificationPage from "./pages/SignupVerificationPage";
import Losers from "./pages/Losers";
import Volume from "./pages/Volume";
import TopNav from "./components/TopNav";
import NavBar from "./components/NavBar";
import Assets from "./Wallet/overview/Assets";
import TotalAssets from "./Wallet/totalAssets/TotalAssets";
import Spot from "./Wallet/spot/Spot";
import Futures from "./Wallet/futures/Futures";



function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <CookiesProvider>
      <AuthContextProvider>
        <div className="App">
          {loading && (
            <div id="preloader">
              <img src={dccLogo} alt="Profile logo" />
              <div id="loader"></div>
            </div>
          )}
          <NavBar />
          <TopNav />
          <Cookies />
          <Routes>
            <Route path="/" element={<Welcome />}></Route>
            {/* routes with the bottom navigation goes in here */}
            <Route path="home" element={<Home />}>
              <Route index element={<Hot />} />
              <Route path="favourite" element={<Favourite />} />
              <Route path="hot" element={<Hot />} />
              <Route path="gainers" element={<Gainers />} />
              <Route path="losers" element={<Losers />} />
              <Route path="volume" element={<Volume />} />
            </Route>
            {/* routes with the bottom navigation goes in here */}
            <Route path="Otp" element={<Otp />}></Route>

            {/* <Route path="features" element={<Features />}></Route> */}
            <Route path="wallet" element={<Wallet />}></Route>
            <Route path="menu" element={<Menu />}></Route>
            <Route path="signup" element={<Signup />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="resetPassword" element={<ResetPassword />}></Route>

            <Route path="forgotPassword" element={<ForgotPassword />}></Route>
            {/* <Route path="features" element={<Features />}></Route> */}
            <Route path="wallet" element={<Wallet />}>

            </Route>
            {/* <Route path="spot" element={<Spot />} /> */}

            <Route path="verify" element={<SignupVerificationPage />} />

            <Route path='wallett' element={<Assets />}>
                <Route path='over-view' element={<TotalAssets />} />
                <Route path='spot' element={<Spot />} />
                <Route path='futures' element={<Futures />} />
            </Route>

         
          </Routes>
        </div>
      </AuthContextProvider>
    </CookiesProvider>
  );
}

export default App;
