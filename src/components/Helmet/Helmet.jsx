import React from 'react';

const Helmet = (props) => {
    console.log('hello')
    document.title= 'Comfort -' + props.title
  return (
    <div className='w-100'>{props.children}</div>
  );
}

export default Helmet;
