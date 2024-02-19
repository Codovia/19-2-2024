let employees = [];

function addEmployee() {
  const id = document.getElementById('employeeId').value;
  const name = document.getElementById('employeeName').value;
  const position = document.getElementById('employeePosition').value;
  const department = document.getElementById('employeeDepartment').value;

  if (id && name && position && department) {
    const employee = { id, name, position, department };
    employees.push(employee);
    displayEmployees();
    clearForm();
  } else {
    alert('Please fill in all fields.');
  }
}

function displayEmployees() {
  const employeeTableBody = document.getElementById('employeeTableBody');
  employeeTableBody.innerHTML = '';

  employees.forEach((employee, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${employee.id}</td>
      <td>${employee.name}</td>
      <td>${employee.position}</td>
      <td>${employee.department}</td>
      <td>
        <button type="button" class="btn btn-warning btn-sm" onclick="editEmployee(${index})">Edit</button>
        <button type="button" class="btn btn-danger btn-sm" onclick="removeEmployee(${index})">Remove</button>
      </td>
    `;
    employeeTableBody.appendChild(row);
  });
}

function removeEmployee(index) {
  employees.splice(index, 1);
  displayEmployees();
}

function editEmployee(index) {
  const employee = employees[index];
  document.getElementById('employeeId').value = employee.id;
  document.getElementById('employeeName').value = employee.name;
  document.getElementById('employeePosition').value = employee.position;
  document.getElementById('employeeDepartment').value = employee.department;

  // Remove the edited employee from the array
  employees.splice(index, 1);

  // Update the display
  displayEmployees();
}

function clearForm() {
  document.getElementById('employeeId').value = '';
  document.getElementById('employeeName').value = '';
  document.getElementById('employeePosition').value = '';
  document.getElementById('employeeDepartment').value = '';
}
