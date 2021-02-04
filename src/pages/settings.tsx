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
} from "@12emake/design-system";
import React, { MouseEvent, useState } from "react";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreMore from "@material-ui/icons/ExpandMore";
import FormatPaintIcon from "@material-ui/icons/FormatPaint";
import LanguageIcon from "@material-ui/icons/Language";
import { MainContainer } from "../components/shared/mainContainer";
import i18next from "i18next";
import { setLanguage } from "../storage/language";
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
            subheader={<ListSubheader>{t("settings")}</ListSubheader>}
          >
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary={t("language")} />
              {openLanguageCollapse ? <ExpandLessIcon /> : <ExpandMoreMore />}
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
            <ListItem>
              <ListItemIcon>
                <FormatPaintIcon />
              </ListItemIcon>
              <ListItemText primary={t("dark-mode")} />
              <ListItemSecondaryAction>
                <Switch
                  edge="end"
                  onChange={toggleDarkModeOn}
                  checked={darkModeOn}
                  inputProps={{ "aria-labelledby": "switch-list-label-wifi" }}
                />
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
