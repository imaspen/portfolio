import { ImageProps } from "next/image";
import AocImage from "../../public/img/aoc.png";
import LethalDealImage from "../../public/img/lethal_deal.png";
import LethalDealDescription from "./descriptions/LethalDealDescription";
import PortfolioImage from "../../public/img/portfolio.png";
import OverlordImage from "../../public/img/overlord.png";

export default interface IProject {
  id: string;
  name: string;
  headerImage: StaticImageData;
  headerPosition?: ImageProps["objectPosition"];
  shortDescription: string;
  longDescription?: string;
}

export const Projects: IProject[] = [
  {
    id: "lethal-deal",
    name: "Lethal Deal",
    headerImage: LethalDealImage,
    shortDescription:
      "Final year university game project, written in UE4 with C++.\n“Doom meets Slay the Spire”",
    longDescription: LethalDealDescription,
  },
  {
    id: "portfolio",
    name: "Portfolio",
    headerImage: PortfolioImage,
    headerPosition: "top center",
    shortDescription:
      "The site you’re on right now! I wrote it myself in TypeScript using Next.JS (React Framework) and MUI (Component Library).",
  },
  {
    id: "aoc",
    name: "Advent of Code",
    headerImage: AocImage,
    headerPosition: "bottom center",
    shortDescription:
      "A yearly set of Christmas themed coding challenges, allowing to test my skills in a number of languages.",
  },
  {
    id: "overlord",
    name: "Overlord",
    headerImage: OverlordImage,
    headerPosition: "top center",
    shortDescription:
      "The administrator portal for my current employer, Beacon. Written using a mix of JavaScript and TypeScript, Overlord is a modern React app with a quick development cycle.",
  },
];

const FavoriteProjectIds = ["lethal-deal", "portfolio", "aoc", "overlord"];

export const FavoriteProjects: IProject[] = FavoriteProjectIds.reduce(
  (acc: IProject[], favId: string) => {
    const project = Projects.find(({ id }) => id === favId);
    if (project === undefined) return acc;
    return [...acc, project];
  },
  []
);
