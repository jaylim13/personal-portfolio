import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar(){
    return <nav className="nav">
        <Link to="/" className="site-title">Jayden Lim<i class="fa-solid fa-cross"></i></Link>
        <ul>
            <CustomLink to="/general">General</CustomLink>
            <CustomLink to="/academic">Academic</CustomLink>
            <CustomLink to="/inquiries">Inquiries</CustomLink>
        </ul>
    </nav>
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
        <li className={isActive ? "active" : ""}> 
            <Link to={to} {...props} >{children}</Link>
        </li>
    )
}