export interface HatNft {
  type: string;
  data: HatData;
}

export interface HatViewData {
  details: string;
  maxSupply: number;
  supply: number;
  eligibility: string;
  toggle: string;
  imageUri: string;
  numChildren: number;
  mutable: boolean;
  active: boolean;
}

export interface HatData {
  authorities: Authority[];
  description: string;
  eligibility: CriteriaAndManual;
  guilds: any[];
  name: string;
  responsibilities: any[];
  spaces: any[];
  toggle: CriteriaAndManual;
}

export interface Authority {
  description: string;
  gate: string;
  label: string;
  link: string;
}

export interface CriteriaAndManual {
  criteria: any[];
  manual: false;
}
