import React from "react";
import { useSamplePolitician } from "../../../queries/useSamplePolitician";
import { usePoliticianOffices } from "../../../queries/usePoliticianOffices";
import { usePoliticianBills } from "../../../queries/usePoliticianBills";
import { usePoliticianVotes } from "../../../queries/usePoliticianVotes";

const SamplePolitician = () => {
  const { data, isPending, isError } = useSamplePolitician();
  const {
    data: offices,
    isPending: officesPending,
    isError: officesError,
  } = usePoliticianOffices(data?.id ?? "");
  const {
    data: bills,
    isPending: billsPending,
    isError: billsError
  } = usePoliticianBills(data?.id ?? "", 1, 10)
  const {
    data: votes,
    isPending: votesPending,
    isError: votesError
  } = usePoliticianVotes(data?.id ?? "", 1, 10)

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Failed to load politician.</div>;
  }

  if (officesPending) {
    return <div>Loading offices...</div>;
  }

  if (officesError) {
    return <div>Failed to load offices.</div>;
  }

  if (billsPending) {
    return <div>Loading bills...</div>;
  }

  if (billsError) {
    return <div>Failed to load bills.</div>;
  }

  return (
    <div>
      SamplePolitician
      <p>
        {data.firstName} {data.lastName}
      </p>
      <div>
        <p>Offices:</p>
        {offices?.map((office) => (
          <div key={office.id}>
            {office.name}: {office.startDate} - {office.endDate ?? "Present"}
          </div>
        ))}
      </div>
      <div>
        <p>Bills:</p>
        {bills?.data.map((bill) => (
          <div key={bill.id}>
            Number: {bill.billNumber}
          </div>
        ))}
      </div>
      <div>
        <p>Votes:</p>
        {votes?.data.map((vote) => (
          <div key={vote.id}>
            Number: {vote.billNumber}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SamplePolitician;
