import {Link} from "react-router-dom"

export default function Home(){
    return(
        <div>
            <h1>Home</h1>
            <h2>Welcome to my personal portfolio webpage!</h2>
            <img src="images/jay.jpg" alt="Me"/>
            <h2>Feel free to ask me about any of the following topics. I'm always down to chat!</h2>
            <ul>
                <li><Link to="/cooking" className="interest-page">Cooking</Link></li>
                <br />
                <li><Link to="/gym" className="interest-page">Gym</Link></li>
                <br />
                <li> <Link to="/soccer" className="interest-page">Soccer</Link></li>
            </ul>
        </div>
    )
}