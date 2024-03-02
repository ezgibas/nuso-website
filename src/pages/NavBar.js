import { AppBar, Button, Box } from "@mui/material";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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

function NavBarButton(props) {
    return (
      <Link className="button" to = {props.link}>
        <Button color="inherit">{props.name}</Button>
      </Link> 
    )
}

export default NavBar;