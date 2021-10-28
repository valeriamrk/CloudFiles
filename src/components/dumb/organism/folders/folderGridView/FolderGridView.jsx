import React from 'react'
import FolderGridViewItem from './FolderGridViewItem';
import * as S from './styles'


const FolderGridView = (props) => {

  const {data} = props;


  return (
    <S.GridView>
    {data.map((element) => <FolderGridViewItem id={element.id} name={element.title}/>)}
  </S.GridView>
  )
}

export default FolderGridView