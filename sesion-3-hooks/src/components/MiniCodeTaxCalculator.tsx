import { useRef, useState } from 'react';

const MiniCodeTaxCalculator: React.FC = () => {
  const grossIncomeRef = useRef<HTMLInputElement>(null);
  const taxPercentRef = useRef<HTMLInputElement>(null);
  const [total, setTotal] = useState<number>(0);

  const getNetIncome = (): void => {
    const grossIncome = grossIncomeRef.current?.valueAsNumber as number;
    const taxPercent = taxPercentRef.current?.valueAsNumber as number;

    const totalCalc = grossIncome - grossIncome * (taxPercent / 100);
    console.log('The net total is:', totalCalc);
    setTotal(totalCalc);
  };

  console.log('Renderizando MiniCodeTaxCalculator');
  return (
    <>
      <h3>Calculadora sueldo neto</h3>

      <label htmlFor="gross-income">Sueldo bruto</label>
      <input
        id="gross-income"
        name="gross-income"
        type="number"
        defaultValue="0"
        min="0"
        ref={grossIncomeRef}
      />

      <br />

      <label htmlFor="tax">Porcentaje de impuestos</label>
      <input
        id="tax"
        name="tax"
        type="number"
        defaultValue="10"
        min="0"
        max="100"
        ref={taxPercentRef}
      />

      <br />

      <button onClick={getNetIncome}>Obtener sueldo neto</button>

      <h3>El total es: {total}</h3>
    </>
  );
};

export default MiniCodeTaxCalculator;
