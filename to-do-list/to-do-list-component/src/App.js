import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import UsehookListManagementHooks from './components/UsehookListManagementHooks';

const App = () => {
  const {
    list,
    inputText,
    onChange,
    onClickEditButton,
    onClickUpdate,
    onEdit,
    onInsert,
    onRemove,
  } = UsehookListManagementHooks();
  return (
    <div>
      <TodoInput 
        inputText={inputText} 
        onChange={onChange} 
        onInsert={onInsert} />
      <TodoList 
        list={list} 
        onEdit={onEdit} 
        onClickUpdate={onClickUpdate} 
        onClickEditButton={onClickEditButton} 
        onRemove={onRemove}/>
    </div>
  );
};

export default App;