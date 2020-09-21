import React from 'react';
import { Typography, notification } from 'antd';
import { useTranslation } from 'react-i18next';
const { Text } = Typography;

type Props = {
  translationKey: string;
};
function ErrorTranslation({ translationKey }: Props) {
  const { t } = useTranslation();

  return <Text>{t(translationKey)}</Text>;
}

function networkErrorNotification(error: string) {
  switch (error) {
    case '400':
      notification.error({
        message: <ErrorTranslation translationKey="yourFault" />,
        description: <ErrorTranslation translationKey="yourFaultDescription" />
      });
      break;

    case '401':
      notification.error({
        message: <ErrorTranslation translationKey="unauthorized" />,
        description: <ErrorTranslation translationKey="unauthorizedDescription" />
      });
      break;

    default:
      notification.error({
        message: <ErrorTranslation translationKey="crap" />,
        description: <ErrorTranslation translationKey="crapDescription" />
      });
      break;
  }
}

export { networkErrorNotification };
export default ErrorTranslation;
