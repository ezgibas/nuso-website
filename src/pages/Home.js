import Page from './Page'

function Home() {
  const headerContent = <h1>NORTHEASTERN UNIVERSITY SYMPHONY ORCHESTRA</h1>
  const pageName = "HOME";
  const information = <div>
    <p>Welcome to NUSO!</p>
    {/* TODO: ADD VARIABLE FOR SEMESTER */}
    <p>Thank you for your interest in NUSO. 
      Our next audition will be held at the beginning of the Fall 2024 semester.
    </p>
    <p>
      Audition for the new academic year is required for both new and returning members. We will be posting more information on auditions towards the end of the summer. If you have any questions, please contact the orchestra secretary at nuso.secretary@gmail.com.
    </p>
    <p>
      Check out our <a href="https://web.northeastern.edu/orchestra/about/video/">video</a> to learn more about NUSO!
      Please refer to our <a href="http://web.northeastern.edu/orchestra/home/health-and-safety/">Health and Safety</a> page for our policies for the rehearsals.
    </p>
    <p>
      For information about:
    </p>
    <p>
      The ensemble in general, contact our Public Relations manager at <a href="mailto:nuso.pr@gmail.com">nuso.pr@gmail.com</a>
    </p>
    <p>
      Rehearsals and auditions, contact our Secretary at <a href="mailto:nuso.secretary@gmail.com">nuso.secretary@gmail.com</a>.
    </p>
    <p>
      Instrument rentals, contact our Manager at <a href="mailto:nuso.manager@gmail.com">nuso.manager@gmail.com</a>.
    </p>
    <p>
      Dues, contact our Treasurer at <a href="mailto:nuso.treasurer@gmail.com">nuso.treasurer@gmail.com</a>.
    </p>
    <p>
      Sheet music, contact our Librarian(s) at <a href="mailto:nuso.librarian@gmail.com">nuso.librarian@gmail.com</a>.
    </p>
    <p>
      Events, contact our Events Coordinator at <a href="mailto:nuso.events@gmail.com">nuso.events@gmail.com</a>.
    </p>
  </div>
  return (
    <Page headerContent = {headerContent} pageName={pageName} information={information}></Page>
  );
}

export default Home;
