import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { Source } from "~~/components/the-taming-of-the-dragon/Source";

const TheTamingOfTheDragon: NextPage = () => {
  return (
    <>
      <MetaHeader title="Taming Of The Dragon | Reputation & Roles" description="Taming Of The Dragon" />
      <div className="grid lg:grid-cols-1 flex-grow" data-theme="exampleUi">
        <Source />
      </div>
    </>
  );
};

export default TheTamingOfTheDragon;
