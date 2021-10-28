import React from 'react'
import * as S from './styles'


const FolderGridViewItem = (props) => {
  return (
    <S.ListStyle>
      <S.FolderImg src="https://s3.amazonaws.com/media-p.slid.es/uploads/644286/images/3450303/folder.png" alt="folder icon"/>
      {/* <div>{props.id}.</div> */}
      <div>{props.name}</div>

    </S.ListStyle>
  )
}

export default FolderGridViewItem

