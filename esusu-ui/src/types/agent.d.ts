type Agent = {
  agentName: string;
  agentId: string;
  email: string;
  phone: string;
  agentType: string;
  address: string; // Note: should be string if formatted as currency, otherwise number
  state: string;
  createdAt: string;
};