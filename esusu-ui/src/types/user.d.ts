type User = {
  userName: string;
  userId: string;
  role: string;
  email: string;
  phone: string; // Note:8 should be string if formatted as currency, otherwise number
  amount: string;
  state: string;
  createdAt: string;
};