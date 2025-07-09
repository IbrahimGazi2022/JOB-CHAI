import React from 'react';
import { Routes, Route } from 'react-router-dom';
import JobListPage from './pages/JobList/JobListPage';
import { Navbar, Hero, Categories, Footer, Speaker } from './components';

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
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jobs' element={<JobListPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
