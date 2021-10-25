import { Checkbox } from 'antd'
import React from 'react'
import * as S from './styles'


const Folder = (props) => {
  return (
    <S.ListStyle>
      <Checkbox/>
      <S.FolderImg src="https://s3.amazonaws.com/media-p.slid.es/uploads/644286/images/3450303/folder.png" alt="folder icon"/>
      <div>{props.id}.</div>
      <div>{props.name}</div>

    </S.ListStyle>
  )
}

export default Folder

