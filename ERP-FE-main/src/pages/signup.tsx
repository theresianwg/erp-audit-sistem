import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
//import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>ERP Sign-up page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="flex h-screen justify-center items-center w-full flex-1 px-48 gap-10 bg-white">
        <div className="bg-login_bg_img rounded-3xl shadow-2xl flex w-2/3 max-w-10xl py-32">
          {' '}
          {/*sign up image*/}
          <div className="w-1/2 py-60 px-12 text-green-400 bg-login_bg_img">
            <p>Login image</p>
          </div>
        </div>

        <div className="rounded-3xl bg-gray-100 shadow-2xl flex-col w-1/3 max-w-10xl py-6 px-12">
          {' '}
          {/*sign up details*/}
          <p className="text-gray-800 mt-16">
            Welcome to{' '}
            <a
              href="#"
              className="text-blue-600 font-sans no-underline hover:underline"
            >
              ERP
            </a>
          </p>
          <h2 className="mb-4 mt-4 text-gray-800">Sign up</h2>
          <p className=" text-gray-600 mb-12">
            Have an account?{' '}
            <a
              href="./login"
              className=" text-blue-600 no-underline hover:underline"
            >
              Log in
            </a>
          </p>
          <form action="#">
            <div className="mt-4">
              <label className="block text-gray-700 text-l font mt-5 mb-1">
                Email Address
              </label>
              <input
                type="text"
                placeholder="Email Address"
                className="rounded-lg border border-gray-500 bg-white py-4 px-2 w-full text-gray-800"
              ></input>
            </div>
            <div className="mt-6">
              <label className="block text-gray-700 text-l font mt-5 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="rounded-lg border border-gray-500 bg-white py-4 px-2 w-full text-gray-800"
              ></input>
            </div>
            <div className=" mt-6 mb-14">
              <label className="block text-gray-700 text-l font mt-5 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="rounded-lg border border-gray-500 bg-white py-4 px-2 w-full text-gray-800"
              ></input>
            </div>
          </form>
          <div>
            <button className="btn btn-blue w-full mb-20 shadow-lg">
              Sign up
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
