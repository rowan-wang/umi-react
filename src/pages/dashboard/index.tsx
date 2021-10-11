import { useState } from 'react'
import { Card, Row, Col, Tooltip } from 'antd';
import styles from './index.less';
import { ExclamationCircleOutlined } from '@ant-design/icons'
const Home: React.FC = () => {
  const rowProps = {
    xs: 24,
    sm: 12,
    md: 12,
    lg: 6,
    xl: 6,
    style: {marginBottom: 10},
  }
  return (
    <Row gutter={16}>
      <Col {...rowProps} span={6}>
        <Card style={{minHeight: 180}} bodyStyle={{ padding: '20px 24px 8px 24px' }} size="small">
          <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
              <div className={styles.cardLeft}>
                <p className={styles.cardTitle}>访问量</p>
                <p className={styles.cardNum}>90%</p>
              </div>
              <div className={styles.cardRight}>
                <Tooltip title="指标说明">
                  <ExclamationCircleOutlined />
                </Tooltip>
              </div>
            </div>
          </div>
        </Card>
      </Col>
      <Col {...rowProps} span={6}>
        <Card style={{minHeight: 180}} size="small" title="评论">

        </Card>
      </Col>
      <Col {...rowProps} span={6}>
        <Card style={{minHeight: 180}} size="small" title="文章">

        </Card>
      </Col>
      <Col {...rowProps} span={6}>
        <Card style={{minHeight: 180}} size="small" title="注册人数">

        </Card>
      </Col>
    </Row>
  )
}
export default Home