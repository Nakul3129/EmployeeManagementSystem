package com.employeeManagementSystem.EmployeeManagementSystem.repository;

import com.employeeManagementSystem.EmployeeManagementSystem.entity.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {

}
