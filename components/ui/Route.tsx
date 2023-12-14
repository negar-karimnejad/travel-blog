import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface routeProps {
  route: string;
  isActive?: boolean;
  label: string;
  onClick?: () => void;
}

export default function Route({ route, onClick, isActive, label }: routeProps) {
  return (
    <Link
      href={route}
      onClick={onClick}
      className={clsx(isActive && "text-primary rounded-none bg-transparent")}
    >
      {label}
    </Link>
  );
}
