import React,{Component} from "react";
import "./External.css"
const styling={
    width:"40%",
    height:"300px",
    backgroundColor:"grey",
    border:"2px solid black",
    borderRadius:"12px",
    textAlign:"center"
}
export default class Firstclass extends Component{
    render(){
        return(
            <div style={styling}>
                <h1>This Is Created By Using Class Component</h1>
                <h2 className="externalcss">This Is Done By Using External Css</h2>
                <h2 style={{color:"green"}}>This Is Done By Using Inline Css</h2>

            </div>
        )
    }
}