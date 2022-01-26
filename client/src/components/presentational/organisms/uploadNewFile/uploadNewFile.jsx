import React from "react";
import { DragAndDrop, FileInput, Flex, MyButton } from "../..";
import * as S from "./styles";

const UploadNewFile = (props) => {
  return (
    <S.UploadNewFileBody>
      <div>Upload your file</div>
      <Flex flexDirection={"column"} alignItems={"flex-start"}>
        <S.Field><DragAndDrop /></S.Field>
        <FileInput/>
      </Flex>
    </S.UploadNewFileBody>
  );
  // return (
  //   <div>
  //     <div> Upload here</div>
  //     <DragAndDrop />
  //   </div>
  // );
};

export { UploadNewFile };
