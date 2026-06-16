import Image from "next/image";

export function Support24x7() {
  return (
    <section className="bg-[#f1f0ee] py-20 sm:py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6">
          <Image
            src="/icons/support/support.svg"
            alt="Support icon"
            width={100}
            height={100}
            className="h-20 w-20 sm:h-26 sm:w-26"
          />
        </div>
        <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          We support you 24/7
        </h2>
        <p className="mt-4 font-nunito text-sm leading-relaxed text-muted sm:text-sm">
          We&apos;re with you every step of the way. Bring your questions, leave
          your worries behind, and enjoy a hassle-free experience.
        </p>
      </div>
    </section>
  );
}
