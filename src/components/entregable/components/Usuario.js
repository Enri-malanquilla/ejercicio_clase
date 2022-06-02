import WebUser from './WebUser';
import "./Usuario.css"
export default function Usuario({ name, username, web, email }) {
  return (
    <article>
      <h1>{name}</h1>
      <p>{username}</p>
      <p>{email}</p>
      <WebUser web={web} name={name} />
    </article>
  );
}
