import Head from 'next/head'
import { useEffect } from 'react';

export default function Home() {
  const selectTheme = (value: string) => {
    localStorage.setItem("theme", value);
    document.querySelector("html").classList.add(localStorage.getItem("theme"));

    if (value === "dark") document.querySelector("html").classList.remove("light");
    else document.querySelector("html").classList.remove("dark");
  }

  useEffect(() => {
    document.querySelector("html").classList.add(localStorage.getItem("theme"));
  }, []);

  return (
    <div>
      <Head>
        <title>Michael's Personal Web</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/aizuu.ico" />
      </Head>
      <div className="bg-blue-200 dark:bg-gray-700">
        <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
          <div className="max-w-lg antialiased">
            <div className="bg-white dark:bg-gray-900 p-5 flex rounded-lg shadow-lg">
              <button onClick={() => selectTheme("light")} className="w-5 h-5 text-yellow-400 dark:text-white fa fa-sun fa-1x rounded-full mr-2"></button>
              <button onClick={() => selectTheme("dark")} className="w-5 h-5 text-gray-700 dark:text-yellow-400 fa fa-moon fa-1x rounded-full"></button>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-b-md mt-5 shadow-lg overflow-hidden">
              <div className="p-5">
                <div className="flex items-center justify-center">
                  <img
                    className="h-32 rounded-full border-2 shadow-md border-gray-600 dark:border-white"
                    src="https://cdn.discordapp.com/avatars/588951309772652586/f5cad0541356614fd1fe70c349964409.png?size=4096"
                    alt="profile"/>
                </div>
                  <div className="text-3xl text-red-500 text-left leading-tight h-3">“</div>
                  <div className="mt-5 text-center dark:text-white leading-relaxed">
                  <p>
                    Oh, Hi, Sup 🖐!! nice to meet you, Buddy. You can call me Michael (he/him). (Anyway, that's not my photo, it's.. umm.. uhh.. huufftt. Man, 
                    i have crush on her, but.. huuuftt..😞. But she's very Pretty and Beautiful, right?❤).
                  </p>
                  <div className="text-3xl text-red-500 text-right leading-tight h-3 -mt-3">”</div>
                </div>
                <div className="w-full">
                  <p className="text-md text-red-500 font-bold text-center">Michael</p>
                  <p className="text-xs text-gray-500 text-center">Your Very Special Boo</p>
                </div>
              </div>
              <div className="w-full p-2 border-t-2 dark:text-white">
                <div className="flex items-center justify-around p-1 md:p-4 mt-5">
                  <a href="https://discord.com/users/588951309772652586/">
                    <span className="fab fa-discord fa-2x hover:opacity-50 cursor-pointer" aria-hidden="true"></span>
                  </a>
                  <a href="https://www.youtube.com/channel/UCoxhAiwnPU9BJ_wXS2CaUAQ">
                    <span className="fab fa-youtube-play fa-2x hover:opacity-50 cursor-pointer" aria-hidden="true"></span>
                  </a>
                  <a href="https://instagram.com/michxaael/">
                    <span className="fab fa-instagram fa-2x hover:opacity-50 cursor-pointer" aria-hidden="true"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
