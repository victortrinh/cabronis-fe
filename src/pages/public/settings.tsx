import {
  Collapse,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  Switch,
  useMediaQuery,
  useTheme,
} from "@12emake/design-system";
import { FaChevronDown, FaChevronUp, FaGlobeAmericas } from "react-icons/fa";
import React, { MouseEvent, useState } from "react";

import { AiFillFormatPainter } from "react-icons/ai";
import { MainContainer } from "../../components/shared/mainContainer";
import i18next from "i18next";
import { setLanguage } from "../../storage/language";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

type SettingsProps = {
  darkModeOn: boolean;
  toggleDarkModeOn: () => void;
};

const Settings: React.FC<SettingsProps> = ({
  darkModeOn,
  toggleDarkModeOn,
}) => {
  const [openLanguageCollapse, setOpenLanguageCollapse] = useState(false);
  const [t] = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClick = () => {
    setOpenLanguageCollapse(!openLanguageCollapse);
  };

  const changeLanguage = (event: MouseEvent<HTMLLIElement>) => {
    const language = event.currentTarget.id;
    i18next.changeLanguage(language);
    setLanguage(language);
    setOpenLanguageCollapse(false);
  };

  return (
    <MainContainer>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={12} md={6}>
          <StyledList
            subheader={
              !isMobile ? (
                <ListSubheader>{t("settings")}</ListSubheader>
              ) : undefined
            }
          >
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <FaGlobeAmericas />
              </ListItemIcon>
              <ListItemText primary={t("language")} />
              {openLanguageCollapse ? <FaChevronUp /> : <FaChevronDown />}
            </ListItem>
            <Collapse in={openLanguageCollapse} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItem
                  button
                  className="list-item"
                  id="en"
                  onClick={changeLanguage}
                >
                  <ListItemText primary="English" />
                </ListItem>
                <ListItem
                  button
                  className="list-item"
                  id="fr"
                  onClick={changeLanguage}
                >
                  <ListItemText primary="Français" />
                </ListItem>
              </List>
            </Collapse>
            <Divider />
            <ListItem onClick={toggleDarkModeOn}>
              <ListItemIcon>
                <AiFillFormatPainter />
              </ListItemIcon>
              <ListItemText primary={t("dark-mode")} />
              <ListItemSecondaryAction>
                <Switch color="primary" checked={darkModeOn} />
              </ListItemSecondaryAction>
            </ListItem>
          </StyledList>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

const StyledList = styled(List)`
  width: 100%;

  .list-item {
    padding-left: 73px;
  }
`;

export default Settings;
