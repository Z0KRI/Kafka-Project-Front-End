export interface IResponseAPI {
  http: HTTP;
  meta?: Pages;
}

export interface HTTP {
  status: number;
  message: string;
  method: string;
  success: boolean;
}

export interface Pages {
  currentPage: number;
  nextPage: number;
  totalPages: number;
  perPage: number;
  totalRecords: number;
  prevPage: number;
}
