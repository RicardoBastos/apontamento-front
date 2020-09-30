export type Response = {
  succeeded: boolean;
  message: string;
  errors: Array<string>;
  totalRecords: number;
  data: any;
};
