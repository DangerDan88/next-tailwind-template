import Head from "next/head";

export default function Home() {
  return (
    <div className="flex justify-center">
      <Head>
        <title>Next-tailwind-template</title>
      </Head>
      <div className="flex justify-center p-4 shadow rounded bg-white">
        <h1 className="text-purple-500 text-4xl">
          Next.js-TailwindCSS-Template
        </h1>
      </div>
    </div>
  );
}
