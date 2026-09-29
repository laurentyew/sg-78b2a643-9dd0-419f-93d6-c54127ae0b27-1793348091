import React from "react";

const stats = [
  { value: "12,400+", label: "Spam comments hidden daily" },
  { value: "97%", label: "Brand-voice reply accuracy" },
  { value: "6.5 hrs", label: "Saved per week, per brand" },
  { value: "3 platforms", label: "Instagram, Facebook, TikTok" },
];

export function Stats() {
  return (
    <section className="py-16 bg-primary">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1.5">
              <p className="font-serif text-3xl sm:text-4xl font-bold text-primary-foreground">
                {stat.value}
              </p>
              <p className="text-sm text-primary-foreground/75">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}