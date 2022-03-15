import {
  GitHub,
  QuestionMark,
  SvgIconComponent,
  VideogameAsset,
} from "@mui/icons-material";

function stringToIcon(iconName: string): SvgIconComponent {
  switch (iconName) {
    case "videogame_asset":
      return VideogameAsset;
    case "github":
      return GitHub;
    default:
      return QuestionMark;
  }
}

export default stringToIcon;
