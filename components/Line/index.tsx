import React from 'react';

export const Line = ({ color }: {color: string}) => {
  return (
    <div className={'line'}
         style={{ width: '100%',
                  height: '1px',
                  backgroundColor: `#${color}`,
                  borderRadius: '100px',
                  opacity: '30%'}}
    />
  );
};