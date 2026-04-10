export type Lang = 'fr' | 'en' | 'pt' | 'it' | 'gl';

export type MultilingualContent = Partial<Record<Lang, string>>;

export interface ApiResponse<T> {
  success: true;
  data: T;
  message?: string;
}

export interface ApiErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: Record<string, unknown>;
  };
}

export interface PaginationMeta {
  currentPage: number;
  totalPages: number;
  limit: number;
  [key: string]: number;
}

export type PaginatedResponse<K extends string, T> = {
  [P in K]: T[];
} & {
  pagination: PaginationMeta;
};

export interface PaginationParams {
  page?: number;
  limit?: number;
}
