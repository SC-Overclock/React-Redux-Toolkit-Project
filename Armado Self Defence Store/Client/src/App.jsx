import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./Components/Layout/UserLayout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            {/* User Route */}
          </Route>
          <Route>{/* Admin Route */}</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
