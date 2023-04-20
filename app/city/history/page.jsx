import styles from "./HistoryPage.module.css";
import HistoryCard from "@/app/components/HistoryCard/HistoryCard";

export default function HistoryPage() {
  return (
    <>
      <br />
      <br />
      <br />
      <div className={styles.overflowContainer}>
        <h2 className={styles.h2Title}>LA HISTORIA DE NUESTRA CIUDAD</h2>
        <div>
          {/* CARD 1 */}
          <div className={styles.cardContainer}>
            <HistoryCard
              srcImg="/sacanta-ubic-mapa-history.jpg"
              imgDescription="Sacanta en el mapa"
            />
            <div className={styles.infoHistory}>
              <h1 className={styles.h1Year}>- 1869 -</h1>
              <h3 className={styles.h3Year}>
                FUNDACIÓN DE SACANTA Y SU PRIMERA IGLESIA
              </h3>
              <p className={styles.yearDescription}>
                La localidad de Sacanta surge como consecuencia del paso del
                ferrocarril, el 19 de septiembre de 1908, se autoriza a la
                Compañia del Ferrocarril Argentino a construir el ramal que
                comunicaba Villa del Rosario-Las Rosas, entre dichas localidades
                se erige SACANTA.
              </p>
            </div>
            <HistoryCard
              srcImg="/sacanta-iglesia.jpg"
              imgDescription="Iglesia San Miguel Arcángel"
            />
          </div>
          {/* CARD 2 */}
          <div className={styles.cardContainer}>
            <HistoryCard
              srcImg="/ferrocarril-actualmente.jpg"
              imgDescription="Estación del ferrocarril, hoy museo de la ciudad"
            />

            <div className={styles.infoHistory}>
              <h1 className={styles.h1Year}>- 1917 -</h1>
              <h3 className={styles.h3Year}>
                INAUGURACIÓN DEL EDIFICIO DEL FERROCARRIL CENTRAL CÓRDOBA
              </h3>
              <p className={styles.yearDescription}>
                Este evento fue un punto de inflexión para el desarrollo
                económico y poblacional de la ciudad, ya que permitió el
                transporte de bienes y personas a otras partes del país. Además,
                el edificio del ferrocarril se convirtió en un importante centro
                de intercambio comercial y social
              </p>
            </div>
            <HistoryCard
              srcImg="/ferrocarril-detras-historia.jpg"
              imgDescription="Estación del ferrocarril por detrás"
            />
          </div>
          {/* CARD 3 */}
          <div className={styles.cardContainer}>
            <HistoryCard
              srcImg="/plaza-sacanta-historia.jpg"
              imgDescription="Plaza San Martín"
            />
            <div className={styles.infoHistory}>
              <h1 className={styles.h1Year}>- 1930 -</h1>
              <h3 className={styles.h3Year}>CREACIÓN DE LA PLAZA CENTRAL</h3>
              <p className={styles.yearDescription}>
                Antes de su construcción, los habitantes utilizaban el lugar
                para jugar al fútbol. En la década del '30 se construye la
                plaza; posteriormente, la rotonda central, que se utilizaba para
                que tocara la banda local, la cual era subvencionada por la
                municipalidad. Se hacían retretas los domingos por la tarde
              </p>
            </div>
            <HistoryCard
              srcImg="/plaza-circulo-central.jpg"
              imgDescription="Rotonda central de la plaza"
            />
          </div>
          {/* CARD 4 */}
          <div className={styles.cardContainer}>
            <HistoryCard
              srcImg="/municipalidad-sacanta-edificio.jpg"
              imgDescription="Municipalidad hoy en día"
            />
            <div className={styles.infoHistory}>
              <h1 className={styles.h1Year}>- 1969 -</h1>
              <h3 className={styles.h3Year}>
                INAUGURACIÓN DE NUEVO EDIFICIO MUNICIPAL Y CREACIÓN DE NUEVAS
                ESCUELAS Y SERVICIOS PÚBLICOS
              </h3>
              <p className={styles.yearDescription}>
                Inauguración del nuevo edificio municipal, lo que permitió una
                mejora significativa en la gestión y administración de la
                ciudad. Además, se crearon nuevas escuelas y servicios públicos,
                como el hospital y la policía local, mejorando la calidad de
                vida y fomentando el desarrollo social y cultural de la ciudad.
              </p>
            </div>
            <HistoryCard
              srcImg="/escuela-sacanta.jpg"
              imgDescription="Escuela de Sacanta"
            />
          </div>
          {/* CARD 5 */}
          <div className={styles.cardContainer}>
            <HistoryCard
              srcImg="/dispensario-sacanta.jpg"
              imgDescription="Dispensario del pueblo"
            />
            <div className={styles.infoHistory}>
              <h1 className={styles.h1Year}>- 1993 -</h1>
              <h3 className={styles.h3Year}>
                INAUGURACIÓN DEL HOSPITAL MUNICIPAL DE SACANTA
              </h3>
              <p className={styles.yearDescription}>
                Permitió mejorar significativamente la atención médica y de
                salud en la región, y propició el desarrollo de nuevas
                tecnologías y servicios médicos. Además, el hospital se
                convirtió en un importante centro de formación de profesionales
                de la salud, lo que contribuyó al desarrollo educativo y
                económico de la región.
              </p>
            </div>
            <HistoryCard
              srcImg="/sacanta-entrada.jpg"
              imgDescription="Acceso a Sacanta"
            />
          </div>
        </div>
      </div>
    </>
  );
}
