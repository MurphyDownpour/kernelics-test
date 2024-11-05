import React, { useCallback } from "react";
import axios from "axios";
import "./index.css";
import { useState, useEffect, useMemo } from "react";
import { Employee, EmployeeStatus } from "../../types";
import { Container } from "../Container";
import { EmployeeCard } from "../EmployeeCard";
import { Search } from "../Search";

export const Body = () => {
  const [employeeData, setEmployeeData] = useState<Employee[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const dataUrl = 'http://localhost:3002/users';

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get<Employee[]>(dataUrl);
      setEmployeeData(data);
    } catch (error) {
      console.error('Error fetching employee data:', error);
    }
  }, [dataUrl]);

  useEffect(() => {
    fetchData();
  }, []);

  const filteredEmployees = useMemo(() => {
    const loweredSearchTerm = searchText.toLowerCase();

    return employeeData.filter(employee => {
      const matchedName = employee.name.toLowerCase().includes(loweredSearchTerm);
      const matchedStatus = statusFilter === 'all' || employee.status === statusFilter;

      return matchedName && matchedStatus;
    });
  }, [employeeData, searchText, statusFilter]);

  const handleStatusChange = useCallback(async (id: number, newStatus: EmployeeStatus) => {
    try {
      await axios.post<Employee>(`http://localhost:3002/users/${id}`, { status: newStatus });
      
      setEmployeeData(prevData =>
        prevData.map(employee =>
          employee.id === id ? { ...employee, status: newStatus } : employee
        )
      );
    } catch (error) {
      console.error('Error updating employee status:', error);
    }
  }, []);

  return (
    <Container>
      <Search handleSearch={setSearchText} handleFilter={setStatusFilter} />
      <div className="employees">
        {filteredEmployees.map(employee => (
          <EmployeeCard key={employee.id} employee={employee} handleStatusChange={handleStatusChange} />
        ))}
      </div>
    </Container>
  );
};