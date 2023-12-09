import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { Source } from "~~/components/home/Source";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader title="ATX DAO | Rep & Roles Portal" description="Rep & Roles Portal" />
      <div className="grid lg:grid-cols-1 flex-grow" data-theme="exampleUi">
        <Source />
      </div>
    </>
  );
};

export default Home;
