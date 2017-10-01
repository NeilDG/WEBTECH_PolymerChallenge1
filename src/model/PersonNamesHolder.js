var sharedInstance = null;

class PersonNamesHolder {
	
	constructor() {
		 this._data = [];	 
		 sharedInstance = this;
	}
	
	static getInstance() {
		if(sharedInstance == null) {
			sharedInstance = new PersonNamesHolder();
		}
		
		return sharedInstance;
	}
	
	setSelectorMenu(selectorMenu, ironPageMenu) {
		this._selectorMenu = selectorMenu;
		this._ironPageMenu = ironPageMenu;
	}
	
	add(person) {
		this._data.push(person);
		var buttonElement = document.createElement('a');
		buttonElement.innerHTML = person.getLastName();
		buttonElement.href = "person-view";
		this._selectorMenu.appendChild(buttonElement);
		
		var viewElement = document.createElement('my-person-view');
		this._ironPageMenu.appendChild(viewElement);
	}
	
	get(index) {
		return this._data[index];
	}
	
	getDataLength() {
		return this._data.length;
	}
}