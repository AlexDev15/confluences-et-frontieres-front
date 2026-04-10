export type UploadType =
  | 'partners/logos'
  | 'covers'
  | 'gallery'
  | 'content'
  | 'common/images'
  | 'common/documents';

export interface UploadResponse {
  url: string;
  filename: string;
  mimetype: string;
  size: number;
}

export type MultipleUploadResponse = UploadResponse[];
