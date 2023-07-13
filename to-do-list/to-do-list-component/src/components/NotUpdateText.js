import React from 'react';

const NotUpdateText = ({
    element,
    onClickEditButton,
    onRemove
}) => {
    return (
        <div>
           <div>{element.text}</div>
           <button onClick={()=>onClickEditButton(element.id)}>수정하기</button>
           <button onClick={() => onRemove(element.id)}>삭제하기</button>
        </div>
    );
};

export default NotUpdateText;