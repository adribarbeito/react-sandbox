import { Box } from "@mui/material";
import Header from "./Header";

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
