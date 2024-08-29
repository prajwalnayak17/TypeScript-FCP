import React from 'react';
import { Todo } from '../model';

interface SingleTodoProps {
    todo: string;
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<SingleTodoProps> = ({ todo ,todos,setTodos}) => {
    return (
        <div>
            <p>{todo}</p>
        </div>
    );
};

export default SingleTodo;