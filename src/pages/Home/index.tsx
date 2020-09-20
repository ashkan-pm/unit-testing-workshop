import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from 'antd';
const { Title } = Typography;

function Home() {
  const { t } = useTranslation();
  return <Title level={4}>{t('home')}</Title>;
}

export default Home;
