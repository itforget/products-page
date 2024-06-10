'use client';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { authService } from '../services/auth/authService';

export default function Login() {
  const router = useRouter();
  const [values, setValues] = useState({
    email: '',
    senha: '',
  });

  function handleChange(event) {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    setValues((currentValues) => {
      return {
        ...currentValues,
        [fieldName]: fieldValue,
      };
    });
  }

  return (
    <div>
      <header className=' mx-28 py-5'>
        <nav className='flex flex-row items-center justify-between'>
          <div className='flex flex-row items-center gap-4'>
            <a href='/produtos'>
              <Image src='/logo1.svg' alt='Logo' width={100} height={100} />
            </a>
            <div className='flex flex-row items-center '>
              <label htmlFor='cidades'></label>
              <div className='relative'>
                <select
                  name='
                  id='
                  className='appearance-none font-bold pl-12 pr-4 py-2 rounded-md shadow-sm'
                >
                  <option value='>SP</option>
                  <option value='>DF</option>
                  <option value='>MG</option>
                  <option value='>BA</option>
                </select>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                  <MapPin />
                </div>
              </div>
            </div>
          </div>
          <div>
            <a
              href='/anuncios'
              className='bg-blue-500 text-white px-8 py-3 rounded-2xl'
            >
              Anunciar
            </a>
          </div>
        </nav>
      </header>
      <main className='flex justify-center items-center'>
        <form
          className='flex flex-col gap-4 justify-center items-center mt-36 p-20 border border-gray-300 rounded-md'
          onSubmit={(event) => {
            event.preventDefault();
            authService
              .login({
                email: values.email,
                senha: values.senha,
              })
              .then(() => {
                router.push('/produtos');
              })
              .catch((err) => {
                alert('Usuário ou senha inválidos');
                console.log(err)
              });
          }}
        >
          <h2 className='text-2xl font-bold'>Login</h2>
          <input
            type='email'
            placeholder='Email'
            name='email'
            value={values.email}
            onChange={handleChange}
            className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
          />
          <input
            placeholder='Senha'
            name='senha'
            type='password'
            value={values.senha}
            onChange={handleChange}
            className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
          />
          <button
            type='submit'
            className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 w-full'
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}
