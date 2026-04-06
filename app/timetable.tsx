import { ReactNode, useContext } from "react";
import { Fragment } from "react/jsx-runtime";
import { Place, places, spots } from "./places";
import { Side, sides } from "./sides";
import { ChosenSideContext } from "./context";

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
      <p>Ask any questions at this point.</p>
      <p>
        We are collecting donations for the Great North Air Ambulance Service.
        Each team will be given a collecting bucket with a QR code attached (for
        which the minimum donation is £1).
      </p>
      <p>
        Take shelter in bad weather until it clears up. Try not to obscure shop
        entrances or windows.
      </p>
    </>
  ),
};

function SpotTable(props: { spotIndex: number }) {
  const chosenSide = useContext(ChosenSideContext);

  return (
    <table className="m-auto border-collapse">
      <tbody>
        {spots.map((spot) => {
          const spotSides = Object.values(sides).filter(
            (side) => side.spots[props.spotIndex] === spot,
          );
          if (
            spotSides.length === 0 ||
            (chosenSide && !spotSides.includes(chosenSide))
          )
            return null;
          return (
            <tr key={spot.name} className="border-y border-neutral-500">
              <td>
                {spot.link}
                {spot.details && <span className="block">{spot.details}</span>}
              </td>
              <td className="flex flex-col items-start">
                {spotSides.map((side) => (
                  <span
                    className={
                      chosenSide === side
                        ? "rounded-md bg-neutral-800 px-2"
                        : "px-2"
                    }
                    key={side.name}
                  >
                    {side.name}
                  </span>
                ))}
              </td>
            </tr>
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

function RunningOrder(props: { sides: Side[]; massDances?: Side[] }) {
  const chosenSide = useContext(ChosenSideContext);

  return (
    <ol className="m-auto list-decimal">
      {props.sides.map((side) => (
        <li
          key={side.name}
          className={
            chosenSide === side ? "rounded-md bg-neutral-800 px-2" : "px-2"
          }
        >
          {side.name}
          {props.massDances?.includes(side) && <span> (mass dance)</span>}
        </li>
      ))}
    </ol>
  );
}

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
      <RunningOrder
        sides={[
          sides.black_diamond,
          sides.aire_valley,
          sides.ripon_city,
          sides.ramshackle,
          sides.redcar,
          sides.white_rose,
          sides.locos,
          sides.jet_set,
          sides.roots,
          sides.harlequin,
          sides.mons_meg,
          sides.black_sheep,
          sides.flag_crackers,
          sides.maltby,
          sides.yorkshire_coast,
          sides.flash_company,
          sides.border_reivers,
          sides.ebor,
          sides.minster_strays,
          sides.silkstone_greens,
        ]}
      />
    </>
  ),
};

const finale: Event = {
  title: "Finale",
  time: "15:50",
  location: places.joseph_pease_statue,
  details: (
    <>
      <RunningOrder
        sides={[
          sides.ripon_city,
          sides.ramshackle,
          sides.redcar,
          sides.roots,
          sides.harlequin,
          sides.mons_meg,
          sides.black_sheep,
          sides.flag_crackers,
          sides.white_rose,
          sides.jet_set,
          sides.yorkshire_coast,
          sides.maltby,
          sides.border_reivers,
          sides.aire_valley,
          sides.flash_company,
          sides.ebor,
          sides.locos,
          sides.minster_strays,
          sides.silkstone_greens,
          sides.black_diamond,
        ]}
        massDances={[sides.border_reivers, sides.black_diamond]}
      />
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

function TimetableLocation({ event }: { event: Event }) {
  if (event.location !== undefined) {
    return event.location.link;
  }
  const chosenSide = useContext(ChosenSideContext);
  if (chosenSide === undefined) {
    return null;
  }
  if (event.title === "Dance spot 1") {
    return chosenSide.spots[0].link;
  }
  if (event.title === "Dance spot 2") {
    return chosenSide.spots[1].link;
  }
  if (event.title === "Dance spot 3") {
    return chosenSide.spots[2].link;
  }
  if (event.title === "Dance spot 4") {
    return chosenSide.spots[3].link;
  }
  if (event.title === "Dance spot 5") {
    return chosenSide.spots[4].link;
  }
  return null;
}

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
                <td>
                  <TimetableLocation event={event} />
                </td>
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
