/*
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
*/
import Link from 'next/link';


export default function Home() {
  return (
    <div>
      Welcome to Next.js!
      <ul>
        <li>
          <Link href="/payment">
            <a>payment page</a>
          </Link>
        </li>

        <li>
          <Link href='/find'>
            <a>find page</a>
          </Link>
        </li>

        <li>
          <Link href='/job'>
            <a>job page</a>
          </Link>
        </li>

      </ul>
    </div>
  )
}
