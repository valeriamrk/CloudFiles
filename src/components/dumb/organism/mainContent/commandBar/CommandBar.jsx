import { InfoCircleOutlined, PlusOutlined, SortAscendingOutlined, TableOutlined, UploadOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import * as S from '../styles'

const CommandBar = () => {

  return (
    <S.CommandBar>
    <S.RightButtons>
      <Button icon={<PlusOutlined />}>New file</Button>
      <Button icon={<UploadOutlined />}>Upload</Button>
    </S.RightButtons>
    <S.LeftButtons>
      <Button icon={<SortAscendingOutlined />}>Sort</Button>
      <Button icon={<TableOutlined />}>View</Button>
      <Button icon={<InfoCircleOutlined />}>Info</Button>
    </S.LeftButtons>


    </S.CommandBar>
  )
}

export default CommandBar
