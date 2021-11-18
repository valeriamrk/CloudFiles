import React from 'react'
import * as S from './styles'


const FolderListViewItem = (props) => {


  const checkboxActive = () => {
    console.log("checkboxActive")
  }
  return (
    <S.ListStyle onClick={() => checkboxActive()}>
      <S.Checkbox type="checkbox"></S.Checkbox>
      <S.FolderImg  onDoubleClick={() => console.log("openfile")} src="https://s3.amazonaws.com/media-p.slid.es/uploads/644286/images/3450303/folder.png" alt="folder icon"/>
      <div>{props.title}</div>
      <div>{props.modified}</div>
      <div>{props.size}</div>

    </S.ListStyle>
  )
}

export default FolderListViewItem

