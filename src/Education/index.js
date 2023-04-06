import { school, } from './Data';

const Card = (props) => {
    return (
        <div className="col-12 p-1">
            <div className="card">
                <div className="card-body"> 
                    <div className="card-title">
                    <strong> {   props.card.name  } </strong>
                    <small className="text-muted">{ props.card.period }</small>
                    </div>
                    <div className="card-text">
                        <small className="text-muted"> {   props.card.course  } </small>
                    </div>
                    <div className="card-title">
                        <small className="text-muted"> {   props.card.major }{ props.card.research ? `, ${props.card.research}` : null } </small> 
                    </div>
                </div>
            </div>
        </div>
    );
};

const Education = (props) => {
    return (
        <div className="wrapper" style={{ height : "100vh", }}>
            <div className="abs-center" style={{ width : "100%", }}>
                <div className="container" style={{ width : "100%", }}>
                    <div className="row">
                        <div className="col-12 px-1 py-4">
                            <div className="display-4">
                                Schools
                            </div>
                        </div>
                    {
                        school.map((_, idx) => ( <Card key={idx} card={_}/> ))
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
