import React from 'react';
import {useTags} from '../useTags';
import {useParams} from 'react-router';


type Params = {
  id:string
};

const Tag : React.FC = (props) =>
{
  const {findTag} = useTags();
  let {id} =useParams<Params>();
  const tag = findTag(parseInt(id));
  return (
    <div>{div.name}</div>
  );
};

export {Tag};