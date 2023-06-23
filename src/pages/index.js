import Head from 'next/head'
import { Inter } from 'next/font/google'
import Landing from '../components/home/Hero'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Landing/>
     
      </>
  )
}
