/**
 * Created by LN on 5/11/2015.
 */
var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500.5
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }
];

function showList() {
    var myTable = '<table class="table" border="1"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th><th>Vizualizare</th><th>Stergere</th></tr>';
    for(var i in employeesList) {
        myTable += '<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'+employeesList[i].phone+''
            +'</td><td>'+employeesList[i].salary+'</td><td>'+ '<button onclick="showEmployeeDetails('+i+')">Vizualizare</button>'
            +'</td><td>'+'<button onclick="deleteEmployee('+i+')">Sterge</button>'+'</td></tr>';
    }
    myTable += '<tr><th></th><th></th><th></th><th></th><th></th><th></th></tr></table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}

function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone, parseFloat(salary)));
    showList();
}

function showSalaryTotal() {
    var TotalSalary = 0.0;
    for(var i in employeesList) {
        var TotalSalary = TotalSalary + employeesList[i].salary;
    }
    var container = document.getElementById('listcontainer');
    container.innerHTML = TotalSalary;
}

function deleteLastEmployee(){
    employeesList.pop();
    showList();
}

function deleteEmployee(i) {
    employeesList.splice(i,1);
    showList();
}

function showEmployeeDetails(i){
    alert(employeesList[i].firstName+' '+employeesList[i].lastName+' '+employeesList[i].phone+'' +
    ' '+employeesList[i].salary);
}


