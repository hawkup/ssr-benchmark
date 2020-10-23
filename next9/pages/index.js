import Head from 'next/head'

export async function getServerSideProps() {
  return {
    props: {
      msg: 'Next9',
    },
  }
}

export default function Home({ msg }) {
  return (
    <h1>{ msg }</h1>
  )
}
