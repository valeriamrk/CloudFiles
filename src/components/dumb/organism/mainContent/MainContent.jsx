import React from 'react'
import CommandBar from './commandBar/CommandBar'
import * as S from './styles'

const MainContent = () => {
  return (
    <S.MainContent>
      <CommandBar/>
      <div>content</div>
    </S.MainContent>
  )
}

export default MainContent
