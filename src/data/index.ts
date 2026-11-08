import { spanishRepertoire } from './white';
import { scotchRepertoire } from './scotch';
import { italianRepertoire } from './italian';
import { blackRepertoire } from './black';
import type { Repertoire } from './types';

/** Every repertoire, in the order shown in the app. */
export const ALL_REPERTOIRES: Repertoire[] = [spanishRepertoire, scotchRepertoire, italianRepertoire, blackRepertoire];
