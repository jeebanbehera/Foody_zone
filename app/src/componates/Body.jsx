import "./Body.css"



export default function Body({ data:data , DATA}){
    

    console.log({data})  

    return(
        <div className="body" >
            <div className="body_data" >
                {data && data.length >0 ?(
                        data.map((data)=>(
                            <div className="body_card" key={data.name}>
                                <div className="img">
                                    <img src={DATA + data.image} alt="" />
                                </div>
                                <div className="text">
                                    <h3>{data.name}</h3>
                                    <p>{data.text}</p>
                                    <button>${data.price}.00</button>
                                </div>
                                {/*  */}
                            
                                
                            </div>
                        ))
                    ):(
                        <h1>nothing found</h1>
                    )}
            </div>
        </div>
    )
}