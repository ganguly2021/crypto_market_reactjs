import React, { useEffect, useState } from "react";

const useWindowSize = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  // handle window resize
  const handleResize = () => {
    setHeight(Number(window.innerHeight));
    setWidth(Number(window.innerWidth));
  };

  // componentDidMount
  useEffect(() => {
    // add event listener
    window.addEventListener("resize", handleResize);

    // handle resize for first time
    handleResize();

    // cleanup on unmount
    return () => {
      window.removeEventListener("resize");
    };
  }, []);

  return { width, height };
};

export default useWindowSize;
