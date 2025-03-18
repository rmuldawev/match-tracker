import React, { FC, memo } from "react";
import RedButton from "../Buttons/Update";
import AlerTriangle from "@/assets/icons/AlertTriangle";

interface HomeHeaderProps {
  error: Error | null;
  isFetching: boolean;
  refetch: () => void;
}

const HomeHeader: FC<HomeHeaderProps> = ({ error, isFetching, refetch }) => {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-[32px] font-bold font-sans">Match Tracker</h1>
      <div className="flex gap-[12px]">
        {error ? (
          <div className="flex items-center h-[56px] bg-[#0F1318] rounded-[4px] gap-[10px] !p-[16px]">
            <AlerTriangle />
            <p className="text-[#FFFFFF] text-lg">
              Ошибка: не удалось загрузить информацию
            </p>
          </div>
        ) : isFetching ? (
          <div className="flex items-center h-[56px]">
            <p className="text-gray-600">Обновление данных...</p>
          </div>
        ) : null}

        <RedButton onClick={() => refetch()}>Обновить</RedButton>
      </div>
    </header>
  );
};

export default memo(HomeHeader);
