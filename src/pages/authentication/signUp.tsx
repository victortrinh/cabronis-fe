import { AuthenticationAPI, RegisterData } from "../../api/user";
import { Button, Grid, Input } from "@12emake/design-system";
import React, { useState } from "react";

import { ErrorMessages } from "../../components/shared/errorMessages";
import { Form } from "../../components/shared/form";
import { MainContainer } from "../../components/shared/mainContainer";
import { NoDecorationLink } from "../../components/shared/noDecorationLink";
import { Redirect } from "react-router-dom";
import { Title } from "../../components/shared/title";
import signIn from "../../routes/pages/authentication/signIn";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const [t] = useTranslation();
  const { register, handleSubmit, errors } = useForm();
  const [errorMessages, setErrorMessages] = useState();
  const authenticationApi: AuthenticationAPI = new AuthenticationAPI();
  const [registerSuccessful, setRegisterSuccessful] = useState(false);

  const onSubmit = (data: RegisterData) => {
    const register = async () => {
      await authenticationApi.registerUser(data).then((data: any) => {
        if (data.isError) {
          setErrorMessages(data.response);
        } else {
          setRegisterSuccessful(true);
        }
      });
    };

    register();
  };

  if (registerSuccessful) {
    return (
      <Redirect
        to={{ pathname: `/${signIn.key}`, state: { id: "registered" } }}
      />
    );
  }

  return (
    <Container>
      <Title className="title">{t("signUp-title")}</Title>
      <div className="title-description">{t("signUp-description")}</div>
      <Grid container justify="center">
        <Grid item xs={12} sm={12} md={6}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              autoComplete="nope"
              color="secondary"
              type="text"
              name="first_name"
              label={t("firstName")}
              inputRef={register({
                required: true,
              })}
              fullWidth
              error={Boolean(errors.first_name)}
            />
            {errors.first_name && errors.first_name.type === "required" && (
              <div className="errors">{t("errors-required")}</div>
            )}
            <Input
              autoComplete="nope"
              color="secondary"
              type="text"
              name="last_name"
              label={t("lastName")}
              inputRef={register({
                required: true,
              })}
              fullWidth
              error={Boolean(errors.last_name)}
            />
            {errors.last_name && errors.last_name.type === "required" && (
              <div className="errors">{t("errors-required")}</div>
            )}
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
              {t("signUp")}
            </Button>
          </Form>
          {errorMessages && <ErrorMessages>{errorMessages}</ErrorMessages>}
          <div className="already">
            {t("already-account")}{" "}
            <NoDecorationLink to={`/${signIn.key}`}>
              {t("signIn")}
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

export default SignUp;
