import type { ArticleContent } from './articles';
import type { MultilingualContent, PaginationParams } from './api';

export type PartnerType = 'municipality' | 'city';

export interface Coordinates {
  country: MultilingualContent;
  city: MultilingualContent;
  map: {
    longitude: number;
    latitude: number;
  };
}

export interface Partner {
  _id: string;
  userId?: string;
  name: MultilingualContent;
  type: PartnerType;
  image: string;
  description: MultilingualContent;
  email: string;
  phoneNumber?: string;
  coordinates: Coordinates;
  logo: string;
  content: ArticleContent[];
  mediaGallery: string[];
  createdAt: string;
  updatedAt: string;
}

export interface PartnersQueryParams extends PaginationParams {
  type?: PartnerType;
  search?: string;
}

export type CreatePartnerDto = Omit<Partner, '_id' | 'createdAt' | 'updatedAt'>;

export type UpdatePartnerDto = Partial<CreatePartnerDto>;
