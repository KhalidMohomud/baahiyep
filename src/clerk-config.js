// Clerk Configuration
// This file contains all Clerk-related configurations and appearance settings

export const clerkConfig = {
  // Appearance settings for all Clerk components
  appearance: {
    baseTheme: undefined, // Use system theme
    elements: {
      // Global button styles
      formButtonPrimary: 'bg-brandOrange hover:bg-brandNavy text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300',
      formButtonSecondary: 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition-colors duration-300',
      
      // Card and container styles
      card: 'bg-white rounded-2xl shadow-lg border-0',
      pageScrollBox: 'p-0',
      
      // Form field styles
      formFieldInput: 'border border-gray-300 rounded-lg focus:ring-2 focus:ring-brandOrange focus:border-brandOrange transition-all duration-300',
      formFieldLabel: 'text-gray-700 font-medium',
      formFieldAction: 'text-brandOrange hover:text-brandNavy transition-colors duration-300',
      
      // Header styles
      headerTitle: 'text-2xl font-bold text-brandNavy',
      headerSubtitle: 'text-gray-600',
      
      // Social button styles
      socialButtonsBlockButton: 'border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300',
      
      // Link styles
      footerActionLink: 'text-brandOrange hover:text-brandNavy transition-colors duration-300',
      
      // Divider styles
      dividerLine: 'bg-gray-200',
      dividerText: 'text-gray-500',
      
      // User button styles
      userButtonAvatarBox: 'w-10 h-10',
      userButtonPopoverCard: 'shadow-lg border border-gray-200',
      userButtonPopoverActionButton: 'hover:bg-gray-100 transition-colors duration-200',
      
      // Verification code input
      verificationCodeInput: 'border border-gray-300 rounded-lg focus:ring-2 focus:ring-brandOrange focus:border-brandOrange transition-all duration-300 text-center text-lg tracking-widest'
    },
    variables: {
      colorPrimary: '#f97316', // brandOrange
      colorPrimaryHover: '#1e3a8a', // brandNavy
      colorText: '#1f2937', // gray-800
      colorTextSecondary: '#6b7280', // gray-500
      colorBackground: '#ffffff',
      colorInputBackground: '#ffffff',
      colorInputText: '#1f2937',
      borderRadius: '0.5rem', // rounded-lg
      fontFamily: 'inherit'
    }
  },
  
  // Localization
  localization: {
    locale: 'en-US',
    // You can add more locales here
    // locale: 'ar-SA', // Arabic
    // locale: 'fr-FR', // French
  },
  
  // Sign-in and sign-up settings
  signIn: {
    routing: 'path',
    path: '/SingIn',
    signUpUrl: '/SingUp',
    redirectUrl: '/'
  },
  
  signUp: {
    routing: 'path',
    path: '/SingUp',
    signInUrl: '/SingIn',
    redirectUrl: '/verify-email', // Redirect to verification page after signup
    afterSignUpUrl: '/verify-email'
  },
  
  // User profile settings
  userProfile: {
    routing: 'path',
    path: '/profile',
    signInUrl: '/SingIn'
  },
  
  // User button settings
  userButton: {
    afterSignOutUrl: '/',
    userProfileUrl: '/profile'
  },
  
  // Email verification settings
  emailVerification: {
    redirectUrl: '/',
    afterVerificationUrl: '/'
  }
};

// Helper function to get appearance for specific components
export const getComponentAppearance = (component) => {
  const baseAppearance = clerkConfig.appearance;
  
  switch (component) {
    case 'signIn':
      return {
        ...baseAppearance,
        elements: {
          ...baseAppearance.elements,
          headerTitle: 'text-2xl font-bold text-brandNavy',
          headerSubtitle: 'text-gray-600'
        }
      };
      
    case 'signUp':
      return {
        ...baseAppearance,
        elements: {
          ...baseAppearance.elements,
          headerTitle: 'text-2xl font-bold text-brandNavy',
          headerSubtitle: 'text-gray-600'
        }
      };
      
    case 'userProfile':
      return {
        ...baseAppearance,
        elements: {
          ...baseAppearance.elements,
          card: 'bg-transparent shadow-none border-0 p-0',
          pageScrollBox: 'p-0',
          navbar: 'hidden',
          pageContent: 'p-0',
          headerTitle: 'text-lg font-semibold text-brandNavy',
          headerSubtitle: 'text-gray-600'
        }
      };
      
    case 'userButton':
      return {
        ...baseAppearance,
        elements: {
          ...baseAppearance.elements
        }
      };
      
    default:
      return baseAppearance;
  }
};
