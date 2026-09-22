"use client";

import { FileDown } from "lucide-react";

interface ResumeDownloadButtonProps {
  label: string;
}

export function ResumeDownloadButton({
  label,
}: ResumeDownloadButtonProps) {
  return (
    <a
      href="/resume/Mohamed-Issam-Qeshta-CV.pdf"
      download="Mohamed-Issam-Qeshta-CV.pdf"
      className="focus-ring inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-[#061014] transition hover:bg-primary-strong"
    >
      <FileDown size={17} aria-hidden="true" />
      {label}
    </a>
  );
}