import { MapPin, Search } from "lucide-react";
import { fetchUser } from "../utils/postRegister";
import Image from "next/image";

export default function Registro() {
    return(
        <div>
            <header className=" mx-28 py-5">
        <nav className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-4">
            <Image src="/logo1.svg" alt="Logo" width={100} height={100} />
            <div className="flex flex-row items-center ">
              <label for="cidades"></label>
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
        </div>
    )
}