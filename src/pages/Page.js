import '../styles/Page.css'
import 'bootstrap/dist/css/bootstrap.css';


// this is an abstract component
// use it to create pages
export default function Page({ headerContent, pageName , information }) {
    return (
    <div className="Page">
        <header className="header">
            {headerContent}
        </header>  
        <body className="center">
            <div className="pageContentContainer">
                <div className="nameContainer"><h2>{pageName}</h2></div>
                <div className="informationContainer">{information}</div>
            </div>
      </body>
    </div>);
}