
const Component = (props) => {
    return (
        <div className={"fxd-full dim " + (props.popup ? "" : "hide")}  style={{zIndex : "10000", }} onClick={(e)=>{ e.stopPropagation(); props.setPopup(null); }}>
            <div className="abs-center">
                <div className="card">
                    <div className="card-body py-5 px-4">
                        {props.popup}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Component;
