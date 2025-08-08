import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import JobListPage from './pages/JobList/JobListPage';
import { Navbar, Hero, Categories, Footer, Speaker } from './components';
import Login from './pages/auth/Login';

const Home = () => (
  <>
    <Hero />
    <Categories />
    <Speaker />
  </>
);

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return isLoginPage ? (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobListPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
