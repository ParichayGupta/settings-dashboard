import { StatCardData } from "@/assets/dashboard";

export interface StatsRowProps {
  cards: StatCardData[];
}

export default function StatsRow({ cards }: StatsRowProps){
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {cards.map((card) => (
        <div
          key={card.label}
          className="rounded-2xl p-4 px-6 text-white shadow-sm flex justify-between"
          style={{ backgroundImage: `linear-gradient(135deg, ${card.from}, ${card.to})` }}
        >
          <span className="text-l opacity-90">{card.label}</span>
          <span className="text-xl font-bold">{card.value}</span>
        </div>
      ))}
    </div>
  );
}