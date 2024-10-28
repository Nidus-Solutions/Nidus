import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    body: {
      bg: "#EAE0D5",
    },
  },
};

const theme = extendTheme({
  styles,
  config: { initialColorMode: "light", useSystemColorMode: false },
  fonts: { heading: "Poppins", body: "Poppins" },
});
export default theme;
