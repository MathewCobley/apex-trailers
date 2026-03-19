// ========================================
// File: src/app/page.tsx
// ========================================

import Image from "next/image";
import LeadCaptureForm from "../components/LeadCaptureForm";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <section className="mx-auto max-w-7xl px-8 pt-16 pb-20">
        <div className="mb-10">
          <Image
            src="/apex-logo-big.png"
            alt="Apex Trailers"
            width={800}
            height={300}
            priority
            className="h-36 w-auto object-contain"
          />
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-6 inline-block rounded-full border border-white/20 px-4 py-1 text-xs tracking-[0.25em] text-[#d6c08d]">
              LAUNCHING SOON
            </div>

            <h1 className="mb-6 text-5xl font-semibold leading-tight md:text-6xl">
              Built for adventure.
              <br />
              Designed to go further.
            </h1>

            <p className="mb-8 max-w-md text-lg text-white/70">
              Premium off-road trailers with rugged capability, clean design,
              and practical features for real-world trips.
            </p>

            <LeadCaptureForm
              buttonText="GET MORE INFO"
              inputClassName="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none sm:w-72"
              buttonClassName="rounded-xl bg-[#d6c08d] px-5 py-3 text-sm font-medium text-black disabled:opacity-70"
            />
          </div>

          <div className="relative">
            <Image
              src="/apex-hero.png"
              alt="Apex Trailer"
              width={900}
              height={650}
              priority
              className="h-auto w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-t border-white/10 px-8 py-20">
        <p className="mb-3 text-xs tracking-[0.25em] text-[#d6c08d]">
          WHY APEX
        </p>

        <h2 className="mb-4 max-w-4xl text-3xl font-semibold md:text-4xl">
          Designed for real adventure, not just showroom looks
        </h2>

        <p className="max-w-2xl text-white/70">
          Built around durability, practical storage, and a premium finish that
          still feels rugged and ready for the outdoors.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-20">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-12 md:px-12 md:py-16">
          <p className="mb-3 text-xs tracking-[0.25em] text-[#d6c08d]">
            EARLY ACCESS
          </p>

          <h2 className="mb-4 max-w-3xl text-3xl font-semibold md:text-5xl">
            Be first to hear when Apex launches
          </h2>

          <p className="mb-8 max-w-2xl text-white/70">
            Join the early-access list for launch updates, first release news,
            and priority information as Apex Trailers gets closer to launch.
          </p>

          <LeadCaptureForm
            buttonText="GET MORE INFO"
            inputClassName="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none sm:w-80"
            buttonClassName="rounded-xl bg-[#d6c08d] px-5 py-3 text-sm font-medium text-black disabled:opacity-70"
          />
        </div>
      </section>

      <footer className="mx-auto max-w-7xl border-t border-white/10 px-8 py-10 text-sm text-white/50">
        © 2026 Apex Trailers. All rights reserved.
      </footer>
    </main>
  );
}