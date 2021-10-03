import React,  { useRef, useEffect} from "react"
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { Wrapper, Icon, Title, Line, Details } from "./section.styles"

gsap.registerPlugin(ScrollTrigger);

const Section = ({iconSrc, altText, title, children}) => {

    let sectionRef = useRef(null);
    
    useEffect(()=> {
        
        const iconRef = sectionRef.children[0];
        const titleRef = iconRef.nextSibling;
        const lineRef = titleRef.nextSibling;

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef,
                start: "top center",
                toggleActions: "play none none none",
            },
        })
        tl.from(iconRef, {
            autoAlpha: 0,
            delay: 0.2,
            y: 20,
        }, 's')
        tl.from(titleRef, {
            autoAlpha: 0,
            delay: 0.2,
            x: 20,
        }, 's')
        tl.from(lineRef, {toAlpha: 0,
            scaleY: 0,
            transformOrigin: "top",
            delay: 0.4,
        })
    })

    return(
        <>
        <Wrapper ref={el => { sectionRef = el}}>
            <Icon
            src={require(`../../images/${iconSrc}`).default}
            alt={altText}
            />
            <Title>{title}</Title>
            <div style={{display: "flex", width: "34px", alignItems: "center", justifyContent: "center"}}><Line /></div>
            <Details>{children}</Details>
        </Wrapper>
        </>
    )
}

export default Section