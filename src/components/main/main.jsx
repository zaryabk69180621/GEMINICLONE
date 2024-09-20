import { useContext } from "react";
import { assets } from "../../assets/assets";
import './main.css'
import { context } from "../../context/context";

 function Main(){
    const {previousprompts,setprevoiusprompts,
        onSent,
        recentprompt,
        setrecentprompt,
        showresult,
        loading,setLoading,
        resultdata,
        input,
        setinput}=useContext(context);
return(


<div className="Main">
    <div className="nav">
    <p>Gemini</p> 
    <img src={assets.user_icon}></img>
    </div>
    <div className="maincontainer">
    {!showresult?<><div className="greet">
    <p><span> Hello, Dev.</span></p>
    <p>How can I help you today?</p></div>
    <div className="cards">
        <div className="card"onClick={()=>{setinput("Suggest beatuful places for an upcoming roadtrip");onSent("Suggest beatuful places for an upcoming roadtrip")}}>
            <p>Suggest beatuful places for an upcoming roadtrip</p>
            <img src={assets.compass_icon}></img>
        </div>
        <div className="card" onClick={()=>{setinput("Briefly describe this concept:urban planning");onSent("Briefly describe this concept:urban planning")}} >
            <p>Briefly describe this concept:urban planning</p>
            <img src={assets.bulb_icon}></img>
        </div>
        <div className="card" onClick={()=>{setinput("Brain storm team bonding activities for wrok retreat for an upcoming roadtrip");onSent("Brain storm team bonding activities for wrok retreat for an upcoming roadtrip")}}>
            <p> Brain storm team bonding activities for wrok retreat for an upcoming roadtrip</p>
            <img src={assets.message_icon}></img>
        </div>
        <div className="card" onClick={()=>{setinput("Imporove the readability of this code");onSent("Imporove the readability of this code")}}>
            <p>Imporove the readability of this code</p>
            <img src={assets.code_icon}></img>
        </div>
       
    </div></>:<div className="result">
        <div className="result-title"><img style={{width:"50px",height:"50px", borderRadius:"20px"}} src={assets.user_icon}>
    </img><p>{recentprompt}</p></div>
    <div className="result-data">
      <img src={assets.gemini_icon} alt=""></img> {loading? <div className="loader"><hr /><hr /> <hr /></div>: 
       <p dangerouslySetInnerHTML={{__html:resultdata}}></p>}    

    </div>
    </div>}
    <div className="main-bottom">
        <div className="searchbox">
            <input onChange={(e)=>{setinput(e.target.value)}} value={input}type="text" placeholder="enter a prompt here" />
            <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img src={assets.send_icon} onClick={()=>{onSent()}} alt="" />


            </div>
        </div>
        <p className="bottominfo">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>


    </div>
    </div>
</div>






)

 }


 export default Main;