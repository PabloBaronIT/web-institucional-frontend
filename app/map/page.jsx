import Head from "next/head";
import { useClient } from "blitz";
import Map from "./Map";

export default function MapPage() {
  return (
    <>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <Map useClient={client} />
    </>
  );
}
