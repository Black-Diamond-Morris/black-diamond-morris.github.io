import { ReactNode } from "react";
import { Fragment } from "react/jsx-runtime";
import { Place, places, spots } from "./places";
import { sides } from "./sides";

interface Event {
  title: string;
  time: string;
  location?: Place;
  details?: ReactNode;
}

const social: Event = {
  title: "Social",
  time: "19:30",
  location: places.house_of_hop,
};

const briefing: Event = {
  title: "Briefing",
  time: "10:00",
  location: places.dolphin_centre,
  details: (
    <>
      <p>Please ask any questions at this point.</p>
      <p>
        We are collecting donations for the Great North Air Ambulance Service.
        Each team will be given a collecting bucket with a QR code attached (for
        which the minimum donation is £1).
      </p>
    </>
  ),
};

function SpotTable(props: { spotIndex: number }) {
  return (
    <table className="m-auto border-collapse">
      <tbody>
        {spots.map((spot) => {
          const spotSides = Object.values(sides).filter(
            (side) => side.spots[props.spotIndex] === spot,
          );
          return (
            spotSides.length > 0 && (
              <tr key={spot.name} className="border-y border-gray-400">
                <td>{spot.link}</td>
                <td className="flex flex-col">
                  {spotSides.map((side) => (
                    <span key={side.name}>{side.name}</span>
                  ))}
                </td>
              </tr>
            )
          );
        })}
      </tbody>
    </table>
  );
}

const spot1: Event = {
  title: "Dance spot 1",
  time: "10:30",
  details: <SpotTable spotIndex={0} />,
};

const spot2: Event = {
  title: "Dance spot 2",
  time: "11:30",
  details: <SpotTable spotIndex={1} />,
};

const spot3: Event = {
  title: "Dance spot 3",
  time: "12:30",
  details: <SpotTable spotIndex={2} />,
};

const lunch: Event = {
  title: "Lunch",
  time: "13:00",
};

const spot4: Event = {
  title: "Dance spot 4",
  time: "14:00",
  details: <SpotTable spotIndex={3} />,
};

const spot5: Event = {
  title: "Dance spot 5",
  time: "14:45",
  details: <SpotTable spotIndex={4} />,
};

const parade: Event = {
  title: "Parade",
  time: "15:30",
  location: places.blackwellgate,
  details: (
    <>
      <p>
        From outside the Cherry Tree on Blackwellgate to the Joseph Pease
        Statue. Running order:
      </p>
      <ol className="m-auto list-decimal">
        <li>{sides.black_diamond.name}</li>
        <li>{sides.aire_valley.name}</li>
        <li>{sides.ripon_city.name}</li>
        <li>{sides.ramshackle.name}</li>
        <li>{sides.redcar.name}</li>
        <li>{sides.white_rose.name}</li>
        <li>{sides.locos.name}</li>
        <li>{sides.jet_set.name}</li>
        <li>{sides.roots.name}</li>
        <li>{sides.harlequin.name}</li>
        <li>{sides.mons_meg.name}</li>
        <li>{sides.black_sheep.name}</li>
        <li>{sides.flag_crackers.name}</li>
        <li>{sides.maltby.name}</li>
        <li>{sides.yorkshire_coast.name}</li>
        <li>{sides.flash_company.name}</li>
        <li>{sides.border_reivers.name}</li>
        <li>{sides.ebor.name}</li>
        <li>{sides.silkstone_greens.name}</li>
        <li>{sides.minster_strays.name}</li>
      </ol>
    </>
  ),
};

const finale: Event = {
  title: "Finale",
  time: "15:50",
  location: places.joseph_pease_statue,
  details: (
    <>
      <p>Running order:</p>
      <ol className="m-auto list-decimal">
        <li>{sides.ripon_city.name}</li>
        <li>{sides.ramshackle.name}</li>
        <li>{sides.redcar.name}</li>
        <li>{sides.roots.name}</li>
        <li>{sides.harlequin.name}</li>
        <li>{sides.mons_meg.name}</li>
        <li>{sides.black_sheep.name}</li>
        <li>{sides.flag_crackers.name}</li>
        <li>{sides.white_rose.name}</li>
        <li>{sides.jet_set.name}</li>
        <li>{sides.yorkshire_coast.name}</li>
        <li>{sides.maltby.name}</li>
        <li>{sides.border_reivers.name} (mass dance)</li>
        <li>{sides.aire_valley.name}</li>
        <li>{sides.flash_company.name}</li>
        <li>{sides.ebor.name}</li>
        <li>{sides.locos.name}</li>
        <li>{sides.minster_strays.name}</li>
        <li>{sides.silkstone_greens.name}</li>
        <li>{sides.black_diamond.name} (mass dance)</li>
      </ol>
      <p>
        If there are team members not dancing, then we would love to have them
        engaging with the crowd and shaking buckets to raise money for the Great
        North Air Ambulance.
      </p>
      <p>
        There will be a post dance session in the {places.house_of_hop.link}{" "}
        which you are welcome to come and join. This will continue into the
        evening though some may break for dinner.
      </p>
    </>
  ),
};

const session: Event = {
  title: "Session",
  time: "After",
  location: places.house_of_hop,
};

const survivors: Event = {
  title: "Survivors",
  time: "11:00",
  location: places.south_park_cafe,
};

const timetable = [
  {
    date: "Friday 10th",
    events: [social],
  },
  {
    date: "Saturday 11th",
    events: [
      briefing,
      spot1,
      spot2,
      spot3,
      lunch,
      spot4,
      spot5,
      parade,
      finale,
      session,
    ],
  },
  {
    date: "Sunday 12th",
    events: [survivors],
  },
];

export function Timetable() {
  return (
    <table>
      <tbody>
        {timetable.map((day) => (
          <Fragment key={day.date}>
            <tr>
              <th colSpan={3}>{day.date}</th>
            </tr>
            {day.events.map((event) => (
              <tr key={event.time + event.title}>
                <td>{event.time}</td>
                <td>{event.title}</td>
                <td>{event.location?.link}</td>
              </tr>
            ))}
          </Fragment>
        ))}
      </tbody>
    </table>
  );
}

export const events = [
  social,
  briefing,
  spot1,
  spot2,
  spot3,
  lunch,
  spot4,
  spot5,
  parade,
  finale,
  session,
  survivors,
];
