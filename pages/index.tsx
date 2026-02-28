import Head from 'next/head';
import SinglePageLayout from '../components/SinglePageLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Anish Shivamurthy — Resume</title>
        <meta name="description" content="Professional resume — Anish Shivamurthy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <SinglePageLayout showBackground={false} />
    </>
  );
}