'use client'
import React from "react";
import { useQuery } from "@tanstack/react-query";

export default function AuthComponent  () {
  const { data, isLoading, error,  } = useQuery({
    queryKey: ["authUser"],
    queryFn: fetchUser,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Autenticação</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

