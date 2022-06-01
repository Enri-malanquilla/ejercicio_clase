export default async function getUser(callback) {
  try {
    const response = await fetch(' https://jsonplaceholder.typicode.com/users');
    const body = await response.json();
    return callback(body);
  } catch (error) {
    console.error(error);
  }
}
