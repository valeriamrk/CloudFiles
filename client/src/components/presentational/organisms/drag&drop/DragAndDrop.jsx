import axios from "axios";
import React, { useState } from "react";
import * as S from "./styles";

const DragAndDrop = () => {
  const [drag, setDrag] = useState(false);
  const dragStartHandler = (e) => {
    e.preventDefault();
    setDrag(true);
  };
  const dragLeaveHandler = (e) => {
    e.preventDefault();
    setDrag(false);
  };

  const onDropHandler = (e) => {
    e.preventDefault();
    let files = [...e.dataTransfer.files];
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("userId", 1);
    axios.post("url", formData);
    console.log(files);
    setDrag(false);
  };

  return (
    <div>
      {drag ? (
        <S.DragArea
          onDragStart={(e) => dragStartHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragOver={(e) => dragStartHandler(e)}
          onDrop={(e) => onDropHandler(e)}
        >
          <S.DragText>Drag your file here.</S.DragText>
        </S.DragArea>
      ) : (
        <S.DragZone
          onDragStart={(e) => dragStartHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragOver={(e) => dragStartHandler(e)}
        >
          {/* <S.DragImg src='https://www.pinclipart.com/picdir/big/53-530330_folder-vector-png-new-folder-icon-png-clipart.png' alt='folder'/> */}
          <S.DragImg
            src="http://cdn.onlinewebfonts.com/svg/download_138550.png"
            alt="folder"
          />
          <S.DragText>
            This folder is Empty. Drag files here to upload them to CloudFiles.
          </S.DragText>
        </S.DragZone>
      )}
    </div>
  );
};

export { DragAndDrop };
