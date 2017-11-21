export class User {
  id: string;
  username : string;
  password: string;
  email: string;
  role: string;

  //derived class
  showSnackbar: boolean = false;

  constructor(props: any) {
    this.id = props._id;
    this.username = props.username;
    this.email = props.email;
    this.role = props.role;
  }
}
