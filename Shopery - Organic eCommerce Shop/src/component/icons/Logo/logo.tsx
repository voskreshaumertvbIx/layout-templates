import { FC } from "react";
type LogoProps = {
  className?: string;
};
const Logo: FC<LogoProps> = ({ className }) => {
  return <img className={className} src="./img/icon/eLogo.png" alt="logo" />;
};

export default Logo;
