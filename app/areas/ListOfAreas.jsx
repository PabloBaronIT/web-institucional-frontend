import { OficinaVirtualButton } from "./OficinaVirtualButton";

const fetchAreas = () => {
  console.log("Fetching logs");
  return fetch(
    "https://oficina-virtual-pablo-baron.up.railway.app/oficina/categories/categories"
  ).then((res) => res.json());
};

export default async function ListOfAreas() {
  const areas = await fetchAreas();

  return (
    <>
      <h1>Áreas de la municipalidad de Sacanta</h1>
      {/* <div className="img-container">
        {areas.map((area) => (
          <article key={area.id} className="img-article">
            <h2>{area.title}</h2>
            <img
              className="img"
              src={area.description}
              alt="Descripción de la imagen"
            />
            <OficinaVirtualButton title={area.title} />
          </article>
        ))}
      </div> */}
    </>
  );
}
