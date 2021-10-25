import React from 'react'
import Folder from '../../mainContent/commandBar/UploadedContent/Folder'
import * as S from './styles'


const FolderGridView = (props) => {

  const {data} = props;


  return (
    <S.GridView>
    {data.map((element) => <Folder id={element.id} name={element.title}/>)}
  </S.GridView>
  )
}

export default FolderGridView