import Head from "next/head";

export default function Home() {
  return (
    <div className="flex justify-center">
      <Head>
        <title>Next-tailwind-template</title>
      </Head>
      <div className="p-4 shadow rounded bg-white">
        <h1 className="text-purple-500 leading-normal">Next.js</h1>
        <p className="text-gray-500">with Tailwind CSS</p>
        <p className="text-gray-500">Template-App</p>
      </div>
    </div>
  );
}
