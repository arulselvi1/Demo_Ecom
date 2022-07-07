import React from "react";
import SnackbarProvider from "react-simple-snackbar";
import Button from "../../commonUI/button/Button";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const AppLayout = ({ children }) => {
  return (
    <SnackbarProvider>
      <header>
        <Header />
        
      </header>
      <main id="rrs-main" role="main" aria-live="polite">
        {/* <ErrorBoundary>
        <GlobalBanner banners={cms?.pageModel?.headerBanners} /> */}

        {children}

        {/* <GlobalBanner banners={cms?.pageModel?.footerBanners} />
        </ErrorBoundary> */}
     
      </main>
      
      <footer>
        <Footer />
      </footer>
    </SnackbarProvider>
  );
};

export default AppLayout;
