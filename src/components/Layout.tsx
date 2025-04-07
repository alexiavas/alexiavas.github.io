
import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Force re-render on route change
  useEffect(() => {
    // Implement intersection observer for smarter image loading
    const setupIntersectionObserver = () => {
      if (!('IntersectionObserver' in window)) {
        // Fallback for browsers that don't support IntersectionObserver
        return;
      }
      
      // Find all lazy-loaded images
      const lazyImages = document.querySelectorAll('img[loading="lazy"]');
      
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            
            // If data-src exists, set it as the src (for true lazy loading)
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            
            // Stop observing once loaded
            imageObserver.unobserve(img);
          }
        });
      }, {
        rootMargin: '200px 0px', // Start loading when image is 200px from viewport
        threshold: 0.01 // Trigger when 1% of the image is visible
      });
      
      // Observe each lazy image
      lazyImages.forEach(image => imageObserver.observe(image));
      
      return () => {
        imageObserver.disconnect();
      };
    };
    
    // Run setup after a short delay to let the page render
    const timer = setTimeout(setupIntersectionObserver, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        {/* Cache control */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        
        {/* Resource hints for performance */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        
        {/* Add resource hints for common image CDNs */}
        <link rel="preconnect" href="https://lovableproject.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://lovableproject.com" />
        
        {/* Preload critical assets - profile image */}
        <link 
          rel="preload" 
          href="/lovable-uploads/b16a76f5-d4d2-4333-9a08-5b24553c3e6f.png" 
          as="image" 
          fetchPriority="high"
        />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
