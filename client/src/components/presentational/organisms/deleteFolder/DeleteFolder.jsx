import React from "react";
import { MyButton } from "../..";
import * as S from "./styles";
import { Box, Flex } from "../..";

const DeleteFolder = () => {
  return (
    <S.DeleteFolderBody>
      <Box m={32}>
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"flex-start"}
        >
          <S.Name>Delete</S.Name>
          <Flex flexDirection={"column"} alignItems={"flex-end"}>
            <S.Field>Do you really want to delete file?</S.Field>
            <MyButton premium="premium">Delete</MyButton>
          </Flex>
        </Flex>
      </Box>
    </S.DeleteFolderBody>
  );
};

export { DeleteFolder };
