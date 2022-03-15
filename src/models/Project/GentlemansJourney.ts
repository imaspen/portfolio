import IProject from ".";
import headerImage from "../../../public/img/gentlemans_journey/2.png";
import { ICarouselEntry } from "../../components/Carousel";
import { IProjectLink } from "./index";

const shortDescription =
  "A 4 day game jam from my second year.\nA roguelike beat 'em up written in Unity with C#.";

const longDescription = `
# My Role
I worked as the lead programmer, implementing most of the gameplay systems, such as the level generation, AI, and player controls.

# Demo Notes
This game features some flashing screens. This may potentially trigger seizures for people with photosensitive epilepsy. Discretion is advised.

The aim is to kill all the enemies on a level, then head down the trapdoor to the second level. At the end of the second level is a boss, which requires you to punch the amulet to spawn the next wave.

## Controls
The menu relies on mouse controls, but the game is played with a controller.

Left stick: Move
Right stick: Aim
Right trigger: Attack
Right bumper: Use door
`;

const carouselEntries: ICarouselEntry[] = [
  {
    type: "image",
    label: "Main Menu",
    path: "/img/gentlemans_journey/1.png",
  },
  {
    type: "image",
    label: "Level 1 Spawn",
    path: "/img/gentlemans_journey/2.png",
  },
  {
    type: "image",
    label: "End of Level 1",
    path: "/img/gentlemans_journey/3.png",
  },
  {
    type: "image",
    label: "Level 2",
    path: "/img/gentlemans_journey/4.png",
  },
];

const projectLinks: IProjectLink[] = [
  {
    href: "https://github.com/imaspen/GentlemansJourney",
    label: "Source Code",
    icon: "github",
  },
  {
    href: "https://1drv.ms/u/s!AsgZwZEOGn4PgtREd2xeydikwbCUBw?e=suwaYn",
    label: "Download Demo",
    icon: "videogame_asset",
  },
];

const GentlemansJourney: IProject = {
  id: "gentlemans-journey",
  name: "Gentleman’s Journey",
  headerImage,
  shortDescription,
  longDescription,
  carouselEntries,
  projectLinks,
};

export default GentlemansJourney;
