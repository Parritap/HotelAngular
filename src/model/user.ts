export class User {
    id: number; 
    firstName: string;
    lastName: string;
    email: string;
    private _passwordHash: string; // Store password hash
  
    constructor(id: number, firstName: string, lastName: string, email: string, passwordHash: string) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this._passwordHash = passwordHash;
    }
  
    // Add methods for authentication later, if needed 
  }
  