import { BehaviorSubject } from 'rxjs';

export const TODOS_OBSERVABLE_KEY = 'todos$';
export const todos$ = new BehaviorSubject([]);