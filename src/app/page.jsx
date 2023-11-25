"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const navigate = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem("token-user") != null) {
      navigate.replace('/');
    }
 },[navigate]);
  return (
    <>
      <div className="etapas">
        <h1>Home</h1>
        <h2>Seja Bem-vindo ao Janus Health Care</h2>
        <p>Estamos sempre em busca de um futuro melhor!</p>
      </div>
    </>
  )
}