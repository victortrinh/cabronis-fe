import { AuthenticationAPI, LoginData } from "../../api/user";
import { Button, Grid, Input } from "@12emake/design-system";
import React, { useState } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ErrorMessages } from "../../components/shared/errorMessages";
import { Form } from "../../components/shared/form";
import { MainContainer } from "../../components/shared/mainContainer";
import { NoDecorationLink } from "../../components/shared/noDecorationLink";
import { RootState } from "../../rootState";
import { SuccessfulMessages } from "../../components/shared/successfulMessages";
import { Title } from "../../components/shared/title";
import { setLoggedIn } from "../../contexts/appContext/actions";
import signUp from "../../routes/pages/authentication/signUp";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const SignIn: React.FC = () => {
  const { loggedIn } = useSelector((state: RootState) => ({
    loggedIn: state.appContext.loggedIn,
  }));
  const location = useLocation<{ id: string }>();
  const [t] = useTranslation();
  const authenticationAPI: AuthenticationAPI = new AuthenticationAPI();
  const { register, handleSubmit, errors } = useForm();
  const [errorMessages, setErrorMessages] = useState();
  const dispatch = useDispatch();

  const onSubmit = (data: LoginData) => {
    const login = async () => {
      await authenticationAPI.login(data).then((data: any) => {
        if (data.isError) {
          setErrorMessages(data.response);
        } else {
          dispatch(setLoggedIn(true, data));
        }
      });
    };

    login();
  };

  if (loggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Title className="title">{t("signIn-title")}</Title>
      <div className="title-description">{t("signIn-description")}</div>
      <Grid container justify="center">
        <Grid item xs={12} sm={12} md={6}>
          {location?.state?.id === "registered" && (
            <SuccessfulMessages>
              {t("successful-registration")}
            </SuccessfulMessages>
          )}
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              autoComplete="nope"
              color="secondary"
              type="text"
              name="email"
              label={t("Email")}
              inputRef={register({
                required: true,
                pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
              })}
              fullWidth
              error={Boolean(errors.email)}
            />
            {errors.email && errors.email.type === "required" && (
              <div className="errors">{t("errors-required")}</div>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <div className="errors">{t("errors-email")}</div>
            )}
            <Input
              autoComplete="new-password"
              color="secondary"
              label={t("password")}
              variant="outlined"
              type="password"
              name="password"
              fullWidth
              inputRef={register({ required: true })}
              error={Boolean(errors.password)}
            />
            {errors.password && errors.password.type === "required" && (
              <div className="errors">{t("errors-required")}</div>
            )}
            <Button color="secondary" type="submit" fullWidth>
              {t("signIn")}
            </Button>
          </Form>
          {errorMessages && <ErrorMessages>{errorMessages}</ErrorMessages>}
          <div className="already">
            {t("no-account")}{" "}
            <NoDecorationLink to={`/${signUp.key}`}>
              {t("signUp")}
            </NoDecorationLink>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

const Container = styled(MainContainer)`
  margin-top: 24px;
  text-align: center;

  .title-description {
    margin-bottom: 24px;
  }

  .already {
    margin-top: 24px;
  }
`;

export default SignIn;
