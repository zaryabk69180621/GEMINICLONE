import React, { useState } from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets';
import { useContext } from 'react';
import { context } from '../../context/context';

function Sidebar(){

    const{previousprompts,setprevoiusprompts}=useContext(context);
const[extended,setextended]=useState(false)

return (<div className="sidebar">

<div className="top">
    <img  onClick={()=>{extended?setextended(false):setextended(true)}}className="menu"src={assets.menu_icon} alt="meniicon"></img>
    <div className="newchat">
        <img src={assets.plus_icon} alt="plus"></img>
        {extended?<p>New Chat</p>:null}
    </div>{extended?
    <div className="recent">
        <p className="recenttitle">Recent</p>
        {previousprompts.length<=0?<></>:previousprompts.map((e)=>{return(
                <div className="recent-entry smooth">
                <img src={assets.message_icon}></img>
                <p>{e.length<10?e:e.substring(0,10)+"..."}</p>
                
                </div>


            )})}  
    </div>:null}
    
</div>
    <div className="bottom">
        <div className=" smooth bottom-item recent-entry">
         <img src={assets.question_icon}></img>
        {extended?<p>Help</p>:null}
    
    </div>
    <div className=" smooth bottom-item recent-entry">
    <img src={assets.history_icon}></img>
    {extended?<p>Activity</p>:null}
    
    </div>
    <div className=" smooth bottom-item recent-entry">
    <img src={assets.setting_icon}></img>
    {extended?<p>setting</p>:null}
    
    </div>

</div>

</div>)


}

export default Sidebar;