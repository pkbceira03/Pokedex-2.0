import { Metadata } from 'next'
import Link from 'next/link'
import Header from "./components/header/header"
 
export const metadata: Metadata = {
  title: 'Next.js',
}

export default function Page() {
  return (

    <div>
      <Header/>
    </div>

  );
}