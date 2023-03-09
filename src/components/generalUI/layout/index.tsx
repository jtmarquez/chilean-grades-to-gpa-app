import React, { FC } from 'react';
import { Col, Layout as AntdLayout, Menu, Row } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import translate from 'src/translate';
import styles from './Layout.module.scss';
import { Link } from 'react-router-dom';
import useFooterHook from 'src/hooks/useFooter';
import LinkedinLogo from 'src/assets/icons/linkedin.svg';

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = (props: Props) => {
  const { children } = props;
  const { isFooterVisible } = useFooterHook();
  const items = [{ path: '/about', title: 'About' }];

  return (
    <div className={styles.MainContainer}>
      <AntdLayout className={styles.Layout}>
        <Header className={styles.Header}>
          <Menu mode="horizontal" className={styles.Menu}>
            <Menu.Item
              key="AppName"
              title={translate('layout.AppName')}
              className={styles.AppNameMenuItem}
            >
              <Link to="/">{translate('layout.AppName')}</Link>
            </Menu.Item>
            {items.map((item) => (
              <Menu.Item
                key={item.title}
                title={translate(`layout.${item.title}`)}
                className={styles.MenuItem}
              >
                <Link to={item.path}>{translate(`layout.${item.title}`)}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Header>
        <Content className={styles.Content}>{children}</Content>
        {isFooterVisible && (
          <Footer className={styles.Footer}>
            <Row justify="space-between" align="middle" gutter={[0, 18]}>
              <Col>
                <h4>{translate('layout.needHelp')}</h4>
                <Row className={styles.ContactMeSubtitle}>
                  {translate('layout.contactMe')} {process.env.CONTACT_EMAIL}
                </Row>
              </Col>
              <Col className={styles.LinkedinLogoContainer}>
                <a href="https://www.linkedin.com/in/josetomasmarquezbischoff/">
                  <LinkedinLogo />
                </a>
                <a href="https://www.linkedin.com/in/josetomasmarquezbischoff/">
                  {translate('layout.footer')}
                </a>
              </Col>
            </Row>
          </Footer>
        )}
      </AntdLayout>
    </div>
  );
};

export default Layout;
