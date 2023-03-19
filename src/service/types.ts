export interface IGoogleBooksResponse {
  items: IBook[];
  kind: string;
  totalItems: number;
}

export interface IBook {
  accessInfo: IAccessInfo;
  etag: string;
  id: string;
  kind: string;
  saleInfo: ISaleInfo;
  searchInfo: { textSnippet: string };
  selfLink: string;
  volumeInfo: IVolumeInfo;
}

interface IAccessInfo {
  accessViewStatus: string;
  country: string;
  embeddable: boolean;
  epub: { isAvailable: boolean };
  pdf: { isAvailable: boolean };
  publicDomain: boolean;
  quoteSharingAllowed: boolean;
  textToSpeechPermission: string;
  viewability: string;
  webReaderLink: string;
}

interface ISaleInfo {
  country: string;
  isEbook: boolean;
  saleability: string;
}

interface IVolumeInfo {
  allowAnonLogging: boolean;
  authors: string[];
  canonicalVolumeLink: string;
  categories: string[];
  contentVersion: string;
  description: string;
  imageLinks: IImagesLinks;
  industryIdentifiers: IIndustryIdentifiers[];
  infoLink: string;
  language: string;
  maturityRating: string;
  pageCount: number;
  panelizationSummary: IPanelizationSummary;
  previewLink: string;
  printType: string;
  publishedDate: string;
  publisher: string;
  readingModes: IReadingModes;
  subtitle: string;
  title: string;
}

interface IIndustryIdentifiers {
  identifier: string;
  type: string;
}

interface IImagesLinks {
  smallThumbnail: string;
  thumbnail: string;
}

interface IPanelizationSummary {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}

interface IReadingModes {
  text: boolean;
  image: boolean;
}
