import { ImageProps } from "next/image";
import AocImage from "../../../public/img/aoc.png";
import PortfolioImage from "../../../public/img/portfolio.png";
import OverlordImage from "../../../public/img/overlord.png";
import { ICarouselEntry } from "../../components/Carousel";
import LethalDeal from "./LethalDeal";
import Cuckoo from "./Cuckoo";
import { ReactNode } from "react";
import { GitHub } from "@mui/icons-material";

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
  shortDescription: string;
  longDescription?: string;
  carouselEntries: ICarouselEntry[];
  projectLinks?: IProjectLink[];
}

export const Projects: IProject[] = [
  LethalDeal,
  {
    id: "portfolio",
    name: "Portfolio",
    headerImage: PortfolioImage,
    headerPosition: "top center",
    shortDescription: "The site you’re on right now! A modern web app.",
    longDescription: "Built using Next.JS and MUI in TypeScript.",
    carouselEntries: [],
    projectLinks: [
      {
        href: "https://github.com/imaspen/portfolio",
        label: "Source Repo",
        icon: "github",
      },
    ],
  },
  {
    id: "overlord",
    name: "Overlord",
    headerImage: OverlordImage,
    headerPosition: "top center",
    shortDescription:
      "The administrator portal for my current employer, Beacon.",
    longDescription:
      "Written using a mix of JavaScript and TypeScript, Overlord is a modern React app with a quick development cycle built using MUI.\n\nNo code or demo is provided due to the code being proprietary",
    carouselEntries: [],
  },
  Cuckoo,
  {
    id: "aoc",
    name: "Advent of Code",
    headerImage: AocImage,
    headerPosition: "bottom center",
    shortDescription:
      "A yearly set of Christmas themed coding challenges, allowing to test my skills in a number of languages.",
    longDescription:
      "I completed both 2020 and 2021 using modern C++, whilst 2018 was completed in Python.\n\nUnfortunately, I didn't finish in 2019, which I started in Haskell, due to time pressures at University, but I hope to go back and complete it after my graduation, as well as the earlier years I’ve yet to complete.",
    carouselEntries: [],
    projectLinks: [
      {
        href: "https://github.com/imaspen/aoc-2018-python",
        label: "2018 Repo",
        icon: "github",
      },
      {
        href: "https://github.com/imaspen/aoc-2019-haskell",
        label: "2019 Repo",
        icon: "github",
      },
      {
        href: "https://github.com/imaspen/aoc-2020-cpp",
        label: "2020 Repo",
        icon: "github",
      },
      {
        href: "https://github.com/imaspen/aoc-2021-cpp",
        label: "2021 Repo",
        icon: "github",
      },
    ],
  },
];

const FavoriteProjectIds = ["lethal-deal", "cuckoo", "portfolio", "overlord"];

export const FavoriteProjects: IProject[] = FavoriteProjectIds.reduce(
  (acc: IProject[], favId: string) => {
    const project = Projects.find(({ id }) => id === favId);
    if (project === undefined) return acc;
    return [...acc, project];
  },
  []
);
