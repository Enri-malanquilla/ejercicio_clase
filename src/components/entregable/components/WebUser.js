export default function WebUser({ web, name }) {
  const webJoined = `https://www.${web}`;
  return (
    <>
      <p>
        <a href={webJoined}>{webJoined}</a>
      </p>
      <iframe src={webJoined} title={name} width='100px'></iframe>
    </>
  );
}
