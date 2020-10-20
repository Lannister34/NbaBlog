export interface Team {
  city: string;
  fullName: string;
  teamId: string;
  nickname: string;
  logo: string;
  shortName: string;
  allStar: string;
  nbaFranchise: string;
  leagues: Record<string, Record<string, string>>;
}
