import Button from 'react-bootstrap/Button'
import { displayCompetition } from "../constants";
import 'bootstrap/dist/css/bootstrap.css';

function NavBar() {
    return (
    <nav className="d-flex justify-content-center navbar navbar-expand-lg navbar-light bg-light">        
          <div className="">
            <NavBarButton link="/" name="Home"/>
            <NavBarButton link="/auditions" name="Auditions"/>
            <NavBarButton link="/about" name="About"/>
            <NavBarButton link="/registration" name="Course Registration"/>
            <NavBarButton link="/dues" name="Dues"/>
            <NavBarButton name="FAQ"/>
            <NavBarButton name="Documents"/>
            {displayCompetition && <NavBarButton link="/competition" name="Concerto Competition"/>}
        </div>
      </nav>
    );
}

function NavBarButton({link, name}) {
    return (
        <a role="button" className="btn btn-outline-dark m-2"  href={link}>{name}</a>
    )
}

export default NavBar;