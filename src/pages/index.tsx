import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NextJs & Tailwindcss</title>
        <meta name="description" content="Make by Hidaaaaa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen w-screen p-8 bg-gray-200 flex flex-col">
        <div className="w-full bg-white p-8 rounded-xl text-center text-3xl font-semibold text-gray-800 shadow-sm mb-8">
          <span>Base NextJs and Tailwindcss</span>
        </div>

        <div className="flex justify-between h-full">
          <div className="w-80 h-full bg-white p-8 rounded-xl text-xl font-semibold text-gray-800 shadow-sm mb-4 mr-8"></div>
          <div className="w-full h-full bg-white p-8 rounded-xl text-xl font-semibold text-gray-800 shadow-sm mb-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
