import { Outlet } from "react-router-dom"
import Hostlander from "./Hostlander"



const Host = () => {

  return (
    <section>
      <Hostlander/>
      <Outlet/>
    </section>
  )
}

export default Host