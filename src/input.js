import React from "react"

export  default function Input(){
    const [meme,setmeme]=React.useState({
        toptext:"",
        bottomtext:"",
        randomImage:"https://i.imgflip.com/23ls.jpg"
    })
const[allmeme,setallmeme]=React.useState([])
React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setallmeme(data.data.memes))
},[])
    const[input,setinput]=React.useState(
        {toptext1:"" ,bottomtext1:""}
    )
    function handlechange(event){
        setinput(prevdata =>{
            return{
                ...prevdata,
                [event.target.name] :event.target.value
            }
        })
    }
    function getmemeimg(){
        const randomnumber=Math.floor(Math.random()*allmeme.length) 
     const url=allmeme[randomnumber].url
     console.log(url)
     setmeme(prevmeme =>({
...prevmeme,
randomImage:url
     }))
     setinput(
        {toptext1:"",bottomtext1:""}
     )
    }
    return (
        <div className="container">
        <div className="input">
            <input className="num1" placeholder="Top-Text" onChange={handlechange} name="toptext1"/>
            <input className="num1"  placeholder="Bottom-Text" onChange={handlechange} name="bottomtext1"/>
            </div>
            <div className="button">
                <button  onClick={getmemeimg}className="btn">Got a new Meme Image</button>
            </div>
           
            <div className="meme-img">
                <img src= {meme.randomImage} className="memeimg"/>
                <div className="one-half">
                    <h1>{input.toptext1}</h1>
                </div>
                <div className="second-half">
                    <h1>{input.bottomtext1}</h1>
                </div>
                </div>
            </div>
    )
}