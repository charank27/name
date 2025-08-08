import React from "react";
import ReactDOM from "react-dom/client";
//header 
//body 
//footer 
function Card(){
    return (
        <div style={{border:"2px solid green",padding:"2px"}}>
            <img src="https://www.pngkey.com/png/full/72-723644_blank-black-t-shirt-png.png" height="200px" width="calc(20% - 20px)"/>
            <div style={{textAlign:"center"}}>
                <h2>T-shirt</h2>
                <h1>40-60% off</h1>
                <h2>SHOP NOW</h2>
            </div>
        </div>
    )

}
function App(){
    return (
        //header
        //body
        <div style={{display:"flex",flexWrap: "wrap",gap:"20px"}}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/> 
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);