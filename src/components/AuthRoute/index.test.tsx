import React from 'react';
import { render } from '@testing-library/react';
import AuthRoute from './index';

test('AuthRoute renders', () => {
  render(<AuthRoute path="/" element={<span>Test</span>} />);
});
