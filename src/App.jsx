import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Offers from "../components/pages/Offers";
import Help from "../components/pages/Help";
import Cart from "../components/pages/Cart";
import Signup from "../components/pages/Signup";
import RestaurantMenu from "../components/pages/RestaurantMenu";
import Body from "../components/Body";
import{Provider} from "react-redux";
import appStore from "./utils/appStore";
function App() {
  return (
    <Provider store={appStore} >
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/help" element={<Help />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/restaurant/:id" element={<RestaurantMenu />} />
          <Route
            path="*"
            element={
              <div className="text-center mt-20 text-xl text-red-500">
                404 - Page not found
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
    </Provider>
  );
}

export default App;
