import { AlignLeftOutlined, DownOutlined, TableOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Button } from 'antd';
import React from 'react'

const DropdownBtnView = () => {

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<TableOutlined />}>
        Tiles
      </Menu.Item>
      <Menu.Item key="2" icon={<AlignLeftOutlined />}>
        List
      </Menu.Item>

    </Menu>
  );
  return (
    <div>
    <Dropdown overlay={menu}>
      <Button icon={<TableOutlined />}>
        View <DownOutlined />
      </Button>
    </Dropdown>
    </div>
  )
}

export default DropdownBtnView






