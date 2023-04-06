import { share, } from '../Utils/Common';

const Home = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div style={{ height : "100vh",}}>
                        <div className="abs-center text-center">
                            <div className="display-5" onClick={ _ => share(props.setInfo)  }> Hey, I'm HyunSoo! </div>
                            <div className="pt-4">
                                <small style={{ color : "rgba(100, 150, 200, 0.9)", }}> 
                                    if you want to know about me, scroll down :) 
                                </small>
                            </div>
                        </div>
                        <div className="pt-3 go-down">
                            <i className="far fa-hand-point-down fa-2x"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
