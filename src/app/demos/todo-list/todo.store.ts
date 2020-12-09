import { Task } from './task';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from "rxjs/operators";

export interface State {
    todolist: Task[]
}

const state: State = {
    todolist: []
};

export class Store {
    //TODO:BehaviorSubject - propagador do estado atual da Store
    private subject = new BehaviorSubject<State>(state);
  
    private store = this.subject.asObservable();

    get value() {
        return this.subject.value;
    }

    public getTodoList(): Observable<Task[]> {
        return this.store
            .pipe(
                map(store => store.todolist)
                );
    }

    set(name: string, state: any) {
        //TODO: atualiza o estado autal da Store
        //TODO: next metodo para empurar um novo valor para o BehaviorSubject
        this.subject.next({
            ...this.value, [name]: state
        });
    }
}
