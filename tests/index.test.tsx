import { expect, test } from '@rstest/core';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders the main page with player options', () => {
  render(<App />);
  expect(screen.getByText('直播 - 原生')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('输入视频播放地址...')).toBeInTheDocument();
});
