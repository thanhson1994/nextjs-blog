import React from 'react';
import { Menu } from 'antd';
import Link from 'next/link'

const NavBar = () => {
  return (
      <Menu mode="horizontal" theme="dark">
      <Menu.Item
        key="Home"
      >
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item
        key="POSTS"
      >
        <Link href="/posts/first-post">Todos</Link>
      </Menu.Item>
     
    </Menu>
    // <div>NavBar </div>
  );
};

export default NavBar;

