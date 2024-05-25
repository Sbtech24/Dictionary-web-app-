import { useState,useEffect } from "react"
import "./main.css"
import axios from 'axios'


export default function Main({search,play}){
    const [inputValue,setInputValue] = useState("")
    const [data,setData] = useState({})
    const [showMeaning, setShowMeaning] = useState(false)
    const [displayPlay,setDisplayPlay] =useState(false)
   

    const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
          );
          setData(response.data[0]);
          setShowMeaning(true)
          setDisplayPlay(true)
        //   console.log(data.word)
          
        } catch (error) {
          console.error('Error fetching data:', error);
          
        }
      };

function handleClick(e){
    e.preventDefault()
    
}
  return(
        <main className="">
            <form className="mb-4 flex justify-between gap-2"onSubmit={handleClick} >
                <input type="text" className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " + " input-box"} 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter a word"/>
                
                <button onClick={fetchData}><img src={search} alt="" /></button>
               
            </form>
                    <div className="my-5">
                <div className="flex justify-between ">
        
                <h1 className="text-5xl">{data.word}</h1>
                {displayPlay ? <img src={play} alt="" width={50} />: <></>}
                </div>
                {data.phonetics && data.phonetics.length > 0 && (
            <div>
              <h3>Phonetics</h3>
              {data.phonetics.slice(0,2).map((phonetic, index) => (
                <p key={index}>{phonetic.text}</p>
              ))}
            </div>
          )}
            </div>

            
            {showMeaning && <h3>Meanings</h3>}
            {data.meanings &&
              data.meanings.slice(0, 2).map((meaning, index) => (
                <div key={index}>
                
                  <p>{meaning?.partOfSpeech}</p>
                  <ul>
                    {meaning.definitions.slice(0,3).map((definition, idx) => (
                      <li key={idx}>{definition.definition}</li>
                    ))}
                  </ul>
                </div>
              ))}

              
        </main>
    )
}