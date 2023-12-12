import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { Source } from "~~/components/my-hats/Source";

const MyHats: NextPage = () => {
  return (
    <>
      <MetaHeader title="My Hats | Reputation & Roles" description="My Hats" />
      <div className="grid lg:grid-cols-1 flex-grow" data-theme="exampleUi">
        <Source />
      </div>
    </>
  );
};

export default MyHats;
