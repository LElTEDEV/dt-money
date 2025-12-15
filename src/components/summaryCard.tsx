import { type LucideIcon } from "lucide-react";

type SummaryIconProps = "green" | "red" | "default";

type SummaryCardProps = {
  title: string;
  icon: LucideIcon;
  amount: string;
  iconColor?: SummaryIconProps;
};

const IconColor = {
  green: "#00b37e",
  red: "#f75a68",
  default: "#fff",
};

export function SummaryCard({
  title,
  amount,
  icon: Icon,
  iconColor = "default",
}: SummaryCardProps) {
  return (
    <div className="bg-gray-700 rounded-lg p-8">
      <header className="flex items-center justify-between text-gray-300">
        <span>{title}</span>

        <Icon size={25} color={IconColor[iconColor]} />
      </header>

      <strong className="block mt-4 text-xl lg:text-[2rem]">R$ {amount}</strong>
    </div>
  );
}
