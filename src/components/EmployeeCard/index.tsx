import React from 'react';
import './index.css';
import { Employee, EmployeeStatus } from '../../types';

interface EmployeeCardProps {
  employee: Employee;
  handleStatusChange: (id: number, status: EmployeeStatus) => void;
}

const statusKeys = Object.keys(EmployeeStatus);
const statusObj = Object.create(EmployeeStatus);

export const EmployeeCard = ({ employee, handleStatusChange }: EmployeeCardProps) => (
  <div className="employee">
    <img src={employee.img} alt={`${employee.name}'s avatar`} className="employee-avatar" />
    <div className="employee-info">
      <span className="employee-name">{employee.name}</span>
      <select 
        className={`employee-status ${employee.status.toLowerCase().replace(' ', '-')}`} 
        value={employee.status} 
        onChange={(e) => handleStatusChange(employee.id, e.target.value as EmployeeStatus)}
      >
        {statusKeys.map(key => (
          <option key={key} value={key.toLowerCase()}>{statusObj[key]}</option>
        ))}
      </select>
    </div>
  </div>
);
