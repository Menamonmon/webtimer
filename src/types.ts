export type WebsiteItem = {
  id: string;
  websiteUrl: string;
  dateAdded: Date;
  minutesAllowed: number;
  minutesUsed: number;
  lastOpened: Date;
  is_nuclear: boolean; //
  is_atomic: boolean; // permanent blocking
};
