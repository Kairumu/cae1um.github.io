import { useState, useEffect, useCallback, useRef, } from 'react';

import Header       from "./Common/Header";
import Info         from "./Common/Info";
import Home         from "./Home";
import Intro        from "./Intro";
import Work         from "./Work";
import Skills       from "./Skills";
import Education    from "./Education";
//import Research     from "./Research";
//import Contact      from "./Contact";

let cursor  = 0;
let sliding = true;

const App = (props) => {

    const params = new URLSearchParams(window.location.search);

    const [ menu,   setMenu   ] = useState(false);
    const [ page,   setPage   ] = useState(params.has('page') ? params.get('page') : "Home");
    const [ info,   setInfo   ] = useState(null);

    const homeRef       = useRef(null);
    const introRef      = useRef(null);
    const workRef       = useRef(null);
    const skillRef      = useRef(null);
    const eduRef        = useRef(null);

    const scrollToPage = useCallback((page) => {
        if (page === "Home")        homeRef.current.scrollIntoView();
        if (page === "Intro")       introRef.current.scrollIntoView();
        if (page === "Work")        workRef.current.scrollIntoView();
        if (page === "Skills")      skillRef.current.scrollIntoView();
        if (page === "Education")   eduRef.current.scrollIntoView();
        const url = new URL(window.location);
        url.searchParams.set("page", page);
        window.history.pushState({}, null, `${url.origin}${url.search}`);
        setTimeout(() => {
            sliding = false;
        }, 2000);
    }, [homeRef, introRef, workRef, skillRef, eduRef, ]);

    useEffect(()=>{
        scrollToPage(page);
    }, [page, scrollToPage])

    useEffect(()=>{
        const handleScroll = _ => {
            cursor = window.pageYOffset;
            setMenu(cursor > homeRef.current.offsetTop + homeRef.current.offsetHeight - 142);

            if (sliding) return;

            const page = cursor >= eduRef.current.offsetTop ? "Education" :
                cursor >= skillRef.current.offsetTop ? "Skills" :
                cursor >= workRef.current.offsetTop ? "Work" :
                cursor >= introRef.current.offsetTop ? "Intro" :
                "Home";
            setPage(page);
            const url = new URL(window.location);
            url.searchParams.set("page", page);
            window.history.pushState({}, null, `${url.origin}${url.pathname}${url.search}`);
        }
        window.addEventListener('scroll', handleScroll)
        return _ => window.removeEventListener('scroll', handleScroll) ;
    }, [])

    return (
        <div>
            <Info info={info}/>
            <Header page={page} setPage={setPage} sliding={sliding} setSliding={ _ => sliding = _ } scrollToPage={scrollToPage} setInfo={setInfo} show={menu}/>
            <div ref={homeRef} style={{ paddingTop : "142px"}}> 
                <Home setInfo={setInfo}/> 
            </div>
            <div ref={introRef} style={{ paddingTop : "142px"}}>
                <Intro setInfo={setInfo}/>
            </div>
            <div ref={workRef} style={{ paddingTop : "142px"}}> 
                <Work setInfo={setInfo}/> 
            </div>
            <div ref={skillRef} style={{ paddingTop : "142px"}}> 
                <Skills setInfo={setInfo}/> 
            </div>
            <div ref={eduRef} style={{ paddingTop : "142px"}}> 
                <Education setInfo={setInfo}/> 
            </div>
        </div>
    );
    // <div ref={researchRef}  style={{ paddingTop : "142px"}}> <Research/> </div>
}

export default App;
