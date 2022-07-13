import React from "react";
import { MyButton } from "../..";
import * as S from "./styles";
import { Box, Flex } from "../..";

const DeleteFolder = (props) => {

  const {deleteFileHandler} = props
  return (
    <S.DeleteFolderBody>
      <Box m={32}>
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"flex-start"}
        >
          <Flex flexDirection={"column"} alignItems={"flex-end"}>
            <S.Field>Do you really want to delete file?</S.Field>
            <MyButton 
            clickButton={deleteFileHandler}
            primary>Delete</MyButton>
          </Flex>
        </Flex>
      </Box>
    </S.DeleteFolderBody>
  );
};

export { DeleteFolder };
