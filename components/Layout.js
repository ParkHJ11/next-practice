import Nav from './Nav'
import Head from 'next/head'

// children 안에 props로 index.js나 phothos.js 같은page들이 들어가게된다.
const Layout = ({children}) => {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  );
}

export default Layout