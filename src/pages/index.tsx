import { useState } from 'react'
import { Table, Tag, Space, Card, Form, Input, Button } from 'antd';
const Home: React.FC = () => {
  return (
    <Card title= {
      <Form layout="inline" className="searchform">
        <Form.Item label="文章详情" name="fclientCode">
          <Input />
        </Form.Item>
        <Form.Item >
          <Space>
            <Button type="primary">搜索</Button>
            <Button>重置</Button>
            <Button type="primary">新增文章</Button>
          </Space>
        </Form.Item>
      </Form>
    }>
    <div style={{paddingTop: '-100', overflow: 'hidden'}}>
    </div>
    </Card>
  )
}
export default Home