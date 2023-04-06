import { useState, } from 'react';

import Embed from '../Common/Embed';

import { profession, web, data, system, security, } from './Data';

const Card = (props) => {

    /*
    const search = async (query) => {
        const docs = await searchWeb(props.name, 'accuracy', 1, 20); 
        console.log(docs);
    } // Search quality is not good...
    */

    return (
        <div className="p-1 inline-block" onClick={ () => props.setEmbed ? props.setEmbed(`https://en.wikipedia.org/wiki/${props.name.split(" ").join('_')}`) : null }>
            <div className={`btn btn-${props.color} px-3`}>
            {   props.name  }
            </div>
        </div>
    );
}

const Skills = (props) => {

    const [ embed, setEmbed ] = useState(null);

    return (
        <div className="container">
            <Embed embed={embed} setEmbed={setEmbed}/>
            <div className="row">
                <div className="col-12 px-1 wrapper" style={{ height : "100vh",}}>
                    <div className="abs-center" style={{ width : "100%", }}>
                        <div className="px-1 py-4">
                            <div className="display-4">
                                Skills
                            </div>
                        </div>
                        <div className="py-1">
                            <Card name="Profession" color="success" />
                            { profession.map((_, idx) => <Card key={idx} name={_} color="outline-success"  setEmbed={setEmbed}/>) }
                        </div>
                        <div className="py-1">
                            <Card name="Web" color="primary" />
                            { web.map((_, idx) => <Card key={idx} name={_} color="outline-primary" setEmbed={setEmbed}/>) }
                        </div>
                        <div className="py-1">
                            <Card name="Data" color="secondary" />
                            { data.map((_, idx) => <Card key={idx} name={_} color="outline-secondary" setEmbed={setEmbed}/>) }
                        </div>
                        <div className="py-1">
                            <Card name="System" color="danger" />
                            { system.map((_, idx) => <Card key={idx} name={_} color="outline-danger" setEmbed={setEmbed}/>) }
                        </div>
                        <div className="py-1">
                            <Card name="Security" color="dark" />
                            { security.map((_, idx) => <Card key={idx} name={_} color="outline-dark" setEmbed={setEmbed}/>) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
