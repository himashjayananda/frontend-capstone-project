import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { Home, Booking, PageNotFound } from "./pages/";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
