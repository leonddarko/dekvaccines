import Head from "next/head";
export default function Seo({pageTitle}) {
  return (
    <>
      <Head>
        <title>{`DEK Vaccines Ltd | ${pageTitle}`}</title>
        <meta name="description" content="DEK VACCINES LTD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
