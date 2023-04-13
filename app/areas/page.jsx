import ListOfAreas from "./ListOfAreas";
import { Navigation } from "../components/Navigation/Navigation";

export default async function AreasPage() {
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
