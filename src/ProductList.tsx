import React from "react";

interface Props {
  products: Product[];
  toggleProduct: ToggleProduct;
}

export const ProductList: React.FC<Props> = ({ products, toggleProduct }) => {
  return (
    <div className="ph4 pb4">
      <div className="overflow-auto">
        <table className="f6 w-100 mw8 center" cellSpacing="0">
          <thead>
            <tr>
              <th className="fw6 tc bb bt b--black-20 pa3 bg-white">
                <input className="mr2" type="checkbox" checked={false} />
              </th>
              <th className="fw6 tc bb bt b--black-20 pa3 bg-white">
                Dessert(100g serving)
              </th>
              <th className="fw6 tc bb bt b--black-20 pa3 bg-white">
                Calories
              </th>
              <th className="fw6 tc bb bt b--black-20 pa3 bg-white">Fat (g)</th>
              <th className="fw6 tc bb bt b--black-20 pa3 bg-white">
                Carbs (g)
              </th>
              <th className="fw6 tc bb bt b--black-20 pa3 bg-white">
                Protien (g)
              </th>
            </tr>
          </thead>
          {products.map((todo) => (
            <tbody className="lh-copy" key={todo.dessert}>
              <tr className="stripe-dark">
                <th className="fw6 tc pa3 fw6 bb b--black-20 pb3 pr3">
                  <input
                    className="mr2"
                    type="checkbox"
                    checked={todo.selected}
                    onChange={(e) => {
                      e.preventDefault();
                      toggleProduct(todo);
                    }}
                  />
                </th>
                <td className="fw6 bb b--black-20 tc pa3">
                  {todo.dessert}
                </td>
                <td className="fw6 bb b--black-20 tc pa3">
                  {todo.calories}
                </td>
                <td className="fw6 bb b--black-20 tc pa3">{todo.fat}</td>
                <td className="fw6 bb b--black-20 tc pa3">{todo.carbs}</td>
                <td className="fw6 bb b--black-20 tc pa3">
                  {todo.protien}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};
