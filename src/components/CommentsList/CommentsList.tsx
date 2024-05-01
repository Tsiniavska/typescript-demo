// * Base
import axios from 'axios';
import { memo, useEffect, useState } from 'react';

// * Types
import { TComments } from '../../types/comments.types';
import { Link } from 'react-router-dom';

const URL = 'https://jsonplaceholder.typicode.com/comments?_limit=30';

const CommentsList = memo(() => {
  const [list, setList] = useState<TComments[]>([]);

  const getCommentsList = () => {
    axios
      .get(URL)
      .then((response) => {
        if (response && response.data) {
          setList(response.data);
        }
      })
      .catch((error) => {
        console.error('Помилка при отриманні коментарів:', error);
      });
  };

  useEffect(() => {
    getCommentsList();
  }, []);

  const Item: React.FC<TComments> = ({ id, body, email, name }) => {
    return (
      <li>
        <Link
          className="font-bold hover:text-primary transition duration-[0.35s] ease-in-out"
          to={`/comments/${id}`}
        >
          {name}
        </Link>
        <p>{email}</p>
        <p className="pb-[10px]">{body}</p>
      </li>
    );
  };

  return (
    <div className="wrapper">
      <ul className="mt-[50px]">
        {list.map(({ id, body, email, name, postId }) => (
          <Item
            key={`list item ${id}`}
            body={body}
            id={id}
            email={email}
            name={name}
            postId={postId}
          />
        ))}
      </ul>
    </div>
  );
});

export default CommentsList;
