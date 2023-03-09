import { Col, Row } from 'antd';
import GpaConversionExplanation from 'components/GpaConversionExplanation';
import GpaNoteConverter from 'components/GpaNoteConverter';
import React from 'react';
import translate from 'src/translate';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div>
      <h1>{translate('home.title')}</h1>
      <Row justify="space-between" className={styles.GpaInfoContainer} gutter={[24, 24]}>
        <Col xs={24} md={10}>
          <GpaNoteConverter />
        </Col>
        <Col xs={24} md={14}>
          <GpaConversionExplanation />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
