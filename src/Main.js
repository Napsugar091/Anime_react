import {useState, useEffect} from "react";

function Main() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('http://127.0.0.1:9000/json').then(res => res.json()).then(adat => setData(adat))
    }, [])
    return(
        data.map((adata,index)=>(
            <div className="card m-3" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{adata.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{adata.subtitle}</h6>
                    <p className="card-text" dangerouslySetInnerHTML={{__html: adata.description}}/>
                </div>
            </div>))
    )
}

export default Main;