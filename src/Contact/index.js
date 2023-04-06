const Contact = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="wrapper" style={{ height : "100vh", }}>
                        <div className="abs-center">
                            <div className="inline-block mx-3 click" onClick={()=>{ window.open("https://github.com/zenith11311"); }}>
                                <i className="fab fa-github fa-3x"/>
                            </div>
                            <div className="inline-block mx-3 click" onClick={()=>{ window.open("https://open.kakao.com/o/s9RYXz4c"); }}>
                                <i className="fas fa-comment-dots fa-3x"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
