import About from "./About";
import Contact from "./Contact";
import Project from "./Project";

function Home () {

    

    return (
<>

        <div className="home">
            
            <div className="hero">
            <h2>WEB DEVELOPER</h2>
            <h1>Talk is cheap. 
                Show me the code</h1>
            <p>I design and code beautifully simple things,
                and I love what I do.</p>
            <button>LET'S CHAT</button>
        </div>



            <div className="her">
               <img src="/logo.webp" alt="" />
            </div>

        </div>


<About/>
<Project/>
<Contact/>
        </>

    )

    
}

export default Home;