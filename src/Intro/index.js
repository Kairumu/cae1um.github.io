const Intro = (props) => {
    return (
        <div className="wrapper" style={{ height : "100vh",  }} > 
            <div className="container abs-center">
                <div className="row py-4 text-center">
                    <div className="col-12 blockquote">
                        Software Developer @NAVER <br/>
                        <small style={{ color : "200, 200, 200, 0.7)",}}> 2018.08 ~ </small>
                    </div>
                </div>
                <div className="row py-4 text-center" style={{ color :"rgba(100, 100, 250, 0.8)", }}>
                    <div className="col-12">
                        Previously
                    </div>
                    <div className="col-12">
                        Junior Researcher @TmaxData (2016.03 ~ 2018.08)
                    </div>
                    <div className="col-12">
                        BS, MS @AjouUniv (2010.03 ~ 2016.03 )
                    </div>
                </div>
                <div className="row py-4 text-center" style={{ color :"rgba(150, 100, 250, 0.8)", }}>
                    <div className="col-12">
                        <i> 💻 Clous, ElasticSearch, Spark, Firebase, React.js, ... </i> <br/>
                        <i> 👀 Python, Javascript, Bash, ...</i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;
