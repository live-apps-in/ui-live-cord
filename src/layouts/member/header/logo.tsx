import { styled } from "@mui/material";
import { projectConfig } from "src/config";
import { AppLogoFullImage } from "src/assets";
import { mediaQuery } from "src/theme";
import { Link, LinkProps } from "react-router-dom";

const StyledLogoWrapper = styled(Link)`
  img {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

interface LINK_PROPS extends Omit<LinkProps, "to"> {
  to?: LinkProps["to"];
}

export const Logo: React.FC<LINK_PROPS> = (props) => {
  return (
    <StyledLogoWrapper to="/" {...props}>
      <img src={AppLogoFullImage} alt={projectConfig.title} />
    </StyledLogoWrapper>
  );
};
