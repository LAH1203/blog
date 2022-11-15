import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Post from '@/pages/Post';

import { ModeContext } from '@/contexts';
import { useMode } from '@/hooks/useMode';

function App() {
  const { mode, toggleMode } = useMode();

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </Layout>
      </Router>
    </ModeContext.Provider>
  );
}

export default App;
