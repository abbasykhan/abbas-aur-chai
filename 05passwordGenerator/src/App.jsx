import { useState, useCallback, useEffect,useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let [length, setLength] = useState(8);
  const [numberAllowd, setNumberAllowed] = useState(false);
  const [charAllowd, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
    //useRef hook
    const passwordRef= useRef(null)
  const passwrodGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefdhijklmnopqrstuvwxyz";
  
    if (numberAllowd) {
      str = str + "0123456789";
    }
    if (charAllowd) {
      str = str + "^%&*_()";
    }
    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      console.log(pass);
    }
    setPassword(pass);
  }, [length, numberAllowd, charAllowd, setPassword]);

const copyPasswordToClip= useCallback(()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)

},[password])

  useEffect(()=>{
    passwrodGenerator()
  },[length,numberAllowd,charAllowd,passwrodGenerator]);
  return (
    <>
      <div className=" w-full max-w-md mx-auto, shadow-sm rounded-lg my-3 p-6 text-orange-500 bg-green-800">
        Password Generator
        <div className="flex shadow rounded-lg overflow-hidden  mt-3">
          <input
            type="text"
            className=" outline-none w-full py-1 px-3"
            value={password}
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button className=" outline-none bg-orange-700 text-white px-3  py-0.5 shrink-0" onClick={copyPasswordToClip}>
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 mt-3">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className=" cursor-pointer"
              name=""
              id=""
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className=" text-white"> Length: {length}</label>
          </div>
          <div className="flex items-center  ps-3 gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowd}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label className=" text-white"> Numbers</label>
          </div>
          <div className="flex items-center  ps-3 gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowd}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label className=" text-white"> Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
