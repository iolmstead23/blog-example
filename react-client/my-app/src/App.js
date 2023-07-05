import Layout from './components/layout';
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Blogs from "./pages/Blog"
import Contact from "./pages/Contact"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <Layout>
        <div className="App">
          <header className="App-header">

          </header>
          <body>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </BrowserRouter>
          </body>
        </div>
      </Layout>
  );
}

export default App;
