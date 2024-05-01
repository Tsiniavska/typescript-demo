// * Base
import axios from 'axios';
import { memo, useCallback, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { TComments } from '../../../types/comments.types';

const URL_Base = 'https://jsonplaceholder.typicode.com/comments/';

const Detail = memo(() => {
  const [data, setData] = useState<TComments | null>(null);

  const [error, setError] = useState(false);

  const { id } = useParams();

  const page =
    Number(new URLSearchParams(useLocation().search).get('page')) || 1;
  console.log('page: ', page);

  const getData = useCallback(() => {
    axios
      .get(URL_Base + id)
      .then((response) => {
        if (response && response.data) {
          setData(response.data);
        }
      })
      .catch(() => {
        setError(true);
      });
  }, [id]);

  useEffect(() => {
    getData();
  }, [getData]);

  if (error)
    return <div className="wrapper">No comments exist for this id ({id})</div>;

  if (!data)
    return <div className="wrapper">Comments data loading in progress...</div>;

  return (
    <div className="wrapper">
      <h2 className="mb-4">Detail: {data ? data.name : '-'}</h2>
      <div>Page: {page}</div>
    </div>
  );
});

export default Detail;
