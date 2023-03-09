import { Col, Row } from 'antd';
import React, { FC } from 'react';
import translate from 'src/translate';
import styles from './About.module.scss';

const About: FC = () => {
  return (
    <div className={styles.AboutContainer}>
      <h1>{translate('about.aboutMe')}</h1>
      <Row justify="start" className={styles.InfoContainer} gutter={[0, 24]}>
        <Col xs={24} sm={24} md={10}>
          <img
            src="https://media.licdn.com/dms/image/D4E03AQEKr5jmNxWvhA/profile-displayphoto-shrink_800_800/0/1677791675344?e=1683763200&v=beta&t=nHuLTQP5gUoj1pNDRvgmRPGtSEVN3woSonrAlsVFH3c"
            className={styles.ImgContainer}
          />
        </Col>
        <Col xs={24} sm={24} md={14} className={styles.Descriptions}>
          <h3>{translate('about.myName')}</h3>
          <p>{translate('about.whoAmI')}</p>
          <h3>{translate('about.myCredentialsTitle')}</h3>
          <p>{translate('about.myCredentials')}</p>
          <h3>{translate('about.myWorkExperienceTitle')}</h3>
          <p>{translate('about.myWorkExperience')}</p>
        </Col>
      </Row>
    </div>
  );
};

export default About;
