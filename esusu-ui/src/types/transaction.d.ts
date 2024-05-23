type Transaction = {
  transactionId: string;
  agentName: string;
  agentId: string;
  customerName: string;
  customerId: string;
  amount: string; // Note: should be string if formatted as currency, otherwise number
  paymentType: string;
  status: string;
  createdAt: string;
};