import { AppBar, Button, Box } from "@mui/material";
import '../styles/NavBar.css';

function NavBar() {
    return (
      <AppBar position="static">
        <div className="navbar-button-container">
            <NavBarButton name="Home"/>
            <NavBarButton name="Auditions"/>
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
        <Button className="button" variant="text" color="inherit">{props.name}</Button>
    )
}

export default NavBar;