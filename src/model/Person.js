class Person {
	
	constructor(firstName, lastName, email) {
		this._firstName = firstName;
		this._lastName = lastName;
		this._email = email;
	}
	
	getFirstName() {
		return this._firstName;
	}
	
	getLastName() {
		return this._lastName;
	}
	
	getEmail() {
		return this._email;;
	}
	
	getInfo() {
		return "First Name: " +this._firstName+ " Last Name: " +this._lastName+ " Email: " +this._email;
	}
}