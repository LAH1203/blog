import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Post from '@/pages/Post';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </Layout>
      </Router>
    </RecoilRoot>
  );
}

export default App;
