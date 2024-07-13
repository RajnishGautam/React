import React,{useState} from "react";
export default function App(){
    const [bgcolor,setBgColor]=useState('white');
    const changeBackgroundColor=()=>{
        const colors=['green','blue','red','black','yellow','pink','purple','grey'];
        const randomColor=colors[Math.floor(Math.random()*colors.length)];
        setBgColor(randomColor);
    }
    return(
        <div style={{backgroundColor:bgcolor,height:'80vh',display:'flex'}}>
            <button onClick={changeBackgroundColor}>Change backgroundColor</button>
        </div>
    );
}