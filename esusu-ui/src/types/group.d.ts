type Member = {
  id: string;
  name: string;
  avatarUrl?: string;  // Assuming you have a URL to the avatar image
}

type Group = {
  groupName: string;
  groupId: string;
  category: string;
  members: Member[];
  creator: string; // Note:8 should be string if formatted as currency, otherwise number
  balance: string;
  status: string;
  createdAt: string;
};