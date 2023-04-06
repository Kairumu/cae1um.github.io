import { useState, useEffect, } from 'react';

const Component = (props) => {

    const [ show, setShow ] = useState(false);

    useEffect(() => {
        setShow(true);
        setTimeout( ()=> {
            setShow(false);
        }, 3000);
    }, [props.info]);

    return props.info ? 
        (  
            <div className={ "info-box " + ( show ? "show" : "" ) } style={{ zIndex:"10000000", }}>
                <i className={ "fas fa-circle text-" + ( props.info.success ? "success" : "danger" ) } /> 
                <small> { props.info.message } </small>
            </div>
        ) : null;
}

export default Component;
