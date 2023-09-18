import { ImageProps } from "next/image";
import OverlordImage from "../../../public/img/overlord.png";
import PostOfficeImage from "../../../public/img/pol.svg";
import PortfolioImage from "../../../public/img/portfolio.png";
import { ICarouselEntry } from "../../components/Carousel";
import Cuckoo from "./Cuckoo";
import GentlemansJourney from "./GentlemansJourney";
import LethalDeal from "./LethalDeal";

export interface IProjectLink {
  href: string;
  label: string;
  icon: string;
  download?: boolean;
}

export default interface IProject {
  id: string;
  name: string;
  headerImage: StaticImageData;
  headerPosition?: ImageProps["objectPosition"];
  headerFit?: ImageProps["objectFit"];
  shortDescription: string;
  longDescription?: string;
  carouselEntries: ICarouselEntry[];
  projectLinks?: IProjectLink[];
}

export const Projects: IProject[] = [
  {
    id: "pol",
    name: "Post Office",
    headerImage: PostOfficeImage,
    headerPosition: "center center",
    headerFit: "contain",
    shortDescription:
      "At Post Office, I have been part of the team working on a major business transformation project.",
    longDescription:
      "Working at Post Office has seen me take a role in developing the software for the Post Office’s next generation of counter terminals, using React Native targeting Android and web.\n\nI have lead the improvements to our testing, build, CI, and CD workflows, seeing build, run, and test times all dramatically improved during my tenure.",
    carouselEntries: [],
  },
  {
    id: "beacon",
    name: "Beacon",
    headerImage: OverlordImage,
    headerPosition: "top center",
    shortDescription:
      "At Beacon, I led the development of the internal administrator portal, Overlord.",
    longDescription:
      "Written using a mix of JavaScript and TypeScript, Overlord was a modern React app built with an agile development cycle built using MUI.",
    carouselEntries: [],
  },
  {
    id: "portfolio",
    name: "Portfolio",
    headerImage: PortfolioImage,
    headerPosition: "top center",
    shortDescription:
      "The site you’re on right now! A modern web app.\nBuilt using Next.JS and MUI in TypeScript.",
    carouselEntries: [],
    projectLinks: [
      {
        href: "https://github.com/imaspen/portfolio",
        label: "Source Repo",
        icon: "github",
      },
    ],
  },
  LethalDeal,
  Cuckoo,
  GentlemansJourney,
];

const FavoriteProjectIds = ["pol", "beacon", "lethal-deal", "cuckoo"];

export const FavoriteProjects: IProject[] = FavoriteProjectIds.reduce(
  (acc: IProject[], favId: string) => {
    const project = Projects.find(({ id }) => id === favId);
    if (project === undefined) return acc;
    return [...acc, project];
  },
  []
);
