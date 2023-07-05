interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Besthor",
  lastName: "Igbe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Blessedb",
  age: 22,
  location: "Los Angeles",
};

const studentsList: Student[] = [student1, student2];

function createTable(): void {
  const table = document.createElement("table");
  const tableHead = document.createElement("thead");
  const tableBody = document.createElement("tbody");

  const headerRow = document.createElement("tr");
  const firstNameHeader = document.createElement("th");
  const locationHeader = document.createElement("th");

  firstNameHeader.textContent = "First Name";
  locationHeader.textContent = "Location";

  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  tableHead.appendChild(headerRow);
  table.appendChild(tableHead);

  studentsList.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}

createTable();

