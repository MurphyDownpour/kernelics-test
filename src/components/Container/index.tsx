import React, { ReactElement } from 'react';
import './index.css';

export const Container = ({ children }: { children: ReactElement[] }) => (
  <div className="container">
    {children}
  </div>
);