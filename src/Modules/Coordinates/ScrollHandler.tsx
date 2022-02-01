import React, {useEffect} from "react";

const ScrollHandler = () => {
  let mouseInTheBox : boolean = false;

  const onMouseEnter = () => {
    mouseInTheBox = true;
    console.log("Mouse entered the box");
  };
  const onMouseLeave = () => {
    mouseInTheBox = false;
    console.log("Mouse left the box");
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleScroll = (e) => {
      if (mouseInTheBox) {
        if (!e) e = window.event;
        const element = document.getElementById("scrollHandler");
        if (element) {
          
          element.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
          element.style.color = "white";
          element.innerHTML = "Hold shift to zoom";
          if (timeout) {
            clearTimeout(timeout);
          }
          timeout = setTimeout(()=>{
            element.style.backgroundColor = "";
            element.style.color = "";
            element.innerHTML = "";
          }, 1000);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mouseInTheBox]);

  return <div id={'scrollHandler'} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>;
};

export default ScrollHandler;
