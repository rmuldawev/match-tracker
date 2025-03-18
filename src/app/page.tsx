"use client";

import HomeHeader from "@/components/HomeHeader";
import MatchCard from "@/components/MatchCard";
import { fetchMatches } from "@/lib/queries/matches";
import { Match } from "@/types/match";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data, error, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["matches"],
    queryFn: fetchMatches,
  });

  if (isLoading) {
    return <div className="p-4">Загрузка...</div>;
  }

  // if (error) {
  //   return (
  //     <div className="p-4 text-red-500">
  //       Ошибка: не удалось загрузить информацию
  //     </div>
  //   );
  // }

  // Предполагаем, что API возвращает объект с полем matches или сразу массив матчей

  return (
    <div className="flex flex-col gap-[16px] !px-[42px] !pt-[53px]">
      <HomeHeader error={error} isFetching={isFetching} refetch={refetch} />

      <ul className="flex flex-col !gap-[12px]">
        {data?.map((match: Match, index: number) => {
          return <MatchCard match={match} key={index} />;
        })}
      </ul>
    </div>
  );
}
