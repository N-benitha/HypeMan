import { useEffect } from "react";

function LoadIcons() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/2b15f7716d.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
    
}

export default LoadIcons;