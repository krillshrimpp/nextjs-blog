import Link from 'next/link';
import Head from 'next/head';
import Script from "next/script";



export default function FirstPost() {
  return (
    <><>

        <h1>First Post
        
        </h1>
        <h2>
          <Link href="/">Back to home</Link>
          
        </h2>
        <p1>Hi, my name is Lee Hoseop. I'm a freshman in hanyang university. Why are we suddenly making a webpage? weren't we learning about algorithms?
        
        </p1>
        <p2><Link href="/processing.html">bouncing balls</Link></p2>
      </></>
  );
} 