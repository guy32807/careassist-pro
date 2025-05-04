import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import CustomThemeProvider from './components/theme/CustomThemeProvider';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
// Import the blog components
import BlogsPage from './components/blogs/BlogsPage';
import Blog1 from './components/blogs/Blog1';
import Blog2 from './components/blogs/Blog2';
import Blog3 from './components/blogs/Blog3';
import Blog4 from './components/blogs/Blog4';
import Blog5 from './components/blogs/Blog5';

// Try to import i18n
try {
  require('./i18n');
} catch (e) {
  console.warn('i18n initialization failed', e);
}

const helmetContext = {};

const App: React.FC = () => {
  return (
    <HelmetProvider context={helmetContext}>
      <CustomThemeProvider>
        <GlobalStyle />
        <Router>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="/about" element={<AboutPage />} />
              
              {/* Blog routes */}
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/blogs/bathroom-safety-guide" element={<Blog1 />} />
              <Route path="/blogs/elderly-bathroom-safety" element={<Blog2 />} />
              <Route path="/blogs/walk-in-bathtub-benefits" element={<Blog3 />} />
              <Route path="/blogs/mobility-aids-comparison" element={<Blog4 />} />
              <Route path="/blogs/medical-bathroom-design" element={<Blog5 />} />
              
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </CustomThemeProvider>
    </HelmetProvider>
  );
};

export default App;
