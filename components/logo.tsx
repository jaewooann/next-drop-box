"use client";

import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-1">
      <Image
        src="/images/dropbox_icon.png"
        alt="mini-dropbox-logo"
        width={50}
        height={30}
        className="!w-8 !h-atuo"
      />
      <h1 className="text-xl font-bold">Minibox</h1>
    </div>
  );
}
