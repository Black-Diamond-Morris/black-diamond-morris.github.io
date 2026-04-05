import Image from "next/image";
import { events, Timetable } from "./timetable";
import { Place, pubs, spots } from "./places";
import { Heading2 } from "./components";

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
  return (
    <>
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
      <Heading2>Timetable</Heading2>
      <Timetable />
      <Heading2>Dance Spots</Heading2>
      <PlaceList places={spots} />
      <p>
        Please take shelter in bad weather until it clears up. Try not to
        obscure shop entrances or windows.
      </p>
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
    </>
  );
}
