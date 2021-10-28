import React from 'react'
import CommandBar from './commandBar/CommandBar'
import UploadedFolders from './commandBar/UploadedContent/UploadedFolders'
import * as S from './styles'

const MainContent = () => {
  return (
    <S.MainContent>
      <CommandBar/>
      <UploadedFolders/>
    </S.MainContent>
  )
}

export default MainContent
