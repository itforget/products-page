"use client"
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { fetchProducts } from "./utils/getProducts";

export default function Produtos() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    
    })
console.log(data)
  return (
    <div className="h-screen w-screen">
      <header className="flex flex-col items-center  py-2">
      <h1 className="text-4xl font-extrabold">Produtos</h1>
      <p className="mt-3 text-lg text-gray-500">Lista de produtos</p>
      </header>
      <main className="flex flex-row justify-center items-center gap-5 h-auto rounded-lg border-2 border-zinc-300 mx-16 p-4">
        {isLoading ? <p className="font-bold text-2xl">Carregando Produtos</p> : data?.map((products, index) => {
          return (
            <div key={index} className="flex flex-col items-center gap-4 border-2 border-zinc-600 p-3 rounded-lg">
              <Image
                className="rounded-lg border-2 border-zinc-300"
                src={products.imgUrl}
                alt={products.name}
                width={180}
                height={180}
              />
              <h2 className="text-2xl font-bold">{products.name}</h2>
              <p className="text-lg font-bold">{products.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Comprar</button>
                <div
                  onMouseEnter={(e) =>
                    e.currentTarget
                      .querySelector("p")
                      .classList.remove("hidden")
                  }
                  onMouseLeave={(e) =>
                    e.currentTarget.querySelector("p").classList.add("hidden")
                  }
                >
                  <span className="font-semibold text-xl flex justify-center items-center">
                    DESCRIÇÃO DO PRODUTO
                  </span>
                  <p className="text-lg hidden">{products.description}</p>
                </div>
            </div>
          );
        })}
    </main>
    </div>
  );
}
