


function parent() {
    let a = 10;
    return () {
        console.log(a);
    }
}

const res = parent() 
res();


// const lensCartApis = {
//     addToCart: function (productId, callBack) {
//         console.log(this);
//         // function task1 (){
//         //     console.log('task1', this);
//         //     return true;
//         // }
//         // let res  = task1();
//         // callBack(productId)

//     },
//     addCoupons: () =>  {
//         console.log(this);
//         console.log('i am addCoupons');
//     },
// }



// const cartData = {
//     productId : '12345@'
// }

// lensCartApis.addToCart(cartData.productId,  lensCartApis.addCoupons)