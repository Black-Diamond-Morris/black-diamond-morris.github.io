"use client";

import Image from "next/image";
import { events, Timetable } from "./timetable";
import { Place, pubs } from "./places";
import { Heading2 } from "./components";
import { useState } from "react";
import { sides } from "./sides";
import { ChosenSideContext } from "./context";

function Logo() {
  return (
    <Image
      src="/icon.png"
      alt=""
      width={705}
      height={646}
      className="max-w-64"
      loading="eager"
    />
  );
}

function PlaceList(props: { places: Place[] }) {
  return (
    <ul>
      {props.places.map((p) => (
        <li key={p.name}>
          {p.link}
          {p.details && <span className="block">{p.details}</span>}
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  const [chosenSideName, setChosenSideName] = useState<string>("");
  const chosenSide = Object.values(sides).find(
    (s) => s.name === chosenSideName,
  );

  return (
    <ChosenSideContext value={chosenSide}>
      <header className="flex flex-col items-center gap-4 self-stretch p-3 text-center">
        <h1 className="text-4xl font-bold">
          Black Diamond Mixed Cotswold Morris
        </h1>
        <p className="flex flex-col">
          <span>Day of Dance</span>
          <span>Saturday, 11th April 2026</span>
          <span>Darlington, UK</span>
        </p>
        <Logo />
      </header>
      <label className="m-auto flex flex-col items-center gap-2">
        <span>Choose a side to show:</span>
        <select
          className="rounded-md border border-neutral-500 px-4 py-2"
          value={chosenSideName}
          onChange={(e) => setChosenSideName(e.target.value)}
        >
          <option value="">All</option>
          {Object.values(sides).map((s) => (
            <option key={s.name} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </label>
      <Heading2>Timetable</Heading2>
      <Timetable />
      {events.map(
        (e) =>
          e.details && (
            <div key={e.title} className="flex flex-col gap-2">
              <Heading2>{e.title}</Heading2>
              <p className="flex justify-center gap-4">
                {e.time}
                {e.location?.link}
              </p>
              {e.details}
            </div>
          ),
      )}
      <Heading2>Food and drink</Heading2>
      <p>
        There are a number of independent restaurants and cafés around the town
        centre. Recommended pubs in the town centre area are:
      </p>
      <PlaceList places={pubs} />
      <p>
        Please ask the bar staff before starting music or singing in pubs other
        than the House of Hop.
      </p>
    </ChosenSideContext>
  );
}
