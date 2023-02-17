export interface MembUser {
  uid: string;
  displayName: string;
  email: string;
  admin: boolean;
  providerId: string;
  phoneNumber: string;
  address: string;
  zonecode: string;
  password: string;
  passwordConfirm: string;
}

export type IMembStateChange = Pick<
  MembUser,
  "uid" | "displayName" | "providerId" | "email" | "admin"
>;

export type IMembCreateEmail = Omit<MembUser, "uid" | "admin" | "providerId">;
