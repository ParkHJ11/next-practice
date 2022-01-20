import Image from 'next/image'
import Link from 'next/link'
// import { useRouter } from 'next/router'


const index = ({ photo }) => {
  // const router = useRouter();
  // console.log(router)

  const { title, url } = photo
  return (
    <div>
      <h2>image {title}</h2>
      <Image
        src={url}
        width={500}
        height={500}
        />
      <Link href="/photos">
        <a href="">go back</a>
      </Link>
    </div>
  )
}


export const getStaticProps = async (context) => {  // context를 prop으로 받아서
  // context안에 params안에 들어있는 id를 받아오면됨  
  const {id} = context.params;
  // 그 받아온 id를 사용해서 동적으로 주소생성
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const photo = await res.json();
  return {
    props: {
      photo
    }
  }
}

export const getStaticPaths = async() => {
  // api를 10개정도만 불러오고
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`);
  const photos = await res.json();
  // 불러온데이터를 map을 돌려서 가공한다 (id만 추출해서 배열로 리턴)
  const ids = photos.map(photo=> photo.id);
  // 리턴한 id배열을을 다시 map을 돌려서
  const paths = ids.map(id => {
    return {
      params: {id: id.toString()}       // <-- 이부분이 
    }
  })
  
  return {
    // paths: [
    //   {
    //     params: { id: '1' },
    //   },
    //   {
    //     params: { id: '2' },
    //   },
    //   {
    //     params: { id: '3' },
    //   },
    // ],

    paths: paths,

    fallback: false,
  };
}




export default index