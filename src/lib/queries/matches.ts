import { Match } from "@/types/match";

export const fetchMatches = async (): Promise<Match[]> => {
  const response = await fetch(
    "https://app.ftoyd.com/fronttemp-service/fronttemp"
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const result = await response.json();
  return result.data.matches;
};
