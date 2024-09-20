

import { createContext, useState } from "react";
export const context=createContext();
import run from '../cnfog/gemini';
import { useEffect } from "react";
const ContextProvider=( props)=>{

    useEffect(()=>{console.log("recent:",recentprompt);console.log(previousprompts),[previousprompts]})
    const[input,setinput]=useState('');
    const [recentprompt,setrecentprompt]=useState('');
    const[previousprompts,setprevoiusprompts]=useState([]);
    const [showresult,setShowresult]=useState(false);
    const[loading,setLoading]=useState(false);
    const[resultdata,setresultdata]=useState('');
    const delaypara=(index,word)=>{

        setTimeout(() => {
            setresultdata(prev=>prev+word);
        }, 0.75*index );
        
        }
let onSent=async(prompt)=>{

   setresultdata("");
   setLoading(true);
   setShowresult(true);
   prompt?setrecentprompt(prompt):setrecentprompt(input);
   let res;
   prompt?res=await run(prompt):res=await run(input);
 
   let resarray=res.split("**");
        let newres="";
        for(let i=0;i<resarray.length;i++){
            if(i%2==0){
                newres+=resarray[i];


            }else{

                newres+="<b>"+resarray[i]+"</b>";
            }


        }

        newres=newres.split("*").join("<br>");
        let so=newres.split(" ");
        for(let i=0;i<so.length;i++){
const next=so[i]+" ";
delaypara(i,next);        }
setprevoiusprompts((prev)=>{if(prompt){return([...prev,prompt])}else {return[...prev,input]}}); 
setLoading(false);
setinput('');


}


const contextvalue={previousprompts,setprevoiusprompts,
onSent,
recentprompt,
setrecentprompt,
showresult,
loading,setLoading,
resultdata,
input,
setinput


}
 return(<context.Provider value={contextvalue}>{props.children}</context.Provider>)


}

export default ContextProvider;