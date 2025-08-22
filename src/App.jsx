import React from 'react';
import About from './page/About';
import './App.css';
import { Outlet } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import { ClerkAuthProvider } from './contexts/ClerkAuthContext';

// You'll need to get this from your Clerk dashboard
// In Vite, use import.meta.env instead of process.env
const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || 'your_clerk_publishable_key_here';

function App() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <ClerkAuthProvider>
        <div className="">
           {/* <About/> */}
              <Outlet />
            
        </div>
      </ClerkAuthProvider>
    </ClerkProvider>
  );
}

export default App;
