import Crown from "@/assets/icons/Crown";
import { Match } from "@/types/match";
import React, { FC, useState } from "react";
import MatchStatus from "../MatchStatus";
import MatchDetails from "./MatchDetails";

interface MatchCardProps {
  match: Match;
}

const MatchCard: FC<MatchCardProps> = ({ match }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="flex flex-col overflow-hidden  !rounded-[4px]"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className=" flex justify-between bg-gradient-to-r from-[#0F1318] to-[#0A0E12] shadow-lg !p-[16px] ">
        <div className="flex items-center gap-[14px]">
          <Crown />
          <p className="font-inter font-semibold text-[16px] leading-[100%] tracking-[0%]">
            {match.homeTeam.name}
          </p>
        </div>
        <div className="flex-col text-center items-center justify-center">
          <p className="font-inter-semibold">
            {match.homeScore} : {match.awayScore}
          </p>
          <MatchStatus status={match.status} />
        </div>
        <div className="flex gap-[14px] items-center">
          <p className="font-inter font-semibold text-16px leading-[100%] tracking-[0%]">
            {match.homeTeam.name}
          </p>
          <Crown />
        </div>
      </div>
      <MatchDetails match={match} isOpen={isOpen} />
    </div>
  );
};

export default MatchCard;
