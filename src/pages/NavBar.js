import { AppBar, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';


function NavBar() {
    return (
      <AppBar position="static">
        <div className="navbar-button-container">
            <NavBarButton link="/" name="Home"/>
            <NavBarButton link="/auditions" name="Auditions"/>
            <NavBarButton link="/about" name="About"/>
            <NavBarButton name="Course Registration"/>
            <NavBarButton name="Dues"/>
            <NavBarButton name="FAQ"/>
            <NavBarButton name="Documents"/>
            <NavBarButton name="Concerto Competition"/>
        </div>
      </AppBar>
    );
}

function NavBarButton({link, name}) {
    return (
      <Link className="button" to = {link}>
        <Button color="inherit">{name}</Button>
      </Link> 
    )
}

export default NavBar;