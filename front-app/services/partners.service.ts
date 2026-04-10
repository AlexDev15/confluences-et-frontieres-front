import { createServerClient, buildQueryString } from './client';
import type {
  Partner,
  PartnersQueryParams,
  CreatePartnerDto,
  UpdatePartnerDto,
} from './types';
import type { PaginatedResponse } from './types';

export async function getPartners(
  params?: PartnersQueryParams,
  lang?: string,
): Promise<PaginatedResponse<'partners', Partner>> {
  const client = createServerClient(lang);
  return client.get<PaginatedResponse<'partners', Partner>>(
    `/partners${buildQueryString(params)}`,
  );
}

export async function getPartner(id: string, lang?: string): Promise<Partner> {
  const client = createServerClient(lang);
  return client.get<Partner>(`/partners/${id}`);
}

export async function createPartner(
  dto: CreatePartnerDto,
  lang?: string,
): Promise<Partner> {
  const client = createServerClient(lang);
  return client.post<Partner>('/partners', dto);
}

export async function updatePartner(
  id: string,
  dto: UpdatePartnerDto,
  lang?: string,
): Promise<Partner> {
  const client = createServerClient(lang);
  return client.patch<Partner>(`/partners/${id}`, dto);
}

export async function deletePartner(id: string, lang?: string): Promise<void> {
  const client = createServerClient(lang);
  return client.delete<void>(`/partners/${id}`);
}
