import {
  Button,
  Grid,
  Input,
  MenuItem,
  Select,
  useMediaQuery,
  useTheme,
} from "@12emake/design-system";
import React, { ChangeEvent, useState } from "react";
import { lgSpacing, smSpacing } from "../../../common/spacing";

import { AiFillPicture } from "react-icons/ai";
import { Form } from "../../../components/shared/form";
import { IconContext } from "react-icons/lib";
import { MainContainer } from "../../../components/shared/mainContainer";
import { PackAPI } from "../../../api/pack";
import { Title } from "../../../components/shared/title";
import { lightBlack } from "../../../common/colors";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

// import { useDispatch } from "react-redux";

const AddProduct = () => {
  const [t] = useTranslation();
  const packAPI: PackAPI = new PackAPI();
  // const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { register, handleSubmit, errors } = useForm();
  const [cardTheme, setTheme] = useState("pokemon");
  // const [imageSrc, setImageSrc] = useState<string>();

  const onSubmit = (data: any) => {
    // const login = async () => {
    //   await authenticationAPI.login(loginData).then((data: any) => {
    //     if (data.isError) {
    //       setErrorMessages(data.response);
    //     } else {
    //       dispatch(setLoggedIn(true, data));
    //     }
    //   });
    // };

    // login();
    console.log({ ...data, theme: cardTheme });
  };

  const onChange = (e: any) => {
    const file = e.target.files[0];
    console.log(file);
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);

    const upload = async () => {
      if (file) {
        await packAPI.upload(bodyFormData).then((response: any) => {
          if (!response.isError) {
            console.log(response.response.data);
          }
        });
      }
    };

    upload();
  };

  const handleChangeCategory = (
    event: ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => {
    setTheme(event.target.value as string);
  };

  return (
    <MainContainer $isMobile={isMobile}>
      <Container>
        <Title className="add-product-title">{t("add-product")}</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Grid container className="add-product-container">
            <Grid className="first-line" item xs={4} sm={4} md={4}>
              {t("product-image")}
            </Grid>
            <Grid className="first-line" item xs={8} sm={8} md={8}>
              {t("product-description")}
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <label htmlFor="file-upload" className="custom-file-upload">
                <IconContext.Provider
                  value={{ style: { verticalAlign: "middle" }, size: "40px" }}
                >
                  <AiFillPicture />
                </IconContext.Provider>{" "}
                {t("upload-picture")}
              </label>
              <input
                onChange={onChange}
                accept=".jpg, .png, .jpeg"
                id="file-upload"
                type="file"
              />
            </Grid>
            <Grid item xs={8} sm={8} md={8}>
              <Input
                autoComplete="nope"
                color="secondary"
                error={Boolean(errors.name)}
                name="name"
                type="text"
                label={t("name")}
                variant="outlined"
                inputRef={register({
                  required: true,
                })}
                fullWidth
              />
              {errors.name && (
                <div className="errors">{t("errors-required")}</div>
              )}
              <div className="second-line-description">
                <Select
                  className="select-category"
                  color="primary"
                  value={cardTheme}
                  variant="outlined"
                  label={t("category")}
                  onChange={handleChangeCategory}
                >
                  <MenuItem value="pokemon">{t("pokemon")}</MenuItem>
                  <MenuItem value="basketball">{t("basketball")}</MenuItem>
                  <MenuItem value="baseball">{t("baseball")}</MenuItem>
                  <MenuItem value="hockey">{t("hockey")}</MenuItem>
                  <MenuItem value="football">{t("football")}</MenuItem>
                </Select>
                <div>
                  <Input
                    autoComplete="nope"
                    color="secondary"
                    type="number"
                    name="price"
                    label={t("price")}
                    variant="outlined"
                    error={Boolean(errors.price)}
                    inputRef={register({
                      required: true,
                    })}
                  />
                  {errors.price && (
                    <div className="errors">{t("errors-required")}</div>
                  )}
                </div>
                <div>
                  <Input
                    className="quantity"
                    autoComplete="nope"
                    color="secondary"
                    name="quantity"
                    error={Boolean(errors.quantity)}
                    type="number"
                    label={t("quantity")}
                    variant="outlined"
                    inputRef={register({
                      required: true,
                    })}
                  />
                  {errors.quantity && (
                    <div className="errors">{t("errors-required")}</div>
                  )}
                </div>
              </div>
              <Input
                autoComplete="nope"
                color="secondary"
                name="description"
                error={Boolean(errors.description)}
                type="textarea"
                label={t("description")}
                variant="outlined"
                fullWidth
                inputRef={register({
                  required: true,
                })}
              />
              {errors.description && (
                <div className="errors">{t("errors-required")}</div>
              )}
            </Grid>
          </Grid>
          <div className="form-buttons">
            <Button
              className="cancel"
              color="secondary"
              variant="outlined"
              type="submit"
            >
              {t("cancel")}
            </Button>{" "}
            <Button color="secondary" type="submit">
              {t("publish")}
            </Button>
          </div>
        </Form>
      </Container>
    </MainContainer>
  );
};

const Container = styled.div`
  margin-top: ${smSpacing};

  .add-product-title {
    text-align: center;
  }

  input[type="file"] {
    display: none;
  }

  .add-product-container {
    margin-top: ${lgSpacing};
  }

  .first-line {
    margin-bottom: ${lgSpacing};
  }

  .second-line-description {
    display: flex;

    .select-category {
      width: 50%;
      margin-right: 12px;
    }

    .quantity {
      margin-left: 12px;
    }
  }

  .custom-file-upload {
    border: 1px dashed ${lightBlack};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    cursor: pointer;
    width: 90%;
    height: 280px;
    font-weight: 700;
    svg {
      margin-right: 10px;
    }
  }

  .form-buttons {
    text-align: right;

    .cancel {
      margin-right: 12px;
    }
  }
`;

export default AddProduct;
