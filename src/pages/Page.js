import NavBar from './NavBar';
import '../styles/Page.css'

// this is an abstract component
// use it to create other components
export default function Page(props) {
    const { headerContent, pageName , information } = props
    return (
    <div className="Page">
        <header className="header">
            {headerContent}
        </header>  
        <body className="body">
            <NavBar></NavBar>
            <div className="pageContentContainer">
                <div className="nameContainer"><h2>{pageName}</h2></div>
                <div className="informationContainer">{information}</div>
            </div>
      </body>
    </div>);
}