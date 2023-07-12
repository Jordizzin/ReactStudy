import {useState} from 'react';

/* to-do-list만들기 
  1. 내용 추가하기
  2. 내용 삭제하기
  3. 내용 수정하기
  */
 
const App = () => {

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
    
  return (
    <div>
      <input value={inputText} onChange = {onChange}></input>
      <button onClick={onInsert}>추가</button>
      <div>
        <div>
      {
        list?.map((element) => {
          return(
          <div key={element.id}>
           {
           element.isEdit?(
             <div>
             <input defaultValue={element.text} onChange={onEdit} />
             <button onClick={() => {onClickUpdate(element.id)}}>수정확인</button>
             </div>
           ) : (
             <div>
           <div>{element.text}</div>
           <button onClick={()=>onClickEditButton(element.id)}>수정하기</button>
           <button onClick={() => onRemove(element.id)}>삭제하기</button>
           </div>)
         }
           </div>)})
      }    
        </div>
      </div>
      
    </div>
  );
};

export default App;