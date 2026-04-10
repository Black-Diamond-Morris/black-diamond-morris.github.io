import { TextLink } from "./components";

export class Place {
  constructor(
    public name: string,
    public href: string,
    public details?: string,
  ) {}

  get link() {
    return <TextLink href={this.href}>{this.name}</TextLink>;
  }
}

export const places = {
  bondgate: new Place(
    "Bondgate",
    "https://maps.app.goo.gl/WYcojzhM7unSkv1i6",
    "Outside Rosie's Tavern",
  ),
  blackwellgate: new Place(
    "Blackwellgate",
    "https://maps.app.goo.gl/mFFFYzpERhbToa7QA",
    "Outside The Cherry Tree",
  ),
  coniscliffe: new Place(
    "Coniscliffe Road",
    "https://maps.app.goo.gl/gf9tQ3AnHcP5pYox8",
    "Between Hash and Number Twenty 2",
  ),
  dolphin_centre: new Place(
    "Dolphin Centre",
    "https://maps.app.goo.gl/acy3qpvGcwKqDuRy6",
  ),
  houndgate: new Place(
    "Houndgate",
    "https://maps.app.goo.gl/7Yzh8XSq7AT6Qeh26",
    "Outside House of Hop",
  ),
  house_of_hop: new Place(
    "House of Hop",
    "https://maps.app.goo.gl/HLLbvmMomMpZVt3Q8",
    "Event sponsor serving Black Diamond beer from Three Brothers Brewing (also a sponsor). You are welcome to take in your own food and to start music/songs. Glasses are not permitted to be taken outside.",
  ),
  market: new Place(
    "Indoor Market",
    "https://maps.app.goo.gl/ZtdZzoD3KD9Bk6Wm8",
    "Next to Market Place Fish & Chips",
  ),
  joseph_pease_statue: new Place(
    "Joseph Pease Statue",
    "https://maps.app.goo.gl/H6z63fjkDWB6MDKw7",
  ),
  northgate: new Place(
    "Northgate",
    "https://maps.app.goo.gl/Y1Hwv7ZhFCwHjMLw8",
    "Outside Betfred",
  ),
  number_twenty_2: new Place(
    "Number Twenty 2",
    "https://maps.app.goo.gl/1bxePLjF2qdcED6g6",
  ),
  orb_micropub: new Place(
    "ORB Micropub",
    "https://maps.app.goo.gl/5PAT4LSPPutJdud87",
  ),
  skinnergate: new Place(
    "Skinnergate",
    "https://maps.app.goo.gl/ofux8o4jB8mPcQ8U9",
    "On the corner of Duke Street",
  ),
  south_park_cafe: new Place(
    "South Park Café",
    "https://maps.app.goo.gl/vmHaqKNqD43hNMLp7",
  ),
  the_other_side: new Place(
    "The Other Side",
    "https://maps.app.goo.gl/prc3f8PkBf7g6Xer7",
  ),
  the_quakerhouse: new Place(
    "The Quakerhouse",
    "https://maps.app.goo.gl/Yx3aRFWEAFc3C5ji9",
  ),
  the_vault: new Place(
    "The Vault",
    "https://maps.app.goo.gl/tt7CsjmDXcoiqmFE7",
  ),
  vesuvio: new Place(
    "Vesuvio",
    "https://maps.app.goo.gl/xuNrCmUAyKruhFy48",
    "Event sponsor",
  ),
};

export const pubs = [
  places.house_of_hop,
  places.vesuvio,
  places.the_quakerhouse,
  places.number_twenty_2,
  places.orb_micropub,
  places.the_vault,
  places.the_other_side,
];

export const spots = [
  places.blackwellgate,
  places.bondgate,
  places.coniscliffe,
  places.houndgate,
  places.market,
  places.northgate,
  places.skinnergate,
];
