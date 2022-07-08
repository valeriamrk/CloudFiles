import React, { useState } from "react";
import { InputField, MyButton } from "../../../presentational";
import * as S from "./styles";
import { Box, Flex } from "../../../presentational";
import { useDispatch, useSelector } from "react-redux";
import { createDir } from "../../../../store/filesSlice";
import { changeModalStateClose } from "../../../../store/modalsDataSlice";

const CreateNewFolder = (props) => {
  const {addNewFile} = props
  const [dirName, setDirName] = useState('')
  const dispatch = useDispatch();
  const handleButtonClick = (name, type) => {
    addNewFile(name, type)
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
              input
                placeholder="Enter your folder name"
                value={dirName}
                setValue={setDirName}
              />
            </S.Field>
            <MyButton
          clickButton={() => handleButtonClick(dirName, "dir")}
          primary
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
