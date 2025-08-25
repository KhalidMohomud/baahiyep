import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import { ClerkAuthProvider } from './contexts/ClerkAuthContext';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppChatbot from './components/WhatsAppChatbot';

const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || 'your_clerk_publishable_key_here';

function App() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <ClerkAuthProvider>
        <div className="min-h-screen flex flex-col">
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
