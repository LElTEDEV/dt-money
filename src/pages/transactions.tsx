import { Header } from "../components/header";
import { Summary } from "../components/summary";

const priceHighlightColors = {
  income: "text-green-300",
  outcome: "text-red-300",
};

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <div className="w-full max-w-280 mt-16 mx-auto px-6">
        <table className="w-full border-separate border-spacing-y-2 mt-6">
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td className={`${priceHighlightColors["income"]}`}>
                R$ 12.000,00
              </td>
              <td>Venda</td>
              <td>15/12/2025</td>
            </tr>

            <tr>
              <td width="50%">Lanche de Costela</td>
              <td className={`${priceHighlightColors["outcome"]}`}>
                - R$ 49,00
              </td>
              <td>Alimentação</td>
              <td>14/12/2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
