import Page from "./Page";

export default function ConcertoCompetition() {
    const headerContent = <h1>NORTHEASTERN UNIVERSITY SYMPHONY ORCHESTRA</h1>
    const pageName = "CONCERTO COMPETITION"
    const information = <div>
        {/* TODO MAKE VARIABLES */}
        <p>2024 CONCERTO COMPETITION</p>
        <p>The Northeastern University Symphony Orchestra is pleased to announce the 2024 NUSO 
            Concerto Competition, an opportunity for students to perform a solo work with the 
            Northeastern University Symphony Orchestra during its concert on Saturday, April 13,
             2024 at 7:30pm in the Fenway Center.</p>
        <p>The 2024 Concerto Competition will take place on Saturday, January 20th, 2024 in the 
            Fenway Center, Northeastern University.</p>
        <p>
        Students wishing to enter the competition must apply by submitting a completed entry form 
        to Evan Bennett (<a href="mailto:e.bennett@northeastern.edu">e.bennett@northeastern.edu</a>) by Monday, December 4, 2023 at 11:59pm. No late
         forms will be accepted.
        </p>
        <p>
        Rules and Guidelines:
        NUSO-Concerto-Competition-2024-Information
        </p>
        <p>
        Entry Form:
        NUSO-Concerto-Competition-2024-Entry-Form
        </p>
    </div>

    return (
        <Page headerContent = {headerContent} pageName={pageName} information={information}></Page>
    );
}