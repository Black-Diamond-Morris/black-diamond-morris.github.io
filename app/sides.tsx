import { Place, places } from "./places";

export interface Side {
  name: string;
  spots: [Place, Place, Place, Place, Place];
}

export const sides: Record<string, Side> = {
  aire_valley: {
    name: "Aire Valley",
    spots: [
      places.skinnergate,
      places.market,
      places.houndgate,
      places.coniscliffe,
      places.blackwellgate,
    ],
  },
  black_diamond: {
    name: "Black Diamond",
    spots: [
      places.skinnergate,
      places.market,
      places.houndgate,
      places.coniscliffe,
      places.blackwellgate,
    ],
  },
  black_sheep: {
    name: "Black Sheep",
    spots: [
      places.blackwellgate,
      places.bondgate,
      places.northgate,
      places.market,
      places.coniscliffe,
    ],
  },
  border_reivers: {
    name: "Border Reivers",
    spots: [
      places.skinnergate,
      places.blackwellgate,
      places.bondgate,
      places.northgate,
      places.market,
    ],
  },
  ebor: {
    name: "Ebor",
    spots: [
      places.market,
      places.houndgate,
      places.skinnergate,
      places.bondgate,
      places.northgate,
    ],
  },
  flag_crackers: {
    name: "Flag Crackers of Craven",
    spots: [
      places.northgate,
      places.houndgate,
      places.northgate,
      places.skinnergate,
      places.blackwellgate,
    ],
  },
  flash_company: {
    name: "Flash Company",
    spots: [
      places.skinnergate,
      places.bondgate,
      places.houndgate,
      places.northgate,
      places.coniscliffe,
    ],
  },
  harlequin: {
    name: "Harlequin North West",
    spots: [
      places.skinnergate,
      places.northgate,
      places.market,
      places.skinnergate,
      places.bondgate,
    ],
  },
  jet_set: {
    name: "Jet Set",
    spots: [
      places.blackwellgate,
      places.northgate,
      places.skinnergate,
      places.blackwellgate,
      places.market,
    ],
  },
  locos: {
    name: "Locos in Motion",
    spots: [
      places.blackwellgate,
      places.northgate,
      places.skinnergate,
      places.blackwellgate,
      places.market,
    ],
  },
  maltby: {
    name: "Maltby Sword",
    spots: [
      places.market,
      places.blackwellgate,
      places.houndgate,
      places.market,
      places.skinnergate,
    ],
  },
  minster_strays: {
    name: "Minster Strays",
    spots: [
      places.market,
      places.skinnergate,
      places.coniscliffe,
      places.market,
      places.bondgate,
    ],
  },
  mons_meg: {
    name: "Mons Meg",
    spots: [
      places.blackwellgate,
      places.market,
      places.northgate,
      places.houndgate,
      places.skinnergate,
    ],
  },
  ramshackle: {
    name: "Ramshackle",
    spots: [
      places.blackwellgate,
      places.skinnergate,
      places.market,
      places.northgate,
      places.skinnergate,
    ],
  },
  redcar: {
    name: "Redcar Sword",
    spots: [
      places.northgate,
      places.skinnergate,
      places.bondgate,
      places.blackwellgate,
      places.northgate,
    ],
  },
  ripon_city: {
    name: "Ripon City",
    spots: [
      places.market,
      places.bondgate,
      places.market,
      places.houndgate,
      places.northgate,
    ],
  },
  roots: {
    name: "Roots",
    spots: [
      places.northgate,
      places.market,
      places.blackwellgate,
      places.skinnergate,
      places.houndgate,
    ],
  },
  silkstone_greens: {
    name: "Silkstone Greens",
    spots: [
      places.northgate,
      places.blackwellgate,
      places.coniscliffe,
      places.bondgate,
      places.houndgate,
    ],
  },
  white_rose: {
    name: "White Rose Garland",
    spots: [
      places.market,
      places.skinnergate,
      places.blackwellgate,
      places.coniscliffe,
      places.bondgate,
    ],
  },
  yorkshire_coast: {
    name: "Yorkshire Coast",
    spots: [
      places.skinnergate,
      places.bondgate,
      places.houndgate,
      places.northgate,
      places.coniscliffe,
    ],
  },
};
