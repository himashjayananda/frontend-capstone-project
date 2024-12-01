import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { Home, Booking } from "./pages/";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
