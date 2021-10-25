import React from 'react'
import CommandBar from './commandBar/CommandBar'
import UploadedContent from './commandBar/UploadedContent/UploadedFolders'
import * as S from './styles'

const MainContent = () => {
  return (
    <S.MainContent>
      <CommandBar/>
      <div><UploadedContent/></div>
    </S.MainContent>
  )
}

export default MainContent
