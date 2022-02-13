import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import { Counter } from './feature/counter/Counter';
import { User } from './feature/users/User';

function App() {
  const users = useSelector((state: RootState) => state.users.value);
  return (
    <div className='App'>
      <p>React+Typescript+Redux+Firebase</p>
      <Counter />
      <User />
      {users &&
        users.map((el) => {
          return (
            <article key={el.id}>
              <p>{el.name}</p>
              <p>{el.age}</p>
            </article>
          );
        })}
    </div>
  );
}

export default App;
