export enum Path {
  Root = 'ROOT',
  PageOne = 'PAGE_ONE',
  PageTwo = 'PAGE_TWO',
}
export interface Route {
  title: string;
  path: Path;
  previousRoute?: Path;
}
