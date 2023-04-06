import { useState, useEffect, } from 'react';

const Component = (props) => {
    const [ loading, setLoading ] = useState(false);

    useEffect( () => {
        setLoading(true);
        setTimeout( ()=> {
            setLoading(false);
        }, 3000);
    }, [props.embed]);

    return (
        <div className={"fxd-full dim py-4 " + (props.embed ? "" : "hide")}  style={{ zIndex : "10000", }}>
            <div className="container wrapper bg-white" style={{ height:"100%" }} >
                <div className="row py-4" style={{ borderBottom : "2px solid rgba(100, 100, 200, 0.3)", }}>
                    <div className="col-2 col-lg-1 text-center click" onClick={(e)=>{  e.stopPropagation(); props.setEmbed(null); setLoading(true); }}>
                        <button className="btn-close"/>
                    </div>
                    <div className="col-10 col-lg-11">
                    { props.embed }
                    </div>
                </div>
                <div className="row py-3" style={{ height:"100%", }}>
                    <div className="col-12 wrapper" style={{ height : "calc(100% - 70px)", overflowY : "scroll", }}>
                        <embed src={props.embed} type="text/html" style={{ height :"100%", width : "100%", }}/>
                    </div>
                </div>
                <div className={ `abs-full bg-white ${ loading ? "" : "hide" }` }>
                    <div className="abs-center">
                        Loading...
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Component;
