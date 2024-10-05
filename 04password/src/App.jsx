import { useCallback, useState, useEffect ,useRef} from 'react'

function App() {
  const [len,setLen] = useState(8);
  const [num,setNum]=useState(false);
  const [ch,setCh]=useState(false);
  const [password,setPass]=useState("");

  
  const  passgen= useCallback( ()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num) str+="1234567890"
    if(ch) str+="!#$%&'()*"
    for(let i=1;i<=len;i++){
      let c=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(c);
    }
    setPass(pass)
  },[len,num,ch,setPass])

  const passref=useRef(null)

  
  const clip = ()=>{
    //optional select ? iss se hota h
    passref.current?.select()
    passref.current?.setSelectionRange(0,8)
    window.navigator.clipboard.writeText(password)
  }


  useEffect(()=>{
    passgen()
  }, [len,num,ch,passgen])


  return (
    <div className="w-full max-w-md h-52 mx-auto shadow-md rounded-lg px-4 py-3 my-24 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3 bg-inherit'>Password generator</h1>
      

      <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-inherit outline-none">
        <input
        type='text'
        placeholder='password'
        value={password}
        className='bg-white flex-wrap w-3/4 px-2 rounded-md mx-1'
        readOnly
        ref={passref}
        />
      <button  onClick={clip}
      className='outline-none px-1 py-0.5 bg-blue-700 text-white rounded-md text-sm w-1/3'>Copy</button>
      </div>

      <div className='text-sm gap-x-2'>
      
      <div className='bg-gray-800'>
        <input
        type='range'
        min={6}
        max={50}
        value={len}
        className='cursor-pointer mx-2'
        onChange={(e)=>{setLen(e.target.value)}}
        />
        <label className='bg-inherit text-white'>Length:     {len}</label>

        <input
        type='checkbox'
        className='mx-2 pl-2'
        defaultChecked={num}
        onChange={()=>{setNum((pre)=>!pre)}}
        />
        <label className='bg-inherit text-white'>Number</label>
        
        <input
        type='checkbox'
        className='mx-2 pl-2'
        defaultChecked={ch}
        onChange={()=>{setCh((pre)=>!pre)}}
        />
        <label className='bg-inherit text-white'>Character</label>

      </div>
      
      </div>
  </div>
  )
}

export default App
