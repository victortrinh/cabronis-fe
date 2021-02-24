import {
  Button,
  Input,
  Loading,
  MenuItem,
  Select,
  useMediaQuery,
  useTheme,
} from "@12emake/design-system";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MainContainer } from "../../../components/shared/mainContainer";
import { NoDecorationLink } from "../../../components/shared/noDecorationLink";
import { PackAPI } from "../../../api/pack";
import { Price } from "../../../components/shared/price";
import { RootState } from "../../../rootState";
import { Title } from "../../../components/shared/title";
import addProduct from "../../../routes/pages/seller/addProduct";
import { setPacks } from "../../../contexts/packContext/actions";
import { smSpacing } from "../../../common/spacing";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Sellable = () => {
  const [t] = useTranslation();
  const packAPI: PackAPI = new PackAPI();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState<string>();
  const [category, setCategory] = useState<string>("none");
  const { packs } = useSelector((state: RootState) => ({
    packs: state.packContext.packs,
  }));

  useEffect(() => {
    const fetchData = async () => {
      const data = await packAPI.getAll();

      if (!data.isError) {
        dispatch(setPacks(data.response.data));
      }
    };

    fetchData().then(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading open={true} />;
  }

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;
    setSearchTerm(text);
  };

  const handleChangeCategory = (
    event: ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => {
    setCategory(event.target.value as string);
  };

  const filteredPacks = packs
    .filter((x) =>
      searchTerm
        ? x.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
        : x
    )
    .filter((x) =>
      category !== "Categories"
        ? x.category?.toLowerCase() === category.toLowerCase()
        : x
    );

  return (
    <MainContainer $isMobile={isMobile}>
      <Container>
        <Title className="catalog-title">{t("catalog")}</Title>
        <div className="filter-container">
          <Input
            className="search"
            autoComplete="nope"
            color="secondary"
            type="text"
            label={t("search")}
            variant="outlined"
            onChange={handleChangeSearch}
          />
          <Select
            className="select-category"
            color="primary"
            value={category}
            variant="outlined"
            label={t("category")}
            onChange={handleChangeCategory}
          >
            <MenuItem value="none">{t("none")}</MenuItem>
            <MenuItem value="pokemon">{t("pokemon")}</MenuItem>
            <MenuItem value="basketball">{t("basketball")}</MenuItem>
            <MenuItem value="baseball">{t("baseball")}</MenuItem>
            <MenuItem value="hockey">{t("hockey")}</MenuItem>
            <MenuItem value="football">{t("football")}</MenuItem>
          </Select>
          <NoDecorationLink
            className="add-product-button"
            to={`/${addProduct.key}`}
          >
            <Button color="secondary" variant="contained">
              {t("add-product")}
            </Button>
          </NoDecorationLink>
        </div>
        <div className="sellables-table">
          <table>
            <tr>
              <th>{t("products")}</th>
              <th>{t("category")}</th>
              <th>{t("stock")}</th>
              <th>{t("price")}</th>
            </tr>
            {filteredPacks.length <= 0 ? (
              <tr>
                <td className="empty" colSpan={4}>
                  {t("empty-products")}
                </td>
              </tr>
            ) : (
              filteredPacks.map((pack) => (
                <tr key={pack.pack_id}>
                  <td className="product">
                    <div>
                      <img src={pack.image_path} alt={pack.name} />
                    </div>
                    <div className="product-details">
                      <div className="product-name">{pack.name}</div>
                      <div>{pack.description}</div>
                    </div>
                  </td>
                  <td>{pack.category}</td>
                  <td>{pack.stock}</td>
                  <td>
                    <Price value={pack.price} />
                  </td>
                </tr>
              ))
            )}
          </table>
        </div>
        {packs.map((pack) => pack.image_path)}
      </Container>
    </MainContainer>
  );
};

const Container = styled.div`
  .catalog-title {
    margin-top: ${smSpacing};
    text-align: center;
  }

  .filter-container {
    display: flex;
    align-items: center;

    .search {
      width: 40%;
    }

    .select-category {
      margin-left: 16px;
      width: 20%;
    }

    .add-product-button {
      margin-left: auto;
    }
  }

  .sellables-table {
    margin-top: 24px;

    .empty {
      text-align: center;
    }
  }
`;

export default Sellable;
