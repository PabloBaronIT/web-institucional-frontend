import ListOfAreas from "./ListOfAreas";
import { Navigation } from "../components/Navigation";

export default async function AreasPage({ params }) {
  return (
    <>
      <Navigation />
      <br />
      <section>
        <ListOfAreas />
      </section>
    </>
  );
}
