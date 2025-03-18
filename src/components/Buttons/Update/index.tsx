"use client";
import Spinner from "@/assets/icons/Spinner";
import React, { ButtonHTMLAttributes } from "react";

interface RedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function RedButton({
  children,
  className,
  ...props
}: RedButtonProps) {
  return (
    <button
      {...props}
      className={`flex h-[56px] items-center justify-center gap-2 !px-4 !py-2 rounded font-bold text-white 
                  bg-[#A01131] hover:bg-[#EB0237] active:bg-[#701328] 
                  transition-colors duration-200 ${className || ""}`}
    >
      <span>{children}</span>
      <Spinner />
    </button>
  );
}
