import { createServerClient, buildQueryString } from './client';
import type { User, UpdateUserDto } from './types';
import type { PaginatedResponse, PaginationParams } from './types';

export async function getUsers(
  params?: PaginationParams,
  lang?: string,
): Promise<PaginatedResponse<'users', User>> {
  const client = createServerClient(lang);
  return client.get<PaginatedResponse<'users', User>>(
    `/users${buildQueryString(params)}`,
  );
}

export async function getUser(id: string, lang?: string): Promise<User> {
  const client = createServerClient(lang);
  return client.get<User>(`/users/${id}`);
}

export async function updateUser(
  id: string,
  dto: UpdateUserDto,
  lang?: string,
): Promise<User> {
  const client = createServerClient(lang);
  return client.patch<User>(`/users/${id}`, dto);
}
