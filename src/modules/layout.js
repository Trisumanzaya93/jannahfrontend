import Head from "next/head";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="https://cdn2.iconfinder.com/data/icons/electronic-glyph-4/64/ELECTRONIC_Glyph-06-512.png"/>
      </Head>
      {children}
    </>
  );
}