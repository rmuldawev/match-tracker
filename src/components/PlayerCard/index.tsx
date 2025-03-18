import { Player } from "@/types/match";
import Image from "next/image";
import React, { FC } from "react";

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: FC<PlayerCardProps> = ({ player }) => {
  const { username, kills } = player;
  return (
    <div className="flex rounded-[4px] bg-[#101318] !w-[286px] items-center !py-[8px] !px-[24px] justify-between">
      <div className="flex items-center gap-[8px]">
        <Image src="/images/player.png" alt="player" height={36} width={36} />
        <p className="text-[16px] font-semibold leading-[1.5] tracking-[0]">
          {username}
        </p>
      </div>

      <div className="gap-[8px] flex no-wrap items-center">
        <p className="text-[14px] text-[#FAFAFA66]">Убийств:</p>
        <p className="text-[16px]">{kills}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
