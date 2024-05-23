type Card = {
  cardNumber: string;
  cardType: string;
  assignedTo: string;
  userId: string;
  requestedVia: string; // Note:8 should be string if formatted as currency, otherwise number
  status: string;
  dateIssued: string;
};