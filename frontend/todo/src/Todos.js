import EditIcon from './icons/Edit.js';
import DeleteIcon from './icons/Delete.js';

export default function Todos({todos, deleteTodo, modifyStatus, updateTodo,}) {

    return <div className="todos">
        {todos.map((todo) => {
            return <div className="todo" key={todo.id}>
                        <div className='checkandtext'>
                        <input onClick={() => modifyStatus(todo)} type="checkbox"/>
                        <p>{todo.name}</p>
                        </div>
                        <div className="icons">
                        <button onClick={() => updateTodo(todo)}>
                            <EditIcon width={20} height={20}/>
                        </button>
                        <button onClick={() => deleteTodo(todo)}>
                            <DeleteIcon width={20} height={20}/>
                        </button>
                    </div>
            </div>
        })}
    </div>
}