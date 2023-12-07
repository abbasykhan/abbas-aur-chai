import React from "react";
import { useLoaderData } from "react-router-dom";


function Github() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/abbasykhan")
//       .then(response =>response.json()
//       )
//       .then(data => {
//         setData(data);
//       }
        
//       );
//   }, []);


//next method
const data = useLoaderData()
  return <div className="bg-cyan-600 rounded p-5 text-center  content-center">
    Github {data.followers}
    <img src={data.avatar_url} alt="" />
    </div>;

}

export default Github;

export const githubInfoLoader=async()=>{
  const response=  await fetch("https://api.github.com/users/abbasykhan")
  return response.json()
}


