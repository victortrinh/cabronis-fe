import {
  Button,
  ButtonProps,
  ThemeProvider,
  useTheme,
} from "@12emake/design-system";

import React from "react";

export const DefaultButton: React.FunctionComponent<ButtonProps> = (props) => {
  const theme = useTheme();

  return (
    <ThemeProvider
      theme={theme.palette.type === "dark" ? "darkDefault" : "default"}
    >
      <Button {...props} />
    </ThemeProvider>
  );
};
