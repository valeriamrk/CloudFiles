import React from "react";
import { InputField, MyButton } from "../..";
import * as S from "./styles";
import { Box, Flex } from "../..";

const RenameFolder = () => {
  return (
    <S.RenameFolderBody>
      <Box m={32}>
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"flex-start"}
        >
          <S.Name>Rename</S.Name>
          <Flex flexDirection={"column"} alignItems={"flex-end"}>
            <S.Field><InputField placeholder="Enter new name" /></S.Field>
            <MyButton premium="premium">Save</MyButton>
          </Flex>
        </Flex>
      </Box>
    </S.RenameFolderBody>
  );
};

export { RenameFolder };
