import { share, } from '../Utils/Common';

const Component = (props) => {
    const menus = [ 'Home', 'Intro', 'Work', 'Skills', 'Education' ];

    return (
        <nav className={ "bg-white fixed-top py-2 " + ( props.show ? "" : "hide" ) }>
            <div className="container">
                <div className="row text-center text-md-start">
                    <div className="col-12 col-md-6" style={{ lineHeight:"48px", }}> 
                        <div className="navbar-brand text-dark click" onClick={ _ => share(props.setInfo) }> 
                            <strong style={{ color:"rgba(110, 140, 255, 0.9)", fontSize:"23px" }}> HyunSoo </strong>
                            <small className="text-muted ps-3" style={{ fontSize:"13px" }}>장현수</small>
                        </div>
                    </div>
                    <div className="col-12 py-2">
                        <div className="scroll">
                        {
                            menus.map((_, idx) => {
                                return (
                                    <div key={idx} className={"btn-menu " + ( props.page === _ ? "active" : "" )}
                                        onClick={()=>{ 
                                            props.setSliding(true);
                                            props.setPage(_); 
                                            props.scrollToPage(_); 
                                            setTimeout(() => {
                                                props.setSliding(false);
                                            }, 2000);
                                        }}>
                                    { _ }
                                    </div>
                                );
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Component;
