import { Sellable } from "../api/sellable";
import { ThemeEnum } from "../api/enum/themeEnum";

export const cards: Sellable[] = [
  {
    sellable_id: "1",
    image_path:
      "https://www.waifuwatch.com/wp-content/uploads/2020/12/Shining-Fates-Boosters.jpg",
    name: "Shining Fates Booster Pack (1)",
    price: 20,
    description: "",
    stock: 100,
    theme: ThemeEnum.Pokemon,
  },
  {
    sellable_id: "2",
    image_path: `https://pokefeens.com/wp-content/uploads/2019/11/HiddenFatesBoosterPacks-1.png`,
    name: "Hidden Fates Booster Pack (1)",
    price: 18,
    description: "",
    stock: 25,
    theme: ThemeEnum.Pokemon,
  },
  {
    sellable_id: "3",
    image_path:
      "https://pokefeens.com/wp-content/uploads/2020/04/EvolutionsBoosterPacks-1.png",
    name: "Evolutions XY Booster Pack (1)",
    price: 19,
    description: "",
    stock: 13,
    theme: ThemeEnum.Pokemon,
  },
  {
    sellable_id: "4",
    image_path:
      "https://jetpackcomics.com/wp-content/uploads/2020/12/pokemon_tcg_shining_fates_tins_eldegoss_v_boltund_v_cramorant_v-1.jpg",
    name: "Shining Fates Tin (1 Random)",
    price: 100,
    description: "",
    stock: 3,
    theme: ThemeEnum.Pokemon,
  },
  {
    sellable_id: "5",
    image_path:
      "https://www.phdgames.com/wp-content/uploads/2020/09/Pokemon_VividVoltage_02_booster-packs.jpg",
    name: "Vivid Voltage Booster Pack (1)",
    price: 9,
    description: "",
    stock: 36,
    theme: ThemeEnum.Pokemon,
  },
  {
    sellable_id: "6",
    image_path:
      "https://www.titancards.co.uk/image/cache/catalog/products/Sealed_Products/Pokemon_Cosmic_Eclipse_Booster_Packs-1000x1000w.jpg",
    name: "Cosmic Eclipse Booster Pack (1)",
    price: 14,
    description: "",
    stock: 6,
    theme: ThemeEnum.Pokemon,
  },
  {
    sellable_id: "7",
    image_path:
      "https://www.trainerhub.net.au/assets/full/PKMTCG-SSV.jpg?20201218204340",
    name: "Shiny Star V Pack JPN (1)",
    price: 20,
    description: "",
    stock: 20,
    theme: ThemeEnum.Pokemon,
  },
  {
    sellable_id: "10",
    image_path: `https://www.theboardgamehut.co.uk/wp-content/uploads/2020/12/pokemonshiningfatesetb-416x397.png`,
    name: "Shining Fates Elite Trainer Box",
    price: 175,
    description: "",
    stock: 2,
    theme: ThemeEnum.Pokemon,
  },
  {
    sellable_id: "8",
    image_path: `${process.env.PUBLIC_URL}/pokemon.jpg`,
    name: "Hidden Fates Tin (1)",
    price: 70,
    description: "",
    stock: 15,
    theme: ThemeEnum.Pokemon,
  },
  {
    sellable_id: "9",
    image_path: `${process.env.PUBLIC_URL}/pokemon2.jpg`,
    name: "Hidden Fates Charizard Tin",
    price: 80,
    description: "",
    stock: 7,
    theme: ThemeEnum.Pokemon,
  },
  {
    sellable_id: "11",
    image_path:
      "https://images.stockx.com/images/2020-21-Panini-NBA-Hoops-Basketball-Hobby-Box.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1609277695&w=1000",
    name: "NBA Hoop 2020 Hobby Box Pack (24)",
    price: 25.99,
    description: "",
    stock: 24,
    theme: ThemeEnum.Basketball,
  },
  {
    sellable_id: "12",
    image_path:
      "https://prod-paninicx-store.s3.amazonaws.com/catalog/product/2/0/20-21_certified_bk.png",
    name: "NBA Certified 2020 Hobby Box Pack (10)",
    price: 64.99,
    description: "",
    stock: 10,
    theme: ThemeEnum.Basketball,
  },
  {
    sellable_id: "13",
    image_path:
      "https://www.steelcitycollectibles.com/storage/img/uploads/products/full/20-21-DonrussBK-PIS-Hobby-175108.jpg",
    name: "NBA Donruss 2020 Hobby Box Pack (Coming Soon)",
    price: 0,
    description: "",
    stock: 0,
    theme: ThemeEnum.Basketball,
  },
];
