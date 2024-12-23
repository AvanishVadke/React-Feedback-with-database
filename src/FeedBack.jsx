import { useState,useRef} from "react";
import db from "./Firebase";
import {ref,set } from "firebase/database";

function Feedback(){
    const rName=useRef("");
    const [name,setName]=useState("");
    const [feedback,setFeedback]=useState("");
    const [msg,setMsg]=useState("");

    const hName=(e)=>{
        setName(e.target.value);
    }
    const hFeedback=(e)=>{
        setFeedback(e.target.value);
    }
    const save =(e)=>{
        e.preventDefault();
        if(name===""){
            alert("Please enter your name");
            setMsg("");
            rName.current.focus();
            return;
        }
        let data={name,feedback};
        let node=name+" "+new Date().toString();
        let r=ref(db,"feedback/"+node);
        set(r,data);
        alert("Feedback saved successfully");
        setName("");
        setFeedback("excellent");
        rName.current.focus();
    }
    return(
        <>
            <center>
                <h1>Feedback Form</h1>
                <form onSubmit={save}>
                    <label>Enter your name:</label>
                    <input type="text" ref={rName} placeholder="Enter your name" value={name} onChange={hName} /><br/><br/>
                    <input type="radio" name="feedback" value="excellent" defaultChecked = {true} onChange={hFeedback} />Excellent
                    <input type="radio" name="feeback" onChange={hFeedback} value="good" />Good
                    <input type="radio" name="feedback" onChange={hFeedback} value="average" />Average<br/><br/>
                    <button type="submit" name="submit">Submit</button>
                </form>
                <h2>{msg}</h2>
            </center>
        </>
    );
}
export default Feedback;