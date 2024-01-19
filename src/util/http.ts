import axios from 'axios';

export default async function getEvent({ signal }: { signal: AbortSignal }) {
  const response = await axios
    .get('http://localhost:3001/items', { signal })
    .then(({ data }) => data)
    .catch((error) => error);
  return response;
}
