import Head from 'next/head'
import Link from 'next/link'


export default function Home({ posts }) {

  console.log(posts);

  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <ul>
        {posts.map(post=>(
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

    </div>
  );
}


// export const getServerSideProps = async() => {
//   // data를 불러오고
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`);
//   // 받아온 data를 
//   const posts = await res.json();

//   // 여기서 리턴된 값이 Home함수의 prop으로 전달된다.
//   return {
//     props: {
//       // posts: posts를 줄여서 표기
//       posts
//     }
//   }
// }


export const getStaticProps =  async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`);
  const posts = await res.json();

  return {
    props: {
      posts
    }
  }
}