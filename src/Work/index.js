import { useState, useCallback, } from 'react';
import PopUp from '../Common/PopUp';
import Embed from '../Common/Embed';

import { sides, naver, tmax, } from './Data';


const ProjectCard = (props) => {

    const check_blocked = useCallback((_link) => {
        return (_link === 'no links' || _link.includes('asca0x') || _link.includes('csmsk'));
    }, []);

    return (
        <div className="col-6 col- p-1">
            <div className="card wrapper click" 
                onClick={()=>{ 
                    if (check_blocked(props.card.link)) 
                        return props.setPopup(props.card.desc);
                    props.setEmbed(props.card.link); 
                }}>
                <img className="card-img" src={props.card.img} alt={props.card.name } style={{ height : "400px", objectFit: "cover", }}/>
                <div className="abs-full dim">
                    <div className="abs-bottom text-end text-light px-3 pb-2">
                        <div className="h5"> { props.card.name } </div>
                        <div> <small> { props.card.role } </small></div>
                        <div> <small> { props.card.tech } </small></div>
                    </div>
                </div>
            </div>
        </div>
    )
};


const Work = (props) => {

    const [ embed, setEmbed ] = useState(null);
    const [ popup, setPopup_ ] = useState(null);

    const setPopup = (_) => {
        setPopup_(_);
        if (!_) return;
        props.setInfo({
            success : false,
            message : "Not accessable through browser...",
        });
    }

    return (
        <div className="container">
            <Embed embed={embed} setEmbed={setEmbed}/>
            <PopUp popup={popup} setPopup={setPopup}/>
            <div className="row">
                <div className="col-12 pt-5">
                    <div className="display-5 py-4">
                        Naver 
                    </div>
                    <div className="row py-3">
                    { naver.map( (_, idx) => <ProjectCard key={idx} card={_} setPopup={setPopup} setEmbed={setEmbed}/> )}
                    </div>
                </div>
                <div className="col-12 pt-5">
                    <div className="display-5 py-4">
                        TmaxData
                    </div>
                    <div className="row py-3">
                    { tmax.map( (_, idx) => <ProjectCard key={idx} card={_} setPopup={setPopup} setEmbed={setEmbed}/> )}
                    </div>
                </div>
                <div className="col-12 pt-5">
                    <div className="display-5 py-4">
                        Side
                    </div>
                    <div className="row py-3">
                    { sides.map( (_, idx) => <ProjectCard key={idx} card={_} setPopup={setPopup} setEmbed={setEmbed}/> )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
