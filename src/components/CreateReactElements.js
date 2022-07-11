import React from 'react';

const CreateReactElements = () => {
    const el = React.createElement;

    return (
      el('h1', null, '*** React Element *** (Создан с помощью "React.createElement")')
    );
};

export default CreateReactElements;