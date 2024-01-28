import {Link} from "react-router-dom"

export default function Home(){
    return(
        <div>
            <h1>Home</h1>
            <h2>Welcome to my personal portfolio webpage!</h2>
            <h2>Feel free to ask me about any of the following topics. I'm always down to chat!</h2>
            <Link to="/cooking" className="cookingpage">Cooking</Link>
        </div>
    )
}