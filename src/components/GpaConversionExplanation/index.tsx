import { Row, Table } from 'antd';
import React from 'react';
import translate from 'src/translate';
import { equivalencyData } from './equivalency.data';
import styles from './GpaConversionExplanation.module.scss';

const GpaConversionExplanation = () => {
  const columns = () => [
    {
      title: translate('home.chileanGradeRangeLabel'),
      dataIndex: 'chileanGradeRange',
      key: 'chileanGradeRange',
    },
    {
      title: translate('home.gpaEquivalentLabel'),
      dataIndex: 'gpaEquivalent',
      key: 'gpaEquivalent',
    },
  ];

  const dataSource = equivalencyData.map((row, idx) => ({ ...row, key: idx }));

  return (
    <div className={styles.ConversionTableContainer}>
      <h3 className={styles.HowIsCalculationMadeTitle}>
        {translate('home.howDoWeCalculate')}
      </h3>
      <p className={styles.CalculationExplanation}>
        {translate('home.calculationExplanation')}
      </p>
      <Table dataSource={dataSource} columns={columns()} pagination={false} />
      <Row className={styles.LiabilityTextContainer}>
        <p>{translate('home.liabilityText')}</p>
      </Row>
    </div>
  );
};

export default GpaConversionExplanation;
