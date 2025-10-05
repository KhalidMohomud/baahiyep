
import './App.css';
import { Outlet } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import { ClerkAuthProvider } from './contexts/ClerkAuthContext';
// import { DarkModeProvider } from './contexts/DarkModeContext';
import Header from './components/Header';

import WhatsAppChatbot from './components/WhatsAppChatbot';
import ScrollToTop from './components/ScrollToTop';

const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || 'your_clerk_publishable_key_here';

function App() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <ClerkAuthProvider>
        {/* <DarkModeProvider> */}
          <div className="flex flex-col min-h-screen transition-colors duration-300 bg-white dark:bg-dark-bg">
            <ScrollToTop />
            <Header />
            <main className="flex-1">
              <Outlet />
            </main>
            <WhatsAppChatbot />
          </div>
      
      </ClerkAuthProvider>
    </ClerkProvider>
  );
}

export default App;
