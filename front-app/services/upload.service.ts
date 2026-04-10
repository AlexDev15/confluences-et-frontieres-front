import { createServerClient } from './client';
import type { UploadResponse, UploadType, MultipleUploadResponse } from './types';

export async function uploadPartnerLogo(
  file: File,
  lang?: string,
): Promise<UploadResponse> {
  const client = createServerClient(lang);
  const formData = new FormData();
  formData.append('file', file);
  return client.post<UploadResponse>('/upload/partner/logo', formData);
}

export async function uploadCover(
  file: File,
  lang?: string,
): Promise<UploadResponse> {
  const client = createServerClient(lang);
  const formData = new FormData();
  formData.append('file', file);
  return client.post<UploadResponse>('/upload/cover', formData);
}

export async function uploadGallery(
  files: File[],
  lang?: string,
): Promise<MultipleUploadResponse> {
  const client = createServerClient(lang);
  const formData = new FormData();
  for (const file of files) {
    formData.append('files', file);
  }
  return client.post<MultipleUploadResponse>('/upload/gallery', formData);
}

export async function uploadContent(
  file: File,
  lang?: string,
): Promise<UploadResponse> {
  const client = createServerClient(lang);
  const formData = new FormData();
  formData.append('file', file);
  return client.post<UploadResponse>('/upload/content', formData);
}

export async function deleteUpload(
  type: UploadType,
  filename: string,
  lang?: string,
): Promise<void> {
  const client = createServerClient(lang);
  return client.delete<void>(`/upload/${type}/${filename}`);
}
