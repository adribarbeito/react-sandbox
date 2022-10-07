import { Box, styled } from "@mui/material";
import Header from "./Header";

const MainStyle = styled("main")(({ theme }) => ({
  paddingTop: theme.mixins.toolbar.minHeight,
}));

type Props = {
  children?: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <div>
      <Header />
      <Box pt={12}>{props.children}</Box>
    </div>
  );
}
