import React, { useState, useCallback, useEffect } from 'react';
import { Navigate, Route, useNavigate } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { State } from 'redux/ducks/reducers';
import { updateUser } from 'redux/ducks/user';
import { getToken } from 'helpers/utils';
import { getUser } from 'helpers/api';

function AuthGuard({ children }: { children: React.ReactElement }) {
  const { name } = useSelector((state: State) => state.user, shallowEqual);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = getToken();

  const fetchUser = useCallback(async () => {
    try {
      setIsLoading(true);
      const user = await getUser();
      dispatch(updateUser({ name: user.name }));
      setIsLoading(false);
    } catch (error) {
      navigate('/login');
    }
  }, [dispatch, navigate]);

  useEffect(() => {
    if (!name) fetchUser();
  }, [name, fetchUser]);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return isLoading ? (
    <Spin indicator={<LoadingOutlined style={{ fontSize: '40px' }} spin />} />
  ) : (
    children
  );
}

type Props = {
  path: string;
  element: React.ReactElement;
};
function PrivateRoute({ path, element }: Props) {
  return <Route path={path} element={<AuthGuard>{element}</AuthGuard>} />;
}

export default PrivateRoute;
