import React, { FC } from 'react';
import { Button, Row } from 'antd';
import translate from 'src/translate';
import styles from './MyGpaMenu.module.scss';

interface Props {
  gpa: number;
  prettiefiedNotes: string;
  handleClearGpa: () => void;
}
const MyGpaMenu: FC<Props> = (props: Props) => {
  const { gpa, prettiefiedNotes, handleClearGpa } = props;
  const roundedGpa = Math.round(gpa * 100) / 100;

  return (
    <div>
      <div className={styles.YourGpaBox}>
        <h3>{translate('home.yourCalculatedGpa')}</h3>
        <Row justify="center" align="middle">
          <p className={styles.GpaText}>{roundedGpa}</p>
        </Row>
      </div>
      <div className={styles.CurrentGpaNotesContainer}>
        <p>
          {translate('home.usingTheFollowingGrades')}: {prettiefiedNotes}
        </p>
      </div>
      <Button type="primary" onClick={handleClearGpa}>
        {translate('home.calculateAnotherGpaAction')}
      </Button>
    </div>
  );
};

export default MyGpaMenu;
