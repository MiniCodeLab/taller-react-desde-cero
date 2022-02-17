import MiniCodeInterval from './MiniCodeInterval';
import MiniCodeTaxCalculator from './MiniCodeTaxCalculator';
import MiniCodeUseRef from './MiniCodeUseRef';
import MiniCodeUseRefCss from './MiniCodeUseRefCss ';

const UseRefExamples: React.FC = () => {
  return (
    <div>
      <h2>Ejemplos con useRef</h2>

      <MiniCodeUseRef />

      <hr />

      <MiniCodeTaxCalculator />

      <hr />

      <MiniCodeUseRefCss />

      <hr />

      <MiniCodeInterval />
    </div>
  );
};

export default UseRefExamples;
