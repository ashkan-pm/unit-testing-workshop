import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Typography } from 'antd';
import { State } from 'redux/ducks/reducers';
const { Title } = Typography;

function Home() {
  const { name } = useSelector((state: State) => state.user);
  const { t } = useTranslation();

  return (
    <Title level={4}>
      {t('welcome')}, {name}!
    </Title>
  );
}

export default Home;
