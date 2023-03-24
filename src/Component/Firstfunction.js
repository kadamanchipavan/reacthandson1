import "./External.css"

 export default function Firstfunction () {
    const styling={
        width:"40%",
        height:"300px",
        backgroundColor:"#ff99e6",
        border:"2px solid black",
        borderRadius:"12px",
        textAlign:"center"
    }
    return(
        <div style={styling}>
            <h1>
                This is created by using functional component
            </h1>
            <h2 className="externalcss">This is created by External css</h2>
            <h2 style={{color:"green"}}>This is created by using inline css</h2>

        </div>
    )
    
 }
