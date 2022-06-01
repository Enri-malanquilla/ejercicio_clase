import { useEffect, useState } from 'react';

import getUser from './helpers/getUser';

import Usuario from './Usuario';
import SelectUser from './SelectUser';

export default function ListaUsuarios() {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [selectUser, setSelectUser] = useState([]);
  //const [one_user, setOne_user] = useState([]);

  useEffect(() => {
    getUser(setUsers);
  }, []);

  const showUsers = () => {
    !show && setSelectUser([]);
    return setShow(!show);
  };
  //en construccion
  //   const oneUser = () => {
  //     const filterUser = users.filter((user) => user.name === selectUser);
  //     return setOne_user(filterUser);
  //   };
  return (
    <section>
      <h1>lista usuarios</h1>
      <button onClick={showUsers}>{show ? 'Ocultar' : 'Mostrar'}</button>

      {users.length > 0 && (
        <SelectUser users={users} setSelectUser={setSelectUser} />
      )}
      <ul>
        {show &&
          selectUser.length < 1 &&
          users.map((user) => {
            return (
              <li key={user.id}>
                <Usuario
                  name={user.name}
                  username={user.username}
                  email={user.email}
                  web={user.website}
                />
              </li>
            );
          })}
      </ul>
      {/* {selectUser.length > 0 && (
        <Usuario
          name={one_user[0].name}
          username={one_user[0].username}
          email={one_user[0].email}
          web={one_user[0].website}
        />
      )} */}
    </section>
  );
}
