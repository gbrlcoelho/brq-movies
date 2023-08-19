export interface User {
  id: string;
  userName: string;
}

export interface UserAuthenticationResponse {
  user: User;
}

export interface LoginPayload {
  userName: string;
  password: string;
}
