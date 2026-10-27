export type LabPhoto = {
  id:string;
  title:string;
  image:string;
  imageAlt:string;
  date?:string;
  caption?:string;
  imagePosition?:string;
};

export type CompetitionAward = {
  id:string;
  competition:string;
  prize:string;
  project:string;
  year:number;
  team?:string;
  certificate?:string;
};

// Add confirmed English captions and original activity photos here.
// Empty collections do not publish an empty Lab Life page or navigation item.
export const labPhotos:LabPhoto[] = [];

// Competition participation alone is not an award. Populate only with confirmed results.
export const competitionAwards:CompetitionAward[] = [];

export const hasLabLifeContent = labPhotos.length > 0 || competitionAwards.length > 0;
