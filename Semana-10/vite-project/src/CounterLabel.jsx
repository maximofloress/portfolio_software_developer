import React from 'react'

export const CounterLabel = ({count}) => {
  return <> {count >= 5 ? <> {count} mayor o igual a 5 </> : <> {count} menor a 5 </> } </>;
}
