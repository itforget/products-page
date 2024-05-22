"use client";
import { MapPin } from "lucide-react";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRegisterMutate } from "../utils/mutateRegister";

export default function Registro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { mutate, isSuccess } = useRegisterMutate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      date,
      password,
      confirmPassword,
    };
    mutate(data);
  };

  useEffect(() => {
    if (isSuccess) {
      alert("Cadastro realizado com sucesso!");
      window.location.href = "/produtos";
    }
  }, [isSuccess]);
  return (
    <div>
      <header className=" mx-28 py-5">
        <nav className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-4">
            <a href="/produtos"><Image src="/logo1.svg" alt="Logo" width={100} height={100} /></a>
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
          <div>
            <a
              href="/anuncios"
              className="bg-blue-500 text-white px-8 py-3 rounded-2xl"
            >
              Anunciar
            </a>
          </div>
        </nav>
      </header>
     <main className="flex justify-center items-center">
     <form
        className="flex flex-col gap-4 justify-center items-center mt-36 p-20 border border-gray-300 rounded-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold">Registro</h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
        <input
          type="date"
          placeholder="Date of Birth"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 w-full"
        >
          Submit
        </button>
      </form>
     </main>
    </div>
  );
}
