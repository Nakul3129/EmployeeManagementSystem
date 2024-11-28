package com.employeeManagementSystem.EmployeeManagementSystem.service;

import com.employeeManagementSystem.EmployeeManagementSystem.dto.EmployeeDto;
import com.employeeManagementSystem.EmployeeManagementSystem.entity.EmployeeEntity;
import com.employeeManagementSystem.EmployeeManagementSystem.exception.ResourceNotFoundException;
import com.employeeManagementSystem.EmployeeManagementSystem.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EmployeeService {

    @Autowired
    private final EmployeeRepository employeeRepository;

    ModelMapper modelMapper = new ModelMapper();


    public List<EmployeeDto> getAll(){
        List<EmployeeEntity> list = employeeRepository.findAll();
        List<EmployeeDto> getAllEmployee = list.stream().map(employee -> modelMapper.map(employee, EmployeeDto.class)).collect(Collectors.toList());
        return getAllEmployee;
    }

    public EmployeeDto createEmployee(EmployeeDto employeeDto){
        EmployeeEntity createdEmployee = modelMapper.map(employeeDto, EmployeeEntity.class);
      EmployeeEntity savedEntity = employeeRepository.save(createdEmployee);
      return modelMapper.map(savedEntity, EmployeeDto.class);
    }

    public EmployeeDto getEmployeeById(Long id){
        EmployeeEntity findEmployee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Id did not found in the database"));
        return modelMapper.map(findEmployee, EmployeeDto.class);
    }

    public EmployeeDto updateEmployeeById(Long id, EmployeeDto employeeDto){
        EmployeeEntity findId = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Id did not found in the database"));
        EmployeeEntity updatedEmployee = modelMapper.map(employeeDto, EmployeeEntity.class);
        updatedEmployee.setId(id);
        EmployeeEntity savedEmployee = employeeRepository.save(updatedEmployee);
        return modelMapper.map(savedEmployee, EmployeeDto.class);
    }

    public void deleteEmployee(Long id){
        employeeRepository.deleteById(id);
     }
}
