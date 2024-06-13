/* eslint-disable @next/next/no-img-element */
"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { fetchProducts } from "../services/reactQuery/getProducts";
import { useState } from "react";
import { Heart, LoaderCircle, MapPin, Search, UserCircle } from "lucide-react";
import { fetchAuth } from "../services/reactQuery/auth";
import Dropdown from "./components/dropdown";
import { tokenService } from "../services/auth/tokenService";

export default function Produtos() {
  const {
    data: userData,
    isLoading: userIsLoading,
    isSuccess: userIsSuccess,
  } = useQuery({
    queryKey: ["user"],
    queryFn: fetchAuth,
  });

  const { data: productsData, isLoading: productsIsLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const [searchTerm, setSearchTerm] = useState("");

  const [isFavorited, setIsFavorited] = useState(false);

  const handleClick = () => {
    setIsFavorited(!isFavorited);
  };
  
  const filteredProducts = productsData?.filter((product) =>
    product.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <header className=" mx-28 py-5">
        <nav className="flex flex-row flex-wrap items-center justify-between max-xl:flex-col">
          <div className="flex flex-row items-center gap-4 max-xl:flex-col">
            <Image
              src="/logo1.svg"
              alt="Logo"
              width={100}
              height={100}
              priority
            />
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar"
                className="w-96 p-2 pl-8 rounded-lg border border-zinc-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2" />
            </div>
            <div className="flex flex-row items-center ">
              <label htmlFor="cidades"></label>
              <div className="relative">
                <select
                  name=""
                  id=""
                  className="appearance-none font-bold pl-12 pr-4 py-2 rounded-md shadow-sm"
                >
                  <option value="">SP</option>
                  <option value="">DF</option>
                  <option value="">MG</option>
                  <option value="">BA</option>
                </select>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MapPin />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 max-xl:my-4 max-xl:justify-center max-xl:items-center">
            <a
              href="/anuncios"
              className="bg-blue-500 text-white px-8 py-3 rounded-2xl"
            >
              Anunciar
            </a>
            {userIsSuccess ? (
              <Dropdown label={userData.nomeUsuario} props={tokenService.delete} option={"Sair"} />
            ) : (
              <div className="flex flex-row gap-3 items-center">
                <a
                  href="/cadastro"
                  className="bg-green-500 text-white px-8 py-3 rounded-2xl"
                >
                  Cadastrar-se
                </a>
                <a
                  href="/login"
                  className="bg-red-500 text-white px-8 py-3 rounded-2xl"
                >
                  Login
                </a>
              </div>
            )}
          </div>
        </nav>
      </header>

      <main className="flex flex-row gap-2 border-t border-zinc-400 pt-2">
        <div className="h-fit border-2 ml-3 flex p-6 items-center flex-col border-zinc-500 rounded-xl">
          <h2 className="font-bold text-xl mb-4">Busca por categorias</h2>
          <select className="cursor-pointer">
            <option value="">Todos</option>
            <option value="">Calçados</option>
            <option value="">Roupas</option>
            <option value="">Acessórios</option>
            <option value="">Livros</option>
          </select>
        </div>
        {
          <div className="flex flex-col gap-4 ">
            {productsIsLoading ? (
              <div className="flex justify-center items-center h-screen w-screen">
                <LoaderCircle className=" animate-spin" />
              </div>
            ) : filteredProducts?.length === 0 ? (
              <p className="font-bold text-2xl flex justify-center items-center">
                Nenhum produto encontrado
              </p>
            ) : (
              filteredProducts?.map((products, index) => {
                return (
                  <div
                    className="border rounded-xl border-zinc-300 shadow-2xl"
                    key={index}
                  >
                    <div className="flex flex-row">
                      <img
                        src={products.imagens[0].url}
                        alt={products.name}
                        width={280}
                        height={280}
                        className="mb-4 rounded-l-xl"
                      />
                      <div className="flex flex-col justify-between">
                        <div className="flex flex-row mt-5 gap-60 ml-2 max-xl:gap-24 max-xl:ml-0">
                          <h2 className="text-md text-zinc-600">
                            {products.name}
                          </h2>
                          <p className="text-xl font-bold text-zinc-600">
                            {new Intl.NumberFormat("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            }).format(products.value)}
                          </p>
                        </div>
                        <div className="flex flex-row mt-5 gap-60 mb-2 ml-2 max-xl:gap-24 max-xl:ml-0">
                          <div className="flex flex-row gap-1 items-center">
                            <MapPin className="text-zinc-400" size={20} />
                            <p>Ceilandia, Brasilia - DF</p>
                          </div>
                          <button onClick={handleClick}>
                            <Heart
                              className="text-red-500"
                              fill={isFavorited ? "#ef4444" : "none"}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        }
      </main>

      <footer className="bg-gray-800 text-white py-4 mt-[468px] max-xl:mt-[280px] ">
        <div className="flex items-center justify-center">
          <p>© 2024 TradeZap. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
