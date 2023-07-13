import React from 'react';

const UpdateText = ({
    element,
    onEdit,
    onClickUpdate
}) => {
    return (
        <div>
           <input defaultValue={element.text} onChange={onEdit} />
           <button onClick={() => {onClickUpdate(element.id)}}>수정확인</button>
        </div>
    );
};

export default UpdateText;