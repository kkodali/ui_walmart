import React, { useState } from "react";
import { ProductList } from "./ProductList";
import { AddProductForm } from "./AddProductForm";
import { useQuery, QueryCache, ReactQueryCacheProvider } from "react-query";
import axios from "axios";
import "../node_modules/tachyons/css/tachyons.min.css";

const queryCache = new QueryCache();

const initialProducts: Product[] = [
  {
    complete: false,
    dessert: "",
    calories: 0,
    fat: 0,
    carbs: 0,
    protien: 0,
    selected: false,
  },
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [addnew, toggleAddItem] = useState(false);
  const toggle = () => toggleAddItem(!addnew);
  const dismiss = () => {
    if (addnew === true) {
      toggleAddItem(!addnew);
    }
  };
  const { data } = usePosts();

  // const [ sort, updateProducts] = useState('desc');

  // function onSort(column) {
  //  const sortedData = products.sort((a, b) => {
  //     if (column === 'dessert') {
  //       const nameA = a.dessert.toUpperCase();
  //       const nameB = b.dessert.toUpperCase();
  //       if (nameA < nameB) {
  //         return -1;
  //       }
  //       if (nameA > nameB) {
  //         return 1;
  //       }

  //       // names must be equal
  //       return 0;
  //     } else if (column === 'calories') {
  //       return a.calories - b.calories;
  //     }
  //   });
      
  //   if (sort === 'desc') {
  //     sortedData.reverse();
  //   }
    
  //   setProducts({
  //     data: sortedData,
  //     sort: {
  //       direction,
  //     }
  //   });
  // };

  function usePosts() {
    return useQuery("posts", async () => {
      await axios({
        url: "http://localhost:4000/graphql",
        method: "post",
        data: {
          query: `{
            products{
                dessert
                calories
                fat
                carbs
                protien
            }
          }`,
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((result) => {
          if (products.length === 1) {
            setProducts(result.data.data.products);
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
  }

  const toggleProduct = (selectedProduct: Product) => {
    const newTodos = products.map((todo) => {
      if (todo === selectedProduct) {
        return {
          ...todo,
          complete: !todo.complete,
          selected: !todo.selected,
        };
      }
      return todo;
    });
    setProducts(newTodos);
  };

  const addProduct: AddTodo = (
    dessert: string,
    calories: number,
    fat: number,
    carbs: number,
    protien: number,
    selected: boolean
  ) => {
    const newProduct = {
      dessert,
      calories,
      fat,
      carbs,
      protien,
      complete: false,
      selected: false,
    };
    setProducts([...products, newProduct]);
    toggle();
  };

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <>
        <div
          className="pa4-ns pa0 bg-moon-gray f6 w-100 min-vh-100 mw8 center"
          onClick={dismiss}
        >
          <div className="overflow-auto">
            <section className="ph4">
              <article className="mw8 bg-grey">
                <div className="dt-ns dt--fixed-ns w-100 bg-grey">
                  <div className="ph3 fl v-mid">
                    <h2>Nutrition List</h2>
                  </div>
                  <div className="pa3 fr v-mid">
                    <a
                      href="/"
                      className="no-underline pa3 f7 tc db w-100 pv2 bg-green  white br2"
                    >
                      RESET DATA
                    </a>
                  </div>
                </div>
              </article>
            </section>
            <section className="ph4">
              <article className="mw8">
                <div className="dt-ns dt--fixed-ns w-100 ba b--light-pink  bg-pink">
                  <div className="pa3 fl v-mid">
                    <div>
                      <p className="black-70 measure lh-copy mv0">0 selected</p>
                    </div>
                  </div>
                  <div className="pa3-ns pa0 fr v-mid">
                    <a
                      href="#"
                      className="no-underline pa3 f7 tc db w-100 pv2 bg-red  white br2"
                    >
                      DELETE
                    </a>
                  </div>
                  <div className="pa3-ns pa0 fr v-mid">
                    <a
                      href="#"
                      onClick={toggle}
                      className="no-underline pa3 f7 tc db w-100 pv2 bg-white  green br2"
                    >
                      + ADD NEW
                    </a>
                  </div>
                </div>
              </article>
            </section>
          </div>
          <ProductList products={products} toggleProduct={toggleProduct} />
        </div>
        {addnew ? <AddProductForm addProduct={addProduct} /> : ""}
      </>
    </ReactQueryCacheProvider>
  );
}

export default App;
