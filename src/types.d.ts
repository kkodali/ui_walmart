interface Product {
    complete: boolean;
    dessert: string;
    calories: number;
    fat: number;
    carbs: number;
    protien: number;
    selected: boolean;
}

type ToggleProduct = ( selectedProduct: Product) => void;

type AddTodo = (
    dessert: string,
    calories: number,
    fat: number,
    carbs: number,
    protien: number,
    selected: boolean
  ) => void;