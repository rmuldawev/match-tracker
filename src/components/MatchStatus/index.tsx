import { MatchStatus as Status } from "@/types/match";
import React, { FC } from "react";

interface MatchStatusProps {
  status: Status;
}

const MatchStatus: FC<MatchStatusProps> = ({ status }) => {
  const statusStyles: Record<Status, string> = {
    Finished:
      "w-[92px] h-[27px] rounded-[4px] px-[2px] py-[6px] flex items-center justify-center gap-[10px] bg-[#EB0237] text-white",
    Scheduled:
      "w-[112px] h-[27px] rounded-[4px] px-[8px] py-[6px] flex items-center justify-center gap-[10px] bg-[#EB6402] text-white",
    Ongoing:
      "w-[92px] h-[27px] rounded-[4px] px-[2px] py-[6px] flex items-center justify-center gap-[10px] bg-[#43AD28] text-white",
  };

  return (
    <div
      className={`px-3 py-1 rounded-md font-inter-semibold size-[12px] ${
        statusStyles[status] || "bg-gray-500 text-white"
      }`}
    >
      {status}
    </div>
  );
};

export default MatchStatus;
