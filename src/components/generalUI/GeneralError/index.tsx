import { Row } from 'antd';
import React from 'react';
import translate from 'src/translate';

const GeneralError = () => {
  return (
    <>
      <Row justify="center" align="middle">
        400
      </Row>
      <Row justify="center" align="middle">
        {translate('generalError.error')}
      </Row>
    </>
  );
};

export default GeneralError;
