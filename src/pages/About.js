import Page from './Page'

function About() {
    const headerContent = <h1>NORTHEASTERN UNIVERSITY SYMPHONY ORCHESTRA</h1>
    const pageName = "ABOUT"
    const information = <div>
        {/* TODO */}
        <p>about info</p>
    </div>
        return (
            <Page headerContent = {headerContent} pageName={pageName} information={information}></Page>
        );
}


export default About;