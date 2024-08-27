import React, { useState, useEffect } from "react";
import { Up } from "./up/up";
import { Mup } from "./up/mup";
import { Down } from "./down/down";
import { Social } from "../social";

export function Presale() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Initial check
    setIsMobile(mediaQuery.matches);

    // Listener for screen size changes
    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addListener(handleResize);

    // Cleanup listener on component unmount
    return () => mediaQuery.removeListener(handleResize);
  }, []);

  return (
    <div className="container-fluid maindiv">
      {isMobile ? <Mup /> : <Up />}
      <Down />
      <Social />
    </div>
  );
}
