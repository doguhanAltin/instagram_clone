import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Loader } from "./components/Loader";
import { useEffect, useState } from "react";

function App() {
  const user = useSelector((state:any)=>state.auth.user)
  const showRoutes = useRoutes(routes)
  const [redirect, setRedirect] = useState(false)



// useEffect(()=>{
// const timeout = setTimeout(()=>{
//   setRedirect(true)
// },2000)
// return ()=>{
//   clearTimeout(timeout)
// }
// },[])

  if(user ===null){
    return(
      <Loader />
    )
  }
  return (<>
  <Toaster position="top-right"/>
  {showRoutes} </>);
}

export default App;
