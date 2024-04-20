// * Base
import axios from 'axios';
import { useCallback, useState, useEffect } from 'react';

// * Components
import Button from '../../components/Button/Button';
import Wrapper from '../../components/Wrapper/Wrapper';
import Loading from '../../components/Loading/Loading';

// * Styles
import styles from './List.module.css';

const DEFAULT_STATE = {
  list: [],
  error: '',
  loading: true,
};

const List = () => {
  const [state, setState] = useState(DEFAULT_STATE);

  const getList = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      loading: true,
    }));

    axios
      .get('https://jsonplaceholder.typicode.com/posts')
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
        <Wrapper>
          <p className={styles.error}>{state.error}</p>
          <Button text="Retry" design="retry" onClick={getList} />
        </Wrapper>
      </>
    );
  }

  if (!state.list.length) {
    return <p>Список пустий</p>;
  }

  return (
    <Wrapper>
      <ul className={styles.list}>
        {state.list.map(({ id, body, title }) => (
          <Item key={`list item ${id}`} title={title} body={body} />
        ))}
      </ul>
    </Wrapper>
  );
};
// eslint-disable-next-line react/prop-types
const Item = ({ title, body }) => {
  return (
    <li>
      <h4>{title}</h4>
      <p>{body}</p>
    </li>
  );
};

export default List;
