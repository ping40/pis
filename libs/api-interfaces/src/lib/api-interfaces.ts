export interface Message {
  message: string;
}

export interface UserData {
  id: number;
  name: string;
  token: string;
}

export interface UserRO {
  user: UserData;
}