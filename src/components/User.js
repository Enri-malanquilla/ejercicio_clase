import "./styles/User.css";

export default function Usuario({ name, username, web, email }) {
  return (
    <article className='userCard'>
      <h1>{name}</h1>
      <p>{username}</p>
      <p>{email}</p>
      <p>
        <a className="link" href={`https://www.${web}`}>{`https://www.${web}`}</a>
      </p>
      <iframe src={`https://www.${web}`} title={name} width='120px' height="70px"></iframe>
    </article>
  );
}
