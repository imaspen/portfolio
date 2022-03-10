import { ImageProps } from "next/image";
import AocImage from "../../public/img/aoc.png";
import LethalDealImage from "../../public/img/lethal_deal.png";
import LethalDealDescription from "./descriptions/LethalDealDescription";

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
    id: "aoc",
    name: "Advent of Code",
    headerImage: AocImage,
    headerPosition: "bottom center",
    shortDescription:
      "A yearly set of Christmas themed coding challenges, allowing to test my skills in a number of languages.",
  },
  {
    id: "lethal-deal",
    name: "Lethal Deal",
    headerImage: LethalDealImage,
    shortDescription:
      "Final year university game project, written in UE4 with C++.\n“Doom meets Slay the Spire”",
    longDescription: LethalDealDescription,
  },
];

const FavoriteProjectIds = ["aoc", "lethal-deal"];

export const FavoriteProjects: IProject[] = FavoriteProjectIds.reduce(
  (acc: IProject[], favId: string) => {
    const project = Projects.find(({ id }) => id === favId);
    if (project === undefined) return acc;
    return [...acc, project];
  },
  []
);
