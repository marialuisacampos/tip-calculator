import { useEffect, useState } from "react";
import Button from "./components/Button";
import ButtonReset from "./components/ButtonReset";
import CustomInput from "./components/CustomInput";
import Description from "./components/Description";
import InputNumber from "./components/InputNumber";
import Label from "./components/Label";
import Nav from "./components/Nav";
import Number from "./components/Number";
import SubDescription from "./components/SubDescription";

function App() {
  const tips = ["5%", "10%", "15%", "25%", "50%"];

  const [bill, setBill] = useState<number | undefined>(undefined);
  const [tipPerson, setTipPerson] = useState<string>("");
  const [totalTip, setTotalTip] = useState<string>("");
  const [people, setPeople] = useState<number | undefined>(undefined);
  const [percentual, setPercentual] = useState<number | undefined>(undefined);

  const handleClickTip = (e: any) => {
    const percentual = e.target.value.replace("%", "");
    setPercentual(parseInt(percentual));
  };

  const handleReset = () => {
    setTotalTip("");
    setTipPerson("");
    setBill(0);
    setPercentual(0);
    setPeople(0);
  };

  useEffect(() => {
    if (bill && percentual && people) {
      const totalTip = (bill * percentual) / 100;
      const tipPerson = parseFloat(totalTip.toFixed(2)) / people;
      setTotalTip(totalTip.toString());
      setTipPerson(tipPerson.toString());
    }
  }, [people]);

  return (
    <div>
      <Nav />
      <main className="bg-white rounded-t-3xl p-8 md:flex md:w-fit md:rounded-2xl md:mx-auto">
        <section>
          <form className="flex flex-col mb-8 md:mb-0 md:pb-0">
            <Label children="Bill" />
            <InputNumber
              type="number"
              value={bill}
              onChange={(e) => setBill(parseFloat(e.target.value))}
              placeholder="0000,00"
            />

            <Label children="Select Tip %" />
            <div className="flex gap-4 flex-wrap mb-8 md:max-w-[400px]">
              {tips.map((t) => (
                <Button
                  children={t}
                  type="button"
                  value={t}
                  onClick={handleClickTip}
                  id={t}
                />
              ))}
              <CustomInput
                type="number"
                value={percentual}
                onChange={(e) => [setPercentual(parseInt(e.target.value))]}
                placeholder="Custom"
              />
            </div>

            <Label children="Number of People" />
            <InputNumber
              type="number"
              value={people}
              onChange={(e) => setPeople(parseInt(e.target.value))}
              placeholder="0"
            />
          </form>
        </section>

        <section className="bg-blue-300 rounded-2xl p-6">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <Description children="Tip" />
              <SubDescription children="/ per person" />
            </div>
            <Number children={tipPerson} />
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <Description children="Total" />
              <SubDescription children="/ total tip" />
            </div>
            <Number children={totalTip} />
          </div>

          <ButtonReset children="Reset" onClick={handleReset} type="reset" />
        </section>
      </main>
    </div>
  );
}

export default App;
