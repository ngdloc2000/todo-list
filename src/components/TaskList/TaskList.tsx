import { Todo } from '../../@type/todo.type'
import './taskList.css'

interface TaskListProps {
  doneTaskList?: boolean
  todos: Todo[]
  handleDoneTodo: (id: string, done: boolean) => void
  startEditTodo: (id: string) => void
  deleteTodo: (id: string) => void
}

const TaskList = (props: TaskListProps) => {
  const { doneTaskList, todos, handleDoneTodo, startEditTodo, deleteTodo } = props
  const onChangeCheckBox = (idTodo: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    handleDoneTodo(idTodo, event.target.checked)
  }

  return (
    <div className='mb-2'>
      <h2 className='title'>{doneTaskList ? 'Hoàn thành' : 'Chưa hoàn thành'}</h2>
      <div className='tasks'>
        {todos.map((todo) => (
          <div className='task' key={todo.id}>
            <input type='checkbox' className='taskCheckbox' checked={todo.done} onChange={onChangeCheckBox(todo.id)} />
            <span className={`taskName ${todo.done ? 'taskNameDone' : ''}`}>{todo.name}</span>
            <div className='taskActions'>
              <button className='taskBtn' onClick={() => startEditTodo(todo.id)}>
                Sửa
              </button>
              <button className='taskBtn' onClick={() => deleteTodo(todo.id)}>
                Xóa
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskList
