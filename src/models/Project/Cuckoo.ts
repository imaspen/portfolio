import IProject from ".";
import headerImage from "../../../public/img/cuckoo/1.webp";
import { ICarouselEntry } from "../../components/Carousel";
import { IProjectLink } from "./index";

const shortDescription =
  "The third of three game jams from my second year.\nA local multiplayer party game written in UE4 with C++.";

const longDescription = `
# My Role
I worked as the lead gameplay programmer, implementing most of the movement systems and the player abilities.
I also was in charge of ensuring the game worked well in multiplayer.

# Demo Notes
The game is local multiplayer only, and due to time constraints during the game jam process,
whilst it expects the player to have 3 controllers to be connected,
the character selection screen can be skipped by pressing Start on a controller or Shift + Enter on Keyboard.
`;

const carouselEntries: ICarouselEntry[] = [
  {
    label: "Gameplay Trailer",
    path: "https://www.youtube.com/embed/D64hn3h5D6c",
    type: "video",
  },
  {
    label: "Environment",
    path: "/img/cuckoo/1.webp",
    type: "image",
  },
];

const projectLinks: IProjectLink[] = [
  {
    href: "https://1drv.ms/u/s!AsgZwZEOGn4PgtQ7XIzYZtVbsHiGAw?e=6RsOIg",
    label: "Download Demo",
    icon: "videogame_asset",
  },
];

const Cuckoo: IProject = {
  id: "cuckoo",
  name: "Cuckoo",
  headerImage,
  shortDescription,
  longDescription,
  carouselEntries,
  projectLinks,
};

export default Cuckoo;
