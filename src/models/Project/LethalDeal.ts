import IProject from ".";
import headerImage from "../../../public/img/lethal_deal/1.jpg";
import { ICarouselEntry } from "../../components/Carousel";
import { IProjectLink } from "./index";

const longDescription = `# Technology
The game is written in UE4, using a blend of C++ code and blueprints.

# My Role
I work as the lead gameplay programmer, focusing on implementing our movement, gun play, and card systems.

# Demo Notes
This game is still in early development and is lacking polish in a number of areas.

Keyboard and mouse required.

## Controls
WASD: Move

Space: Jump

Shift: Dash

Control: Crouch/Slide

R: Start/Finish Reload`;

const shortDescription =
  "Final year university game project, written in UE4 with C++.\n“Doom meets Slay the Spire”";

const carouselEntries: ICarouselEntry[] = [
  {
    label: "Story Trailer",
    path: "https://www.youtube.com/embed/Xho2L-HQCvo",
    type: "video",
  },
  {
    label: "Environment",
    path: "/img/lethal_deal/1.jpg",
    type: "image",
  },
  {
    label: "Cards",
    path: "/img/lethal_deal/2.jpg",
    type: "image",
  },
];

const projectLinks: IProjectLink[] = [
  {
    href: "",
    label: "Download Demo",
    icon: "videogame_asset",
  },
];

const LethalDeal: IProject = {
  id: "lethal-deal",
  name: "Lethal Deal",
  headerImage,
  shortDescription,
  longDescription,
  carouselEntries,
  projectLinks,
};

export default LethalDeal;
