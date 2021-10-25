import { Checkbox } from 'antd'
import React from 'react'
import Folder from '../../mainContent/commandBar/UploadedContent/Folder';
import * as S from './styles'


const FolderListView = (props) => {

    const {data} = props;

    return (
      <S.ListView>
      {data.map((element) => <Folder id={element.id} name={element.title}/>)}
    </S.ListView>
    )
  }


export default FolderListView
