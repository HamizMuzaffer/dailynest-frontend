export interface UserSignUp {
  email : string,
  username : string,
  password : string
}

export interface loginUser { 
    email? : string,
    username? : string,
    password : string
}

export interface Task {
  user : string,
  title : string,
  description : string,
  priority : string,
  deadline : string,
  isCompleted : boolean,
  createdAt : Date
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    username: string;
    email: string;
  };
}