import { Checkbox } from 'antd'
import React from 'react'
import * as S from './styles'


const Folder = (props) => {
  return (
    <div>
      <Checkbox/>
      <S.FolderImg src="https://s3.amazonaws.com/media-p.slid.es/uploads/644286/images/3450303/folder.png" alt="folder icon"/>
      <div>{props.name}</div>
      <div>{props.id}</div>
    </div>
  )
}

export default Folder

