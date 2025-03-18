import { Match } from "@/types/match";
import React, { FC } from "react";
import { motion } from "framer-motion";
import TeamStats from "./TeamStats";

interface MatchDetailsProps {
  match: Match;
  isOpen: boolean;
}

const MatchDetails: FC<MatchDetailsProps> = ({ match, isOpen }) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <div className="flex overflow-x-auto justify-between rounded-4px bg-gradient-to-r from-[#0F1318] to-[#0A0E12] shadow-lg ">
        <TeamStats team={match.homeTeam} />
        <TeamStats team={match.awayTeam} />
      </div>
    </motion.div>
  );
};

export default MatchDetails;
