import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Typography from 'antd/lib/typography';
import { Button } from 'antd';
import { State } from 'redux/ducks/reducers';
import { removeToken } from 'helpers/utils';
const { Title } = Typography;

function Home() {
  const { name } = useSelector((state: State) => state.user);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate('/login');
  };

  return (
    <>
      <Title level={4}>
        {t('welcome')}, {name}!
      </Title>
      <Button onClick={handleLogout}>{t('logout')}</Button>
    </>
  );
}

export default Home;
