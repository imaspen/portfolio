import { ImageProps } from "next/image";
import AocImage from "../../public/img/aoc.png";
import LethalDealImage from "../../public/img/lethal_deal/1.jpg";
import LethalDealDescription from "./descriptions/LethalDealDescription";
import PortfolioImage from "../../public/img/portfolio.png";
import OverlordImage from "../../public/img/overlord.png";
import { ICarouselEntry } from "../components/Carousel";

export default interface IProject {
  id: string;
  name: string;
  headerImage: StaticImageData;
  headerPosition?: ImageProps["objectPosition"];
  shortDescription: string;
  longDescription?: string;
  carouselEntries: ICarouselEntry[];
}

const entries: ICarouselEntry[] = [
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

export const Projects: IProject[] = [
  {
    id: "lethal-deal",
    name: "Lethal Deal",
    headerImage: LethalDealImage,
    shortDescription:
      "Final year university game project, written in UE4 with C++.\n“Doom meets Slay the Spire”",
    longDescription: LethalDealDescription,
    carouselEntries: entries,
  },
  {
    id: "portfolio",
    name: "Portfolio",
    headerImage: PortfolioImage,
    headerPosition: "top center",
    shortDescription: "The site you’re on right now! A modern web app.",
    carouselEntries: [],
  },
  {
    id: "aoc",
    name: "Advent of Code",
    headerImage: AocImage,
    headerPosition: "bottom center",
    shortDescription:
      "A yearly set of Christmas themed coding challenges, allowing to test my skills in a number of languages.",
    carouselEntries: [],
  },
  {
    id: "overlord",
    name: "Overlord",
    headerImage: OverlordImage,
    headerPosition: "top center",
    shortDescription:
      "The administrator portal for my current employer, Beacon.",
    longDescription:
      "Written using a mix of JavaScript and TypeScript, Overlord is a modern React app with a quick development cycle.",
    carouselEntries: [],
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
