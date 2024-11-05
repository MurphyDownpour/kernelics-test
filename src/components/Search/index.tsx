import React from 'react';
import './index.css';
import { EmployeeStatus } from '../../types';

interface SearchProps {
  handleSearch: (value: string) => void;
  handleFilter: (value: string) => void;
}

const statusKeys = Object.keys(EmployeeStatus);
const statusObj = Object.create(EmployeeStatus);

export const Search = ({ handleSearch, handleFilter }: SearchProps) => (
  <div className="search">
      <button className="create-button">Create</button>
      <div className="input-with-select">
          <input type="text" placeholder="Type to search" className="text-input" onChange={(e) => handleSearch(e.target.value)} />
          <select className="select-input" onChange={(e) => handleFilter(e.target.value)}>
              <option value="all">All</option>
              {statusKeys.map(key => (
                <option key={key} value={key.toLowerCase()}>{statusObj[key]}</option>
              ))}
          </select>
      </div>
  </div>
);
