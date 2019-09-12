import React from 'react'
import { observable } from "mobx";
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout


const AppLayout = observable((props) => {
  const { children } = props
  return (
    <Layout className='layout'>
      <Header>
        header
            </Header>
      <Content>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Lucky Draw System ©2019 Created by Ying.Liu</Footer>
    </Layout>
  )
})

export default AppLayout