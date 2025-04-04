import { ReactNode } from "react";
import classnames from "classnames";
import { KeyValue } from "../../lib/keyboard";
import { CharStatus } from "../../lib/statuses";

type Props = {
  children?: ReactNode;
  value: KeyValue;
  width?: number;
  status?: CharStatus;
  onClick: (value: KeyValue) => void;
};

export const Key = ({
  children,
  status,
  width = 40,
  value,
  onClick,
}: Props) => {
  const classes = classnames(
    "flex items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer",
    {
      "bg-slate-200 hover:bg-slate-300 active:bg-slate-400": !status,
      "bg-slate-400 text-white": status === "absent",
      "bg-[#5d3a1a] hover:bg-[#4b2f15] active:bg-[#3a240f] text-white":
        status === "correct",
      "bg-[#d89c42] hover:bg-[#c4813a] active:bg-[#b16f2f] text-white":
        status === "present",
    }
  );

  return (
    <div
      style={{ width: `${width}px`, height: "58px" }}
      className={classes}
      onClick={() => onClick(value)}
    >
      {children || value}
    </div>
  );
};
