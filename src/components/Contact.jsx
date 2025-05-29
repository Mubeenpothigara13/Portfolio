import { NavLink } from "react-router-dom";

function Contact () {

    return (
        <>

        <div className="contact">
        
        <div className="cont">
        <div className="conts">
            <h2>Let's make something amazing together.</h2>
        <p>Start by <span>saying hi</span></p>
            <label>Name:</label> <br/>
            <input type="text" name="" id="" placeholder="Your Name"/> <br/>

            
            <label>Email address</label> <br/>
            <input type="email" name="" id="" placeholder="Your Email"/><br/>

            
            <label>Message</label> <br/>
            <input type="text" placeholder="write your message here"/><br/>

            <button type="submit" className="btn">Send</button>
        </div>


        <div className="contss">
            <h1>INFORMATION.</h1>

            <h4>Near Madina Masjid , HMT, Gujarat-383001</h4>

            <h3>mubeenpothigara2002@gmail.com</h3>


            <ul>
                <li><NavLink to="/">home</NavLink></li>
                <li><NavLink to="/about">about</NavLink></li>
                <li><NavLink to="/project">projects</NavLink></li>
                <li><NavLink to="/contact">contact</NavLink></li>
            </ul>


           
        </div>


    </div>
    
       

        </div>
        
        
        </>
    )
}


export default Contact;