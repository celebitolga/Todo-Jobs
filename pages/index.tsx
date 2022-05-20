import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

// Redux hooks
import { useAppDispatch } from "../app/hooks";

// Slicer functions
import { setPriorityOptions } from "@Features/PriorityOptionsSlice";

// config (Server URL)
import { server } from "../config";

// components
import { Todo } from "@Components";

interface Props {
  prioritySelectOptions: Array<IPrioritySelect>;
}

const Home: NextPage<Props> = ({ prioritySelectOptions = [] }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPriorityOptions(prioritySelectOptions));
  }, [dispatch, prioritySelectOptions]);

  return (
    <>
      <Head>
        <title>Todo</title>
        <meta name="description" content="Generated by Tolga Çelebi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Todo />
    </>
  );
};

export const getStaticProps = async () => {
  const prioritySelectOptions = await fetch(`${server}/api/prioritySelectOptions`)
  .then((res) => res.json())
  .catch(() => []);

  return {
    props: {
      prioritySelectOptions,
    },
  };
};

export default Home;
