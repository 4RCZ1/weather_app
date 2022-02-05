import React, {useEffect} from "react";

const ScrollHandler = () => {
    let ctrlPressed: boolean = false;
    let mouseInTheBox : boolean = false;

    const onMouseEnter = () => {
        mouseInTheBox = true;
        console.log("Mouse entered the box");
    };
    const onMouseLeave = () => {
        mouseInTheBox = false;
        console.log("Mouse left the box");
    };

    const onKeyDown = (e: any) => {
        if (e.key === "Control") {
            ctrlPressed = true;
        }
    };
    const onKeyUp = (e: any) => {
        if (e.key === "Control") {
            ctrlPressed = false;
        }
    };

    useEffect(() => {
        let timeoutIn: NodeJS.Timeout;
        let timeoutOut: NodeJS.Timeout;

        const handleScroll = () => {

            if (ctrlPressed || !mouseInTheBox) {
                return;
            }
            const element = document.getElementById("scrollHandler");
            if (!element) {
                return;
            }
            element.style.display = "flex";
            if (timeoutIn) {
                clearTimeout(timeoutIn);
            }
            timeoutIn = setTimeout(() => {
                element.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                element.style.color = "white";
                element.innerHTML = "Hold ctrl to zoom";
            }, 10);

            if (timeoutOut) {
                clearTimeout(timeoutOut);
            }
            timeoutOut = setTimeout(() => {
                element.style.backgroundColor = "";
                element.style.color = "";
                element.innerHTML = "";
                timeoutIn=setTimeout(() => {
                    element.style.display = "none";
                }, 1100);
            }, 800);
        };
        window.addEventListener("scroll", handleScroll);
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);
        const map = document.getElementById("map");
        if (map) {
            map.addEventListener("mouseenter", onMouseEnter);
            map.addEventListener("mouseleave", onMouseLeave);
        }
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("keydown", onKeyDown);
            window.removeEventListener("keyup", onKeyUp);
            if (map) {
                map.removeEventListener("mouseenter", onMouseEnter);
                map.removeEventListener("mouseleave", onMouseLeave);
            }
        };
    }, []);

    return <div id={'scrollHandler'}/>;
};

export default ScrollHandler;
