"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { Eye, X } from "lucide-react";

interface CertificateViewerProps {
  image: string;
  title: string;
  buttonLabel: string;
  closeLabel: string;
  certificateLabel: string;
}

export function CertificateViewer({
  image,
  title,
  buttonLabel,
  closeLabel,
  certificateLabel,
}: CertificateViewerProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="focus-ring group inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground transition hover:border-border-strong hover:bg-primary-soft"
      >
        <Eye
          size={14}
          aria-hidden="true"
        />

        {buttonLabel}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 p-2 backdrop-blur-md sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onMouseDown={(event) => {
            if (
              event.target === event.currentTarget
            ) {
              setOpen(false);
            }
          }}
        >
          <div className="flex max-h-[94svh] w-full max-w-6xl flex-col overflow-hidden rounded-[1.5rem] border border-border bg-background shadow-2xl">
            <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3 sm:px-6">
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                  {certificateLabel}
                </p>

                <h3
                  id={titleId}
                  className="mt-1 truncate text-sm font-semibold text-foreground sm:text-base"
                >
                  {title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="focus-ring flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-muted transition hover:border-border-strong hover:text-primary"
                aria-label={closeLabel}
              >
                <X
                  size={18}
                  aria-hidden="true"
                />
              </button>
            </div>

            <div className="min-h-0 overflow-y-auto bg-[#0b1016] p-3 sm:p-6">
              <Image
                src={image}
                alt={title}
                width={1600}
                height={1200}
                sizes="(max-width: 768px) 96vw, 1100px"
                className="mx-auto h-auto w-full max-w-5xl rounded-xl object-contain shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}