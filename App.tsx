
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import OurImpact from './pages/OurImpact';
import AboutUs from './pages/AboutUs';
import { AppPages } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<AppPages>(AppPages.HOME);

  const renderPage = () => {
    switch (currentPage) {
      case AppPages.HOME:
        return <Home />;
      case AppPages.IMPACT:
        return <OurImpact />;
      case AppPages.ABOUT:
        return <AboutUs />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main className="flex-grow">
        <div className="animate-in fade-in duration-700">
          {renderPage()}
        </div>
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;
