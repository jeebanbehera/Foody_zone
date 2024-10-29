import "./Top.css"


export default function Top({searchBtn , typeBtn}){


let filterBtn=[
    {
        name:"All",
        type:"all"
    },
    {
        name:"Breakfast",
        type:"breakfast"
    },
    {
        name:"Lunch",
        type:"lunch",
    },
    {
        name:"Dinner",
        type:"dinner"
    }
]

    return(
        <div className="navbar">
            <div className="navbar-img">
                <img src="Foody Zone.svg" alt="" />
                <input onChange={searchBtn}  type="text" placeholder="Search Food...." />
            </div>
            <div className="btn">
                {
                filterBtn.map((value)=>(
                    <button key={value.name} onClick={()=>typeBtn(value.type)}>{value.name}</button>
                ))
                }
            </div>
        </div>
    )
}