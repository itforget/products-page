"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { fetchProducts } from "../utils/getProducts";
import { useState } from "react";

export default function Produtos() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = data?.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="">
      <div className="flex justify-center pt-2">
        <a href="/">
          <Image src="/logo1.svg" alt="logo" width={120} height={120} />
        </a>
      </div>
      <nav className="flex flex-row p-6 items-center justify-between gap-5">
        <div className="flex flex-row gap-5">
          <input
            type="text"
            placeholder="Pesquisar"
            className="w-auto p-2 rounded-lg border-2 border-green-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select className="p-2 rounded-lg border-2 border-green-700">
            <option>Eletronicos</option>
            <option>Roupas</option>
            <option>Livros</option>
            <option>Moveis</option>
          </select>
        </div>
        <h1 className="text-4xl font-extrabold text-green-900 mr-2">
          Produtos
        </h1>
      </nav>
      <main className="flex flex-wrap h-screen justify-center gap-5 bg-green-200 bg-opacity-55 border-t border-green-700 p-4">
        {isLoading ? (
          <p className="font-bold text-2xl">Carregando Produtos</p>
        ) : filteredProducts?.length === 0 ? (
          <p className="font-bold text-2xl">Nenhum produto encontrado</p>
        ) : (
          filteredProducts?.map((products, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-4 border border-green-100 p-3 rounded-lg"
              >
                <Image
                  className="rounded-lg border-2 border-zinc-300"
                  src={products.imgUrl}
                  alt={products.name}
                  width={180}
                  height={180}
                />
                <h2 className="text-2xl font-bold">{products.name}</h2>
                <p className="text-lg font-bold">
                  {products.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Comprar
                </button>
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
          })
        )}
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-center">
          <p>&copy; 2024 TradeZap. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
