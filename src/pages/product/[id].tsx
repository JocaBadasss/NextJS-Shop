import { useRouter } from 'next/router';

export default function teste() {
  const { query } = useRouter();

  console.log(query);

  return <h1>Product: {JSON.stringify(query)}</h1>;
}
