import NavBar from "@/app/Components/NavBar";
import MyHome from "@/app/Components/MyHome";
import SocialLinks from "@/app/Components/SocialLinks";
import About from "@/app/Components/About";
import Portfollio from "@/app/Components/Portfollio";
import Experience from "@/app/Components/Experience";
import Contact from "@/app/Components/Contact";


export default function Home() {
  return (
    <div>
     
      <NavBar/>
      <MyHome/>
      <About/>
      {/* <Portfollio/> */}
      <Experience/>
      <Contact/>
                                                                                                   
      <SocialLinks/>
    </div>
  )
}