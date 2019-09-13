import React from 'react'
import {observer} from 'mobx-react'
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout


const AppLayout = observer((props) => {
  const { children } = props
  return (
    <Layout className='layout'>
      <Header>
        header
            </Header>
      <Content style={{ padding: '50px 50px 0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 580 }}>{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Lucky Draw System ©2019 Created by Ying.Liu</Footer>
    </Layout>
  )
})

export default AppLayout