import React,{useEffect, useState} from 'react';

const scrollToMap = () => {
    // @ts-ignore
    document.getElementById('app').scrollIntoView({behavior: 'smooth'});
}

export const scrollToDetails = () => {
    const target=document.getElementById('weather');
    if(target){
        target.scrollIntoView({behavior: 'smooth'});
    }else{
        setTimeout(() => {
            scrollToDetails();
        }, 100);
    }
}

const ScrollButton = () => {
    const [text, setText] = useState("Scroll to details");

    const scrollFunction = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setText("Go to map");
        } else {
            setText("Go to details");
        }
    }

    useEffect(() => {
        window.onscroll = ()=>scrollFunction();
    },[])

    return(
        <button id={'scrollButton'} onClick={text==="Go to map" ? scrollToMap : scrollToDetails}>
            {text}
        </button>
    )
}
export default ScrollButton;
