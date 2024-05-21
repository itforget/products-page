'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter()
  return (
    <div className="h-screen w-screen bg-gradient-to-t from-green-100 via-green-400 to-green-100">
      <nav className="flex flex-row p-4">
        <a href="/">
          <Image src="/logo1.svg" alt="logo" width={120} height={120} />
        </a>
      </nav>
      <main className="flex justify-center items-center flex-col">
        <h1 className="text-8xl font-bold text-green-900 animate-fade-up animate-duration-[2000ms]">
          Compras e vendas <br />
          direto pelo Whatsapp
        </h1>
        <p className="text-6xl font-bold text-green-700 animate-fade-up animate-duration-[2000ms] animate-delay-1000 animate-ease-linear">
          Tudo com muita rapidez e segurança!
        </p>
        <div className="mt-32 px-20 py-7 w-auto h-auto flex flex-col gap-5 items-center justify-center rounded-lg bg-green-200 bg-opacity-55 border-2 border-green-700 animate-fade-up animate-duration-[2000ms] animate-delay-1000 animate-ease-linear">
          <h2 className="font-bold text-3xl">Inscreva-se</h2>
          <div className="flex flex-row gap-4">
            <input
              placeholder="Digite seu número"
              className="w-full p-2 rounded-lg border-2 border-green-700 "
            />
            <button
              onClick={() => router.push('/produtos')}
              className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-lg "
            >
              Entrar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
