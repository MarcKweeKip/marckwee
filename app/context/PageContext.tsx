// context/PageContext.tsx
import { createContext, useState, useContext, ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

// Define the types for the context value
interface PageContextType {
  isOverlayVisible: boolean;
  showOverlay: () => void;
  hideOverlay: () => void;
  isMobileMenuVisible: boolean;
  showMobileMenu: () => void;
  hideMobileMenu: () => void;
}

// Create the context with a default value of undefined
const PageContext = createContext<PageContextType | undefined>(undefined);

export const PageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOverlayVisible, setOverlayVisible] = useState<boolean>(false);
  const [isMobileMenuVisible, setMobileMenuVisible] = useState<boolean>(false);

  const showOverlay = () => setOverlayVisible(true);
  const hideOverlay = () => setOverlayVisible(false);

  const showMobileMenu = () => setMobileMenuVisible(true);
  const hideMobileMenu = () => setMobileMenuVisible(false);

  const contextValue: PageContextType = {
    isOverlayVisible,
    showOverlay,
    hideOverlay,
    isMobileMenuVisible,
    showMobileMenu,
    hideMobileMenu,
  };

  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <PageContext.Provider value={contextValue}>
        {children}
      </PageContext.Provider>
    </ThemeProvider>
  );
};

// Custom hook to use the PageContext
export const usePage = (): PageContextType => {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error('usePage must be used within a PageProvider');
  }
  return context;
};
