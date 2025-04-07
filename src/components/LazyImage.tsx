
import { useState, useEffect } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
}

const LazyImage = ({ 
  src, 
  alt, 
  className = "", 
  width = 800, // Default width if not specified
  height, 
  quality = 75 // Lower default quality for better compression
}: LazyImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+PHJlY3QgZmlsbD0iI2YzZjRmNiIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+");

  useEffect(() => {
    // Create new image object to preload
    const img = new Image();
    
    // Optimize images based on source
    let optimizedSrc = src;
    
    // For Unsplash images, use their built-in optimization API
    if (src.includes('unsplash.com')) {
      // Add optimization parameters
      const separator = src.includes('?') ? '&' : '?';
      optimizedSrc = `${src}${separator}w=${width}&q=${quality}&auto=format&fit=crop`;
    }
    // For local images (lovable-uploads), add cache busting and size hints
    else if (src.includes('lovable-uploads')) {
      // We can't modify local images directly, but we can ensure proper dimension attributes
      // which helps the browser allocate space correctly before loading
      optimizedSrc = src;
    }
    // For other external images, try to use a compressed version if available
    else if (!src.includes('data:image')) {
      optimizedSrc = src;
    }
    
    // Set up image loading handlers
    img.onload = () => {
      setImageSrc(optimizedSrc);
      setIsLoading(false);
    };
    
    img.onerror = () => {
      console.warn(`Failed to load optimized image: ${optimizedSrc}`);
      // If optimization fails, fall back to original source
      if (optimizedSrc !== src) {
        img.src = src;
        img.onload = () => {
          setImageSrc(src);
          setIsLoading(false);
        };
      } else {
        setIsLoading(false);
      }
    };

    // Start loading the image
    img.src = optimizedSrc;
    
    // Optional: Prefetch next images if they're in an array/list context
    return () => {
      // Clean up by removing event handlers when component unmounts
      img.onload = null;
      img.onerror = null;
    };
  }, [src, width, height, quality]);

  return (
    <div className="relative overflow-hidden">
      <img
        src={imageSrc}
        alt={alt}
        className={`${className} ${isLoading ? "blur-sm animate-pulse" : "blur-0"} transition-all duration-300`}
        width={width}
        height={height}
        loading="lazy"
        decoding="async" // Use async decoding for better performance
      />
    </div>
  );
};

export default LazyImage;
