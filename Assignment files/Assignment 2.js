class Address {
    constructor(street, city, zip) {
        this.street = street;
        this.city = city;
        this.zip = zip;
        Object.freeze(this); // Freezing will make this immutable.
    }
}

class ImmutableEmployee {
    constructor(name, id, dateOfJoining, addresses) {
        if (!name || !id || !dateOfJoining || !addresses) {
            throw new Error("All fields are required");
        }

        this.name = name;
        this.id = id;
        this.dateOfJoining = new Date(dateOfJoining.getTime()); //Created a new date instance here.
        
        this.addresses = addresses.map(addr => new Address(addr.street, addr.city, addr.zip));

        
        Object.freeze(this);
    }

    
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getDateOfJoining() {
        return new Date(this.dateOfJoining.getTime()); 
    }

    getAddresses() {
        return this.addresses.map(addr => new Address(addr.street, addr.city, addr.zip)); 
    }
}

const addresses = [
    new Address("123 Main St", "Hyderabad", "500089"),
    new Address("456 St", "Mumbai", "400001")
];

const emp = new ImmutableEmployee("Ibaad Ahmed", "E123", new Date("2026-05-01"), addresses);


emp.name = "Ibaad Ahmed"; 
emp.addresses[0].city = "Hyderabad";

console.log(emp.getName());
console.log(emp.getId()); 
console.log(emp.getDateOfJoining()); 
console.log(emp.getAddresses()); 
