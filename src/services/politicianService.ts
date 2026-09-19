const API_BASE_URL = "http://localhost:5000";

export interface Politician {
  id: string;
  firstName: string;
  lastName: string;
  birthYear: number | null;
  currentMember: boolean;
  stateCode: string | null;
  imageUrl: string | null;
}

export interface PoliticianOffice {
  id: string;
  name: string;
  level: string;
  branch: string;
  chamber: string | null;
  startDate: string;
  endDate: string | null;
  party: string | null;
}

export interface PoliticianBill {
  id: string;
  congress: number;
  billType: string;
  billNumber: number;
  title: string;
  introducedDate: string | null;
  status: string | null;
  originChamber: string | null;
  summary: string | null;
  policyArea: string | null;
}

export interface PoliticianBillsResponse {
  data: PoliticianBill[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface PoliticianVote {
  id: string;
  vote: string;
  voteId: string;
  congress: number;
  chamber: string;
  voteDate: string | null;
  question: string | null;
  result: string | null;
  billId: string;
  billType: string;
  billNumber: number;
  billTitle: string;
}

export interface PoliticianVotesResponse {
  data: PoliticianVote[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export const getSamplePolitician = async (): Promise<Politician> => {
  const response = await fetch(`${API_BASE_URL}/politicians/sample`);

  if (!response.ok) {
    throw new Error("Failed to fetch sample politician");
  }

  return response.json();
};

export const getPoliticianOffices = async (
  politicianId: string
): Promise<PoliticianOffice[]> => {
  const response = await fetch(
    `${API_BASE_URL}/politicians/${politicianId}/offices`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch politician offices");
  }

  return response.json();
};

export const getPoliticianBills = async (
  politicianId: string,
  page: number,
  limit: number
): Promise<PoliticianBillsResponse> => {
  const response = await fetch(
    `${API_BASE_URL}/politicians/${politicianId}/bills?page=${page}&limit=${limit}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch politician bills");
  }

  return response.json();
};

export const getPoliticianVotes = async (
  politicianId: string,
  page: number,
  limit: number
): Promise<PoliticianVotesResponse> => {
  const response = await fetch(
    `${API_BASE_URL}/politicians/${politicianId}/votes?page=${page}&limit=${limit}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch politician votes");
  }

  return response.json();
};