export interface Product {
    description: string;
    price: number;
}

// const phone: Product = {
//     description: 'Nokia A1',
//     price: 150.0
// }

// const tablet: Product = {
//     description: 'iPad Air',
//     price: 250.0
// }

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}
export const taxCalculation = ( options: TaxCalculationOptions ) : [ number, number ] => {
    let total = 0;

    const { tax, products } = options;

    products.forEach(element => {
        const { price } = element;
        total += price;
    });
    return [total, total * tax];
}

// const shoppingCart = [ phone, tablet ];
// const tax = 0.15

// const [ result, resultTax ] = taxCalculation({
//     products: shoppingCart,
//     tax
// });

// console.log( 'Total', result );
// console.log( 'Tax', resultTax );

// export {}