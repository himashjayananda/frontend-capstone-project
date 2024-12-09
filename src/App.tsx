import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { Home, Booking } from "./pages/";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
