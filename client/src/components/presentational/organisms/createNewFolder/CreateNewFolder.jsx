import React, { useState } from "react";
import { InputField, MyButton } from "../../../presentational";
import * as S from "./styles";
import { Box, Flex } from "../../../presentational";
import { useDispatch, useSelector } from "react-redux";
import { createDir } from "../../../../store/filesSlice";
import { changeModalStateClose } from "../../../../store/modalsDataSlice";

const CreateNewFolder = () => {
  const [dirName, setDirName] = useState('')
  const dispatch = useDispatch();
  const addNewFile = (name, type) => {
    dispatch(createDir({name, type}))
    setDirName('')
    dispatch(changeModalStateClose())
  };

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
            <S.Field>
              <InputField
                placeholder="Enter your folder name"
                value={dirName}
                setValue={setDirName}
              />
            </S.Field>
            <MyButton
          clickButton={() => addNewFile(dirName, "dir")}
          premium="premium"
            >
              Create
            </MyButton>
          </Flex>
        </Flex>
      </Box>
    </S.CreateNewFolderBody>
  );
};

export { CreateNewFolder };
