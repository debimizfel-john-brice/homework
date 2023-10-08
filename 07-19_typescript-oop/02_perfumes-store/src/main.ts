
const perfumes = [
    new Perfume({
        name: "Chanel No. 5",
        amount: 50,
        company: "Chanel",
        price: 120,
        suitable_for: "Female"
    }),

    new Perfume({
        name: "Dior Sauvage",
        amount: 30,
        company: "Dior",
        price: 85,
        suitable_for: "Male"
    }),

    new Perfume({
        name: "Versace Bright Crystal",
        amount: 100,
        company: "Versace",
        price: 95,
        suitable_for: "Female"
    }),

    new Perfume({
        name: "Armani Code",
        amount: 75,
        company: "Giorgio Armani",
        price: 110,
        suitable_for: "Male"
    }),

    new Perfume({
        name: "Marc Jacobs Daisy",
        amount: 50,
        company: "Marc Jacobs",
        price: 80,
        suitable_for: "Female"
    }),

    new Perfume({
        name: "Paco Rabanne 1 Million",
        amount: 100,
        company: "Paco Rabanne",
        price: 90,
        suitable_for: "Male"
    }),

    new Perfume({
        name: "Gucci Bloom",
        amount: 75,
        company: "Gucci",
        price: 120,
        suitable_for: "Female"
    }),
];

for (const perfume of perfumes) {
    perfume.display();
}

const employees = [

    new Employee({
        name: "John",
        last_name: "Doe",
        address: "123 Main Street",
        salary: 50000
    }),

    new Employee({
        name: "Jane",
        last_name: "Smith",
        address: "456 Elm Avenue",
        salary: 60000
    }),

    new Employee({
        name: "Michael",
        last_name: "Johnson",
        address: "789 Oak Drive",
        salary: 55000
    }),

    new Employee({
        name: "Emily",
        last_name: "Williams",
        address: "101 Pine Road",
        salary: 52000
    }),

    new Employee({
        name: "Robert",
        last_name: "Brown",
        address: "222 Cedar Lane",
        salary: 58000
    }),

    new Employee({
        name: "Sophia",
        last_name: "Davis",
        address: "333 Maple Street",
        salary: 51000
    }),
];

for (const employee of employees) {
    employee.display();
}