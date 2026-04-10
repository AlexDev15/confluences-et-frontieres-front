export type UserRole = 'ADMIN' | 'PARTNER';

export interface User {
  _id: string;
  email: string;
  username: string;
  role: UserRole;
  partnerId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface CreateUserDto {
  email: string;
  username: string;
  password: string;
  role: UserRole;
  partnerId?: string;
}

export type UpdateUserDto = Partial<
  Pick<User, 'email' | 'username'> & { password: string }
>;
