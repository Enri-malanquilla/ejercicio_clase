import WebUser from './WebUser';

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
