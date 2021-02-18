import NumberFormat from "react-number-format";
import React from "react";

type Props = {
  value: number;
};

export const Price: React.FunctionComponent<Props> = ({ value }) => (
  <NumberFormat
    value={value}
    displayType={"text"}
    thousandSeparator={true}
    prefix={"$"}
    decimalScale={2}
    fixedDecimalScale
  />
);
