import { Link, useLocation } from "react-router-native";
import StyledText from "./StyledText.jsx";

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation();
  const active = pathname === to;

  return (
    <Link to={to}>
      <StyledText color="white" fontWeight={active && "bold"}>
        {children}
      </StyledText>
    </Link>
  );
};

export default AppBarTab;
