import { usePathname, useRouter } from "next/navigation";

export default function useMenuActive(route: any) {
  const router = useRouter();
  const pathname = usePathname();

  const isActive =
    (pathname.includes(route) && route.length > 1) || pathname === route;

  return isActive;
}
