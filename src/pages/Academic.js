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
            AP Computer Science Principles, AP Computer Science, AP Calculus AB, AP Calculus BC, AP Physics 1
            <h3>College</h3>
            <h4>Freshman Year:</h4> 
            PHYS 55: Intro to Mechatronics, COMP 110: Intro to Programming & Data Science, IDST 190L: Data Literacy, MATH 233: Multivariable Calculus, MATH 381: Discrete Math
            <br />
            <h4>Sophomore Year:</h4> 
            COMP 211: Systems Fundamentals, COMP 301: OOP Programming, MATH 347: Linear Algebra, COMP 455: Automata Theory, STOR 535: Probability, COMP 590: Software Engineering
            <br />
            <h4>Junior Year:</h4> 
            COMP 311: Computer Organization, COMP 562: Machine Learning, COMP 590: Computer Vision, STOR 566: Deep Learning
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