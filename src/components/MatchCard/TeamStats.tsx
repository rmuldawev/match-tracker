import { Team } from "@/types/match";
import React, { FC } from "react";
import PlayerCard from "../PlayerCard";

interface TeamStatsProps {
  team: Team;
}

const TeamStats: FC<TeamStatsProps> = ({ team }) => {
  const { players, total_kills } = team;

  const generalDetails: { text: string; value: string }[] = [
    { text: "Points:", value: `+${team.points}` },
    { text: "Место:", value: String(team.place) },
    { text: "Всего убийств:", value: String(total_kills) },
  ];

  return (
    <div className="flex flex-col gap-[8px] !p-[12px]">
      <div className="flex gap-[8px]">
        {players.map((e, i) => (
          <PlayerCard player={e} key={i} />
        ))}
      </div>
      <div className="flex bg-[#101318] items-center justify-between !py-[14px] !px-[24px]">
        {generalDetails.map((e: { text: string; value: string }, i: number) => {
          return (
            <div className="flex  gap-[8px] items-center" key={i}>
              <p className="text-[14px] text-[#FAFAFA66]">{e.text}</p>
              <p className="text-[16px] text-[#F2F6F6]">{e.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamStats;
