// Below are the imports for components and axios.
import Link from "next/link";
import axios from "axios";
import Layout from "../../components/Layout";

// Below is the home component, that accepts a prop named films.
const Home = ({ films }) => {
  return (
    // Layout component is used to wrap the child components.
    <Layout>
      {/* The heading for the star wars films*/}
      <h1>Star Wars Films</h1>
      <ul>
        {films.map((film, index) => (
          <li key={index}>
            {/* The Link component creates a client-side navigation to the film
            details page based on the index of the film in the films array. The
            title of the film is displayed as an a element inside the Link.
            component. */}
            <Link href={`/${index + 1}`}>
              <a>{film.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

Home.getInitialProps = async () => {
  // Then an axios GET request is made to the Star Wars API to retrieve the film details based on the id.
  const response = await axios.get("https://swapi.dev/api/films/");
  // The response is stored in the response variable, and the results array is extracted from the response and stored in the films variable.
  const films = response.data.results;

  // The films array is returned from the function as a prop.
  return {
    films,
  };
};

export default Home;
