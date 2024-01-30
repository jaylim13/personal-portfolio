import { Link } from "react-router-dom"
export default function Academic(){
    return <div>
        <h1>Academic</h1>
        <h2>Here you will find information about my coursework, research interests, and more!</h2>
        <br />
        <div>
        <p className="academic-header">Relevant Coursework</p>
        <p>
            <h3>High School</h3>
            AP Computer Science Principles, AP Computer Science, AP Calculus AB, AP Calculus BC
            <h3>College</h3>
            Freshman Year: PHYS 55, COMP 110, IDST 190L, MATH 233, MATH 381
            <br />
            Sophomore Year: COMP 211, COMP 301, MATH 347, COMP 455, STOR 535, COMP 590
        </p>
        </div>
        <Link to="/research" className="academic-link">Research</Link>
        <br />
        <p className="academic-header">Projects</p>
        <a href="https://github.com/jaylim13/pythonProject_HackNC_Fall_2022" target="_blank" rel="noreferrer">HackNC 2022 Marco vs Covid</a>
        <br />
        <a href="https://github.com/jaylim13/HappyFriendBotProject" target="_blank" rel="noreferrer">YeezyBot</a>
        <br />
        <a href="https://github.com/jaylim13/Todo-List" target="_blank" rel="noreferrer">Todo-List</a>
        <br />
        <a href="https://github.com/kaleb-white/hacknc2023" target="_blank" rel="noreferrer">HackNC 2023 Unfinished Twitter Clone</a>
        <br />
        <a href="https://github.com/jaylim13/personal-portfolio" target="_blank" rel="noreferrer">Personal-Portfolio</a>
        <br />
        <br />
        <br />
        
        <a className="retrieve-stuff" href="documents/resume.pdf" download>Click here to download my resume!</a>
    </div>
}