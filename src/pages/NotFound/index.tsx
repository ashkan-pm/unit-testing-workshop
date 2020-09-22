import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from 'antd/lib/typography';
const { Title } = Typography;

function NotFound() {
  const { t } = useTranslation();
  return <Title level={4}>{t('notFound')}</Title>;
}

export default NotFound;
