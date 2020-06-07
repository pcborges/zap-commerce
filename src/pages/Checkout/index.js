import React from "react";
import useForm from "../../hooks/useForm";

export default function Checkout() {
  const [values, handleChange, handleSubmit] = useForm();
  const nextStep = () => {
    console.log("Dentro do nextStep", values);
  };
  return (
    <>
      <form onSubmit={handleSubmit(nextStep)}>
        <div>
          <label>Nome Completo</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Informe seu nome"
            value={values.name}
          />
        </div>
        <div>
          <label>Endereço</label>
          <input
            type="text"
            name="address"
            onChange={handleChange}
            placeholder="Informe seu endereço"
            value={values.address}
          />
        </div>
        <div>
          <label>Observações</label>
          <input
            type="text"
            name="notes"
            onChange={handleChange}
            placeholder="Informe seu endereço"
            value={values.notes}
          />
        </div>
        <button type="submit">Próximo</button>
      </form>
    </>
  );
}
