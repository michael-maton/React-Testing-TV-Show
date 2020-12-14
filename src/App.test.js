import React from 'react';
import {render, screen, wait} from "@testing-library/react";
import App from './App';
import userEvent from '@testing-library/user-event';

import { fetchShow as mockFetchShow } from './api/fetchShow';
// jest.mock('./api/fetchShow');

test('renders without errors', ()=>{
    render(<App />);
});
