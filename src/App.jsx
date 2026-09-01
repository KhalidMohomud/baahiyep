
import './App.css';
import { Outlet } from 'react-router-dom';
// import { DarkModeProvider } from './contexts/DarkModeContext';
import Header from './components/Header';

import WhatsAppChatbot from './components/WhatsAppChatbot';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300 bg-white dark:bg-dark-bg">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <WhatsAppChatbot />
    </div>
  );
}

export default App;
