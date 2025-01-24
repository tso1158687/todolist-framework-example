"use client"
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Page() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  const goToPage = (route:string):void => {
    router.push(`/${route}`);
  };
  return (
    <div className="container">
      <h1>hello nextjs</h1>
      <button onClick={() => setCount(count + 1)}>click me</button>
      {count}

      <ul>
        <li onClick={()=>goToPage('list')}>list</li>
        <li onClick={()=>goToPage('todo')}>todo</li>
      </ul>
    </div>
  );
}
