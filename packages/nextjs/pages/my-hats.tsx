import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { Source } from "~~/components/my-hats/Source";

const MyHats: NextPage = () => {
  return (
    <>
      <MetaHeader title="Hats Demo Day | Reputation & Roles" description="Hats Demo Day" />
      <div className="grid lg:grid-cols-1 flex-grow" data-theme="exampleUi">
        <Source />
      </div>
    </>
  );
};

export default MyHats;
