"use client"

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Modal({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className={"modal is-active"} id="modal">
      <div
        className="modal-background"
        onClick={() => {
          router.back();
        }}
      ></div>
      <div className="modal-content">{children}</div>
    </div>
  );
}
