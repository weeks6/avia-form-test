export type CurrencyCode = "RUB";

export interface AviaService {
  id: string;
  currency: CurrencyCode;
  price: number;
  name: string;
}
