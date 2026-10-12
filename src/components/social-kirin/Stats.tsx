import React from "react";

const stats = [
  { value: "3 platforms", label: "Instagram, Facebook, and YouTube in one dashboard" },
  { value: "Real time", label: "Spam and toxic comment detection speed" },
  { value: "24/7", label: "Comment moderation and auto-replies running" },
  { value: "Under 10 min", label: "Typical time to connect an account" },
];

export function Stats() {
  return (
    <section className="bg-primary py-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1.5">
              <p className="font-serif text-2xl font-bold text-primary-foreground sm:text-3xl md:text-4xl">
                {stat.value}
              </p>
              <p className="text-sm leading-6 text-primary-foreground/75">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-5 text-primary-foreground/60">
          Social Kirin is currently in pre-launch. The figures above describe product design targets
          and platform capabilities, not measured customer results.
        </p>
      </div>
    </section>
  );
}