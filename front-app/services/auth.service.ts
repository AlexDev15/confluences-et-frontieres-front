import { createServerClient } from './client';
import type { LoginDto, LoginResponse, CreateUserDto, User } from './types';

export async function login(dto: LoginDto): Promise<LoginResponse> {
  const client = createServerClient();
  return client.post<LoginResponse>('/auth/login', dto);
}

export async function createUser(dto: CreateUserDto, lang?: string): Promise<User> {
  const client = createServerClient(lang);
  return client.post<User>('/auth/users', dto);
}

export async function getMe(lang?: string): Promise<User> {
  const client = createServerClient(lang);
  return client.get<User>('/auth/me');
}

export async function logout(lang?: string): Promise<void> {
  const client = createServerClient(lang);
  return client.post<void>('/auth/logout');
}
