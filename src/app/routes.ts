import {Path} from './types/routes';

export const route = {
  [Path.Root]: {
    title: 'Home',
    path: Path.Root,
  },
  [Path.PageOne]: {
    title: 'Page One',
    path: Path.PageOne,
    previousPath: Path.Root,
  },
  [Path.PageTwo]: {
    title: 'Page Two',
    path: Path.PageTwo,
    previousPath: Path.Root,
  },
};
