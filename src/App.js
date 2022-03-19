import { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import Switcher from "./components/pages-components/switcher/Switcher";
import LandingPage from "./components/pages/landing-page/LandingPage";
import Burger from "./components/styled-components/StyledBurger";
import Menu from "./components/styled-components/StyledMenu";
import Header from "./components/pages-components/header/Header";
import Footer from "./components/pages-components/footer/Footer";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./components/pages/register/Register";
import Login from "./components/pages/login/Login";

function App() {
  const [theme, setTheme] = useState({ dark: true });
  const [open, setOpen] = useState(false);
  const node = useRef();
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div ref={node} className="burger-container">
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
      <Switcher enabled={theme} setEnabled={setTheme} />
    </ThemeProvider>
  );
}

export default App;
