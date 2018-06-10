export interface AuthError {
  code: number;
  message: string;
  status: string;
}
export interface AuthResponse {
  error: AuthError;
}
export interface Result {
  name: string;
  description: string;
  image: Image;
  detailedDescription: DetailedDescription;
}
export interface Image {
  contentUrl: string;
  url: string;
}
export interface DetailedDescription {
  articleBody: string;
  url: string;
}
export interface ItemListInterface {
  result: Result;
  resultScore: number;
}
export interface SearchResponse {
  itemListElement: ItemListInterface[];
}


