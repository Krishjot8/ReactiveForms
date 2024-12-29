export class User {
    id?: number;              // Optional (auto-generated by backend)
    firstName: string;
    lastName: string;
    emailAddress: string;
    username: string;         // Changed to lowercase for consistency
    password: string;
    confirmPassword: string;
  
    // Constructor to initialize the properties
    constructor(
      firstName: string,
      lastName: string,
      emailAddress: string,
      username: string,
      password: string,
      confirmPassword: string,
      id?: number
    ) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.emailAddress = emailAddress;
      this.username = username;
      this.password = password;
      this.confirmPassword = confirmPassword;
    }
  }