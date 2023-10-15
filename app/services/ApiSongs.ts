import axios from 'axios';

const api_url = process.env.NEXT_PUBLIC_API;
export async function getSong(id: string) {
  const res = await axios.get(`${api_url}getSong/${id}`).then(res => res.data)
  return res
}