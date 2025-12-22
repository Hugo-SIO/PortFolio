import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar(){

    return(
        <div>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/projets">Projets</Link>
                <Link to="/competences">Compétences</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    )
}

export default Navbar;