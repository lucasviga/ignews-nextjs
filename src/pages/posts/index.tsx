import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../../services/prismic';

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>19 de setembro de 2021</time>
            <strong>Substituindo a instrução switch por Object Literal</strong>
            <p>Object Literal é um bom substituto da instrução procedural switch. O switch apresenta alguns problemas — o design do código é bem antigo e procedural; dificulta encontrar um possível bug e podemos esquecer de colocar a instrução break;</p>
          </a>

          <a href="#">
            <time>19 de setembro de 2021</time>
            <strong>Substituindo a instrução switch por Object Literal</strong>
            <p>Object Literal é um bom substituto da instrução procedural switch. O switch apresenta alguns problemas — o design do código é bem antigo e procedural; dificulta encontrar um possível bug e podemos esquecer de colocar a instrução break;</p>
          </a>

          <a href="#">
            <time>19 de setembro de 2021</time>
            <strong>Substituindo a instrução switch por Object Literal</strong>
            <p>Object Literal é um bom substituto da instrução procedural switch. O switch apresenta alguns problemas — o design do código é bem antigo e procedural; dificulta encontrar um possível bug e podemos esquecer de colocar a instrução break;</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'publication') 
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  })

  console.log(JSON.stringify(response, null, 2));

  return {
    props: {}
  }
}