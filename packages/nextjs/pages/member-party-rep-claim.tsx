import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { Source } from "~~/components/member-party-rep-claim/Source";

const MemberPartyRepClaim: NextPage = () => {
  return (
    <>
      <MetaHeader title="Rep Claim | Reputation & Roles" description="Rep Claim " />
      <div className="grid lg:grid-cols-1 flex-grow" data-theme="exampleUi">
        <Source />
      </div>
    </>
  );
};

export default MemberPartyRepClaim;
