import "./styles/UserSelect.css";

export default function SelectUser({ users, setSelectUser }) {
  //Generate select
  return (
    <div className="selectZone">
      <label htmlFor='user_select'><h3>Elige usuario:</h3></label>

      <select
        name='user_select'
        id='user_select'
        onChange={(e) => {
          setSelectUser(e.target.value);
        }}
      >
        <option selected></option>
        {users.map((user) => {
          return (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
