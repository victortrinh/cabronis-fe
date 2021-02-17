import {
  Button,
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
import { useDispatch, useSelector } from "react-redux";

import { MainContainer } from "../components/shared/mainContainer";
import { NoDecorationLink } from "../components/shared/noDecorationLink";
import { RootState } from "../rootState";
import faq from "../routes/pages/faq";
import { removeCurrentUser } from "../storage/authentication";
import { setLoggedIn } from "../contexts/appContext/actions";
import settings from "../routes/pages/settings";
import signIn from "../routes/pages/authentication/signIn";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Account = () => {
  const { loggedIn } = useSelector((state: RootState) => ({
    loggedIn: state.appContext.loggedIn,
  }));
  const [t] = useTranslation();
  const theme = useTheme();
  const isDark = theme.palette.type === "dark";
  const history = useHistory();
  const dispatch = useDispatch();
  const handleOnClick = useCallback(
    (path: string) => () => history.push(`/${path}`),
    [history]
  );

  const logout = () => {
    dispatch(setLoggedIn(false));
    removeCurrentUser();
  };

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
          </StyledList>
          {!loggedIn ? (
            <NoDecorationLink to={`/${signIn.key}`}>
              <Button color="secondary" variant="contained" fullWidth>
                {t("sign-in")}
              </Button>
            </NoDecorationLink>
          ) : (
            <Button
              onClick={logout}
              color="secondary"
              variant="contained"
              fullWidth
            >
              {t("sign-out")}
            </Button>
          )}
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
  margin-bottom: 24px;

  .list-item {
    cursor: pointer;
  }
`;

export default Account;
