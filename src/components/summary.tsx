import { CircleArrowDown, CircleArrowUp, DollarSign } from "lucide-react";
import { SummaryCard } from "./summaryCard";

export function Summary() {
  return (
    <section className="w-full max-w-280 mx-auto px-6 grid md:grid-cols-3 gap-8 -mt-20">
      <SummaryCard
        title="Entradas"
        amount="17.400,00"
        icon={CircleArrowUp}
        iconColor="green"
      />

      <SummaryCard
        title="Saídas"
        amount="17.400,00"
        icon={CircleArrowDown}
        iconColor="red"
      />

      <SummaryCard title="Total" amount="17.400,00" icon={DollarSign} />
    </section>
  );
}
