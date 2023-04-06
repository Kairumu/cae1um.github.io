import ReactMarkdown from 'react-markdown'
import { research, } from '../Utils/Data';

const Research = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <ReactMarkdown children={research}/>
                </div>
            </div>
        </div>
    );
}

export default Research;
