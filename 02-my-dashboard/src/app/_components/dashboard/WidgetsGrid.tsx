"use client";
import { IoCafeOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const counter = useAppSelector((state) => state.counter.count);
  return (
    <div className="flex flex-wrap p-2">
      <SimpleWidget
        icon={<IoCafeOutline size={50} />}
        title={counter.toString()}
      />
    </div>
  );
};
