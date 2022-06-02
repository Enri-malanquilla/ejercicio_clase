export default async function getUser(callback) {
  try {
    //connection
    const response = await fetch(' https://jsonplaceholder.typicode.com/users');
    const body = await response.json();
    //function handle of results API
    return callback(body);
  } catch (error) {
    console.error(error);
  }
}
