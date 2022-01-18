import React from "react";
import { Flex, Box } from "../../../presentational";
import * as S from "./styles";

const UnderConstruction = () => {
  return (
    <Box m={24}>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <S.Text>This page is under construction</S.Text>
        <S.Image
          src="http://www.gisgruppen.se/wordpress/wp-content/uploads/2017/04/noun_143954.png"
          alt="page"
        />
      </Flex>
    </Box>
  );
};

export { UnderConstruction };
