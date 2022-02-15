export type Character = {
  id: number;
  name: string;
  status: string;
  image: string;
};

export type ApiResponse = {
  results: Character[];
};
