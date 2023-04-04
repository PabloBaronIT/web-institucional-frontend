"use client";
import { useState } from "react";

export function OficinaVirtualButton({ title }) {
  const [oficina, setOficina] = useState(false);

  return <button onClick={() => setOficina(!oficina)}>Ir a {title}</button>;
}
