import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import BlogsPage from './pages/BlogsPage';
import BlogPostPage from './pages/BlogPostPage';
import NotFoundPage from './pages/NotFoundPage';

// Log that imports are successful
console.log('BlogsPage imported:', !!BlogsPage);
console.log('BlogPostPage imported:', !!BlogPostPage);

function App() {
  // Automatically detect the basename from the current URL
  const getBasename = () => {
    const { pathname } = window.location;
    const match = pathname.match(/^\/[^/]+/);
    return match ? match[0] : '';
  };
  
  const basename = getBasename();
  
  return (
    <Router basename={basename} key="main-router">
      <Layout>
        {/* Double-check that these routes are defined correctly */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:blogId" element={<BlogPostPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
