import { cookies } from 'next/headers';
import { ApiError } from './errors';
import type { ApiResponse, ApiErrorResponse } from '../types/api';

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:8080';

export function buildQueryString(params?: Record<string, unknown> | object): string {
  if (!params) return '';

  const entries = Object.entries(params as Record<string, unknown>).filter(
    ([, value]) => value !== undefined && value !== null && value !== '',
  );

  if (entries.length === 0) return '';

  const searchParams = new URLSearchParams();
  for (const [key, value] of entries) {
    searchParams.set(key, String(value));
  }

  return `?${searchParams.toString()}`;
}

interface HttpClient {
  get<T>(path: string): Promise<T>;
  post<T>(path: string, body?: unknown): Promise<T>;
  patch<T>(path: string, body?: unknown): Promise<T>;
  delete<T>(path: string): Promise<T>;
}

export function createServerClient(lang?: string): HttpClient {
  async function getToken(): Promise<string | undefined> {
    const cookieStore = await cookies();
    return cookieStore.get('auth-token')?.value;
  }

  function getLang(): string | undefined {
    return lang;
  }

  async function request<T>(
    method: string,
    path: string,
    body?: unknown,
  ): Promise<T> {
    const token = await getToken();
    const currentLang = getLang();
    const isFormData = body instanceof FormData;

    const headers: Record<string, string> = {
      Accept: 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    if (currentLang) {
      headers['Accept-Language'] = currentLang;
    }

    if (!isFormData) {
      headers['Content-Type'] = 'application/json';
    }

    const options: RequestInit = {
      method,
      headers,
    };

    if (body !== undefined) {
      options.body = isFormData ? body : JSON.stringify(body);
    }

    const response = await fetch(`${API_BASE_URL}${path}`, options);
    const json = (await response.json()) as ApiResponse<T> | ApiErrorResponse;

    if (!json.success) {
      const errorResponse = json as ApiErrorResponse;
      throw new ApiError(
        errorResponse.error.message,
        response.status,
        errorResponse.error.code,
        errorResponse.error.details,
      );
    }

    return (json as ApiResponse<T>).data;
  }

  return {
    get: <T>(path: string) => request<T>('GET', path),
    post: <T>(path: string, body?: unknown) => request<T>('POST', path, body),
    patch: <T>(path: string, body?: unknown) => request<T>('PATCH', path, body),
    delete: <T>(path: string) => request<T>('DELETE', path),
  };
}
