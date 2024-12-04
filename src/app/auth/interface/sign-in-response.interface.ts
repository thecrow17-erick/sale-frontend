export interface ISignInResponse {
  user:  User;
  token: string;
}

export interface User {
  id:         number;
  name:       string;
  password:   string;
  status:     boolean;
  role:       Role;
  created_at: Date;
  updated_at: Date;
}

export interface Role {
  id:          number;
  name:        string;
  description: string;
  permissions: Permission[];
  status:      boolean;
  created_at:  Date;
  updated_at:  Date;
}

export interface Permission {
  id:   number;
  name: string;
}
