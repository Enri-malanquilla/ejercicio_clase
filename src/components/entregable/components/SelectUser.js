export default function SelectUser({ users, setSelectUser }) {
  return (
    <>
      <label htmlFor='user_select'>Elije Usuario:</label>

      <select
        name='user_select'
        id='user_select'
        onChange={(e) => {
          setSelectUser(e.target.value);
        }}
      >
        {users.map((user) => {
          return (
            <option key={user.id} value={user}>
              {user.name}
            </option>
          );
        })}
      </select>
    </>
  );
}
