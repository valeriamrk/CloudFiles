import React from "react";
import { InputField, MyButton } from "../..";
import * as S from "./styles";
import { Box, Flex } from "../..";

const CreateNewFolder = () => {
  return (
    <S.CreateNewFolderBody>
      <Box m={32}>
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"flex-start"}
        >
          <S.Name>New folder</S.Name>
          <Flex flexDirection={"column"} alignItems={"flex-end"}>
            <S.Field><InputField placeholder="Enter your folder name" /></S.Field>
            <MyButton premium="premium">Create</MyButton>
          </Flex>
        </Flex>
      </Box>
    </S.CreateNewFolderBody>
  );
};

export { CreateNewFolder };
