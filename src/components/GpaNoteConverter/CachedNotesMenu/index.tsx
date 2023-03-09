import { Button, Col, Row } from 'antd';
import React, { FC } from 'react';
import translate from 'src/translate';
import styles from './CachedNotesMenu.module.scss';

interface Props {
  handleUpdateNotesFromCache: () => void;
  handleClearNotes: () => void;
}

const CachedNotesMenu: FC<Props> = (props: Props) => {
  const { handleUpdateNotesFromCache, handleClearNotes } = props;

  return (
    <div>
      <h3 className={styles.CachedNotesQuestion}>
        {translate('home.cachedNotesQuestion')}
      </h3>
      <Row justify="start" align="middle" gutter={[24, 24]}>
        <Col>
          <Button type="primary" onClick={handleUpdateNotesFromCache}>
            {translate('home.iWantToUseCache')}
          </Button>
        </Col>
        <Col>
          <Button type="primary" onClick={handleClearNotes}>
            {translate('home.iDontWantToUseCache')}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default CachedNotesMenu;
