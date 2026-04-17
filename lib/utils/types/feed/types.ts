export type FeedCardItem = {
  id: string;
  name: string;
  tagline: string;
  avatarUrl: string;
  imageUrl: string | string[];
  title: string;
  description: string;
  macros: {
    protein: number;
    carbs: number;
    fat: number;
    calories: number;
  };
  createdAt: string;
  isGoodProteinRatio: boolean;
  isGoodCarbsRatio: boolean;
  isGoodFatRatio: boolean;
};

export type FeedCardProps = {
  item: FeedCardItem;
};

export type ImageCardProps = {
  src: string | string[];
  alt: string;
};

export type UserCardProps = {
  name: string;
  avatarUrl: string;
  tagline: string;
  createdAt: string;
};

export type TitleAndDescriptionCardProps = {
  title: string;
  description: string;
};

export type MacrosCardProps = {
  id: string;
  macros: {
    protein: number;
    carbs: number;
    fat: number;
    calories: number;
  };
};
export type Macros = {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};
