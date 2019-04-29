import { BehaviorSubject } from 'rxjs';

export const TODOS_KEY = 'todos$';
export const todos$ = new BehaviorSubject([]);