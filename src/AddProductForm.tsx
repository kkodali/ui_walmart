import React, { useState } from "react";

interface Props {
  addProduct: AddTodo;
}

export const AddProductForm: React.FC<Props> = ({ addProduct }) => {
  const [product, setText] = useState({
    dessert: "",
    calories: 0,
    fat: 0,
    carbs: 0,
    protien: 0,
    selected: false,
  });

  const updateField = (e: { target: { name: any; value: any } }) => {
    setText({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const clearField = () => {
    setText({
      dessert: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protien: 0,
      selected: false,
    });
  };

  return (
    <div className="bg-moon-gray">
      <form className="measure center bg-white pa4  dataform">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f6 fw6 pv2 mh0 tc bg-yellow w-100">
            Please fill all details before you submit
          </legend>
          <div className="mt3">
            <label className="db fw6 pv1 lh-copy f6" htmlFor="dessert">
              Dessert Name*
            </label>
            <input
              className="pa2 input-reset ba bg-transparent  w-100"
              type="text"
              value={product.dessert}
              onChange={updateField}
              name="dessert"
              id="dessert"
            />
          </div>
          <div className="mt3">
            <label className="db fw6 pv1 lh-copy f6" htmlFor="calories">
              Calories*
            </label>
            <input
              className="pa2 input-reset ba bg-transparent  w-100"
              type="number"
              value={product.calories}
              onChange={updateField}
              name="calories"
              id="calories"
            />
          </div>
          <div className="mt3">
            <label className="db fw6 pv1 lh-copy f6" htmlFor="fat">
              Fat*
            </label>
            <input
              className="pa2 input-reset ba bg-transparent  w-100"
              type="number"
              value={product.fat}
              onChange={updateField}
              name="fat"
              id="fat"
            />
          </div>
          <div className="mt3">
            <label className="db fw6 pv1 lh-copy f6" htmlFor="carbs">
              Carbs*
            </label>
            <input
              className="pa2 input-reset ba bg-transparent  w-100"
              type="number"
              value={product.carbs}
              onChange={updateField}
              name="carbs"
              id="carbs"
            />
          </div>
          <div className="mt3">
            <label className="db fw6 pv1 lh-copy f6" htmlFor="protien">
              Protien*
            </label>
            <input
              className="pa2 input-reset ba bg-transparent  w-100"
              type="number"
              value={product.protien}
              onChange={updateField}
              name="protien"
              id="protien"
            />
          </div>
        </fieldset>
        <div className="mt3">
          <input
            className="f6 link dim br2 ph3 pv2 mb2 dib white bg-dark-green w-100"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              addProduct(
                product.dessert,
                product.calories,
                product.fat,
                product.carbs,
                product.protien,
                product.selected
              );
              clearField();
            }}
            value="SUBMIT"
            disabled={
              product.dessert === "" ||
              product.calories === 0 ||
              product.fat === 0 ||
              product.carbs === 0 ||
              product.protien === 0
            }
          />
        </div>
      </form>
    </div>
  );
};
