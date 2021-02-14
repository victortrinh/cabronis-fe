import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@12emake/design-system";
import { FaCogs, FaQuestion } from "react-icons/fa";
import React, { useCallback } from "react";

import { MainContainer } from "../components/shared/mainContainer";
import faq from "../routes/pages/faq";
import settings from "../routes/pages/settings";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Account = () => {
  const [t] = useTranslation();
  const theme = useTheme();
  const isDark = theme.palette.type === "dark";
  const history = useHistory();
  const handleOnClick = useCallback(
    (path: string) => (_: React.MouseEvent<HTMLLIElement, MouseEvent>) =>
      history.push(`/${path}`),
    [history]
  );

  return (
    <MainContainer>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={12} md={6}>
          <StyledList $isDark={isDark}>
            <ListItem
              className="list-item"
              onClick={handleOnClick(settings.key)}
            >
              <ListItemIcon>
                <FaCogs />
              </ListItemIcon>
              <ListItemText primary={t("settings")} />
            </ListItem>
            <Divider />
            <ListItem className="list-item" onClick={handleOnClick(faq.key)}>
              <ListItemIcon>
                <FaQuestion />
              </ListItemIcon>
              <ListItemText primary={t("faq")} />
            </ListItem>
            <Divider />
          </StyledList>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

type StyledListProps = {
  $isDark: boolean;
};

const StyledList = styled(List)<StyledListProps>`
  width: 100%;

  .list-item {
    cursor: pointer;
  }
`;

export default Account;
