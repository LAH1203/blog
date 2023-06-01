import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '@/components/Layout';
import About from '@/pages/About';
import Home from '@/pages/Home';
import Post from '@/pages/Post';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
