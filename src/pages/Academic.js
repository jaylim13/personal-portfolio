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
            AP Computer Science Principles, AP Computer Science
            <h3>College</h3>
            Freshman Year: PHYS 55, COMP 110, IDST 190L, MATH 233, MATH 381
            <br />
            Sophomore Year: COMP 211, COMP 301, MATH 347, COMP 455, STOR 535, COMP 590
        </p>
        </div>
        <Link to="/research" className="academic-header">Research</Link>
        <br />
        <br />
        <a className="retrieve-stuff" href="documents/resume.pdf" download>Click here to download my resume!</a>
    </div>
}