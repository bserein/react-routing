import { Link } from 'react-router-dom'
// we need to import link for the function because if not link is not defined and it doesnt know what to do

function Home() {
    return (
      <>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </>
    );
  }

  export default Home;