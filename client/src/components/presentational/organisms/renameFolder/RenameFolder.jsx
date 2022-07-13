import React from "react";
import { InputField, MyButton } from "../..";
import * as S from "./styles";
import { Box, Flex } from "../..";

const RenameFolder = (props) => {

  const {renameFile} = props
  return (
    <S.RenameFolderBody>
      <Box m={32}>
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"flex-start"}
        >
          <S.Name>New file name:</S.Name>
          <Flex flexDirection={"column"} alignItems={"flex-end"}>
            <S.Field><InputField placeholder="Enter new file name" input/></S.Field>
            <MyButton 
            clickButton={renameFile}
            primary>Save</MyButton>
          </Flex>
        </Flex>
      </Box>
    </S.RenameFolderBody>
  );
};

export { RenameFolder };
