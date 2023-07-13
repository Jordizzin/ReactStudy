import React from 'react';
import UpdateText from './UpdateText';
import NotUpdateText from './NotUpdateText';

const TodoList = ({
    list, 
    onEdit, 
    onClickUpdate,
    onClickEditButton,
    onRemove
}) => {
    return (
        <div>
            {
        list?.map((element) => {
          return(
          <div key={element.id} style={{ display: "flex" }}>
           {
           element.isEdit?(
             <UpdateText
                element={element}
                onEdit={onEdit}
                onClickUpdate={onClickUpdate}
                />
           ) : (
             <NotUpdateText
                element={element}
                onClickEditButton={onClickEditButton}
                onRemove={onRemove}/>
           )
         }
           </div>)})
      }    
        </div>
    );
};

export default TodoList;