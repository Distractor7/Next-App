// Below is the imports for axios,components and useRouter.
import { useRouter } from "next/router";
import axios from "axios";
import Layout from "../../components/Layout";

// Below a function defines a component for rendering the details of the star wars films that has been returned by the api.
const FilmDetails = ({ film }) => {
  // The use router hook is called.
  const router = useRouter();

  // An if statement checks if router.isFallback is true. If it is, a div element with the string "Loading..." will be returned.
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  //Below are the film details rendered by jsx.
  return (
    // The Layout component is used to wrap the child components.
    <Layout>
      {/* The specific detils of each film are rendered out in h1 and p tags */}
      <h1>{film.title}</h1>
      <p>Director: {film.director}</p>
      <p>Producer: {film.producer}</p>
      <p>Release Date: {film.release_date}</p>
      <p>Opening Crawl:</p>
      <p>{film.opening_crawl}</p>
    </Layout>
  );
};

// Below is the getInitialProps ayncronous function.
// This function populates the initial props of the component.
// This function is also called before the component is rendered.
FilmDetails.getInitialProps = async (context) => {
  // A variable for id query parameter from the context.query object is created. Then an axios GET request is made to the Star Wars API to retrieve the film details based on the id.
  const { id } = context.query;
  const response = await axios.get(`https://swapi.dev/api/films/${id}`);
  const film = response.data;

  return {
    // The film object is returned from the function as a prop.
    film,
  };
};

export default FilmDetails;
