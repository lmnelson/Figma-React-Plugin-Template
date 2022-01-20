export enum Path {
  PageOne = 'PAGE_ONE',
  PageTwo = 'PAGE_TWO',
}
export interface Route {
  title: string;
  path: Path;
}
