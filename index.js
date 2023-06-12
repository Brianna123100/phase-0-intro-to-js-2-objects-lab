const employee = {
    name: "Bob",
    streetAddress: "Home",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
     employee[key] = value
     return employee
}
function deleteFromEmployeeByKey(employee, key) {
    let copyOfEmployee = {...employee}
    delete copyOfEmployee[key]
    return copyOfEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}