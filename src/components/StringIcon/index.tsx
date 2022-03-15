import { mdiGitlab } from "@mdi/js";
import { GitHub, QuestionMark, VideogameAsset } from "@mui/icons-material";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { ReactElement } from "react";

export interface IStringIconProps {
  iconName: string;
  iconProps?: SvgIconProps;
}

function StringIcon({
  iconName,
  iconProps = {},
}: IStringIconProps): ReactElement {
  switch (iconName) {
    case "videogame_asset":
      return <VideogameAsset {...iconProps} />;
    case "github":
      return <GitHub {...iconProps} />;
    case "gitlab":
      return (
        <SvgIcon {...iconProps}>
          <path d={mdiGitlab} />
        </SvgIcon>
      );
    default:
      return <QuestionMark {...iconProps} />;
  }
}

export default StringIcon;
