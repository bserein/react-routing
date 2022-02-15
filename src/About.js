import { Link } from 'react-router-dom'
// we need to import link for the function because if not link is not defined and it doesnt know what to do

function About() {
    return (
      <>
        <main>
          <h2>Who are we?</h2>
          <p>
            That feels like an existential question, don't you
            think?
          </p>
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </>
    );
  }

  export default About;
  