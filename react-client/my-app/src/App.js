import Layout from './components/layout';
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Blogs from "./pages/Blog"
import Contact from "./pages/Contact"
import Register from "./pages/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </Layout>
  );
}

export default App;
