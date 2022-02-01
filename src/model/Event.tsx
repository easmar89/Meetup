export interface EventActivity {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  date: string;
  location: string;
  attending: boolean;
  comments: object[];
  creator: string;
}
