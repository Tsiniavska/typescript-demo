// * Base
import axios from 'axios';
import { useCallback, useState, useEffect } from 'react';
import React from 'react';

// * Components
import Button from '../../components/Button/Button';
import Loading from '../../components/Loading/Loading';

// * Types
import { EButton, EDesign } from '../../types/button.types';

// * Types local
type Post = {
  id: number;
  title: string;
  body: string;
};

type State = {
  list: Post[];
  error: string;
  loading: boolean;
};

const DEFAULT_STATE: State = {
  list: [],
  error: '',
  loading: true,
};

const List: React.FC = () => {
  const [state, setState] = useState<State>(DEFAULT_STATE);

  const getList = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      loading: true,
    }));

    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .then(({ data }) => {
        setState((prevState) => ({
          ...prevState,
          error: '',
          list: data,
        }));
      })
      .catch(() => {
        setState((prevState) => ({
          ...prevState,
          error: 'Помилка завантаження списку. Спробуйте пізніше',
        }));
      })
      .finally(() => {
        setState((prevState) => ({
          ...prevState,
          loading: false,
        }));
      });
  }, []);

  useEffect(() => {
    getList();
  }, [getList]);

  if (state.loading) {
    return <Loading />;
  }

  if (state.error) {
    return (
      <>
        <div className="wrapper">
          <p className="mt-[30px] mb-[30px]">{state.error}</p>
          <Button
            text="Retry"
            design={EDesign.RETRY}
            onClick={getList}
            href=""
            type={EButton.BUTTON}
          />
        </div>
      </>
    );
  }

  if (!state.list.length) {
    return <p>Список пустий</p>;
  }

  return (
    <div className="wrapper">
      <ul className="mt-[150px]">
        {state.list.map(({ id, body, title }) => (
          <Item key={`list item ${id}`} title={title} body={body} />
        ))}
      </ul>
    </div>
  );
};

type ItemProps = {
  title: string;
  body: string;
};

const Item: React.FC<ItemProps> = ({ title, body }) => {
  return (
    <li>
      <h4 className="font-bold">{title}</h4>
      <p>{body}</p>
    </li>
  );
};

export default List;
