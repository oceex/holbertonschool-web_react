interface Student{
    firstName: string;
    lastname: string;
    age: number;
    location: string;
}
const student1:Student = {
    firstName: "John",
    lastname: "Doe",
    age: 5,
    location: "Silva",
}
const student2: Student = {
    firstName: "Leen",
    lastname: "Yosef",
    age: 5,
    location: "Riyadh",
}
const studentsList: Student[] = [
    student1,student2
]

const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const firstNameCell: HTMLTableCellElement = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);