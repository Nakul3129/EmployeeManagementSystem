package com.employeeManagementSystem.EmployeeManagementSystem.controller;

import com.employeeManagementSystem.EmployeeManagementSystem.dto.EmployeeDto;
import com.employeeManagementSystem.EmployeeManagementSystem.entity.EmployeeEntity;
import com.employeeManagementSystem.EmployeeManagementSystem.repository.EmployeeRepository;
import com.employeeManagementSystem.EmployeeManagementSystem.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
    @Autowired
    private final EmployeeService employeeService;

    // get all employee
    @GetMapping("/employees")
    public ResponseEntity<List<EmployeeDto>> getAllEmployee(){
        List<EmployeeDto> allEmployee = employeeService.getAll();
        return new ResponseEntity<List<EmployeeDto>>(allEmployee, HttpStatus.OK);
    }

    @GetMapping("/employee/{id}")
    public ResponseEntity<EmployeeDto> findEmployeeById(@PathVariable Long id){
        EmployeeDto foundedEmployee = employeeService.getEmployeeById(id);
        return new ResponseEntity<EmployeeDto>(foundedEmployee, HttpStatus.OK);
    }

    // create an employee
    @PostMapping("/createEmployee")
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){
        EmployeeDto createdEmployee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<EmployeeDto>(createdEmployee, HttpStatus.CREATED);
    }


    @PutMapping("/employee/{id}")
    public ResponseEntity<EmployeeDto> updatedEmployee(@PathVariable Long id, @RequestBody EmployeeDto employeeDto){
        EmployeeDto updateEmployee = employeeService.updateEmployeeById(id, employeeDto);
        return new ResponseEntity<EmployeeDto>(updateEmployee, HttpStatus.OK);
    }

    @DeleteMapping("employee/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Long id){
        employeeService.deleteEmployee(id);
        return new ResponseEntity<String>("Employee deleted successfully", HttpStatus.OK);
    }
}
