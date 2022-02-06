export interface Staff {
  id: string;
  companyId: string;
  firstName: string;
  lastName: string;
  fullName: string; // this is used to simplify staff search in filter staff pipe
}
