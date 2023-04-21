import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/landing";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
