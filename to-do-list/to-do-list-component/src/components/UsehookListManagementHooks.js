import {useState} from 'react';

const UsehookListManagementHooks = () => {
    
  const [list,setList] = useState([
    { id:0, text:'이수창교수님 과제',isEdit:false},
    { id:1, text:'javascript 공부하기',isEdit:false},
  ]); //to-do-list 내역
  const [inputText,setInputText] = useState(''); //input 입력 text(추가할 내용)
  const [nextId, setNextId] = useState(2); //update list id
  const [editText,setEditText] = useState(''); //수정한 inputText


  const onChange = (e) => setInputText(e.target.value); //input창 입력 value 세팅

  const onInsert = () =>{ //input text list에 추가하기(concat으로 새로운 배열 생성하여 setList, id update, inputText초기화)
    setList(list.concat({
      id:nextId, text:inputText}));
    setNextId(nextId+1);
    setInputText('');
  }

  const onRemove = (listId) => {
    setList(list.filter(element => element.id !== listId)); 
  }

  const onEdit = (e) => {
    setEditText(e.target.value);
  }

  const onClickEditButton = (id) =>{
    setList(list.map((element) => {
      return element.id=== id ? {...element,isEdit : true} : {...element};
    }));
  }


  const onClickUpdate = (listId) =>{
    setList(
      list.map((element) => {
        return element.id === listId ? {
          ...element,text:editText,isEdit:false} :
          {...element}
        }
  ))
    
};
    return {
      list,
      inputText,
      nextId,
      editText,
      onChange,
      onClickEditButton,
      onClickUpdate,
      onEdit,
      onInsert,
      onRemove,
    };
};

export default UsehookListManagementHooks;