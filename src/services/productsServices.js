class ProductsServices {
    static async getProducts() {  //llamarlo sin crear un nuevo objeto de la clase
        const headers = {
            "Content-type" : "application/json",
            Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
        }
        try {
            let response = await fetch("https://coding-challenge-api.aerolab.co/products", {headers} );
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    static async getHistory() {  //llamarlo sin crear un nuevo objeto de la clase
        const headers = {
            "Content-type" : "application/json",
            Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
        }
        try {
            let response = await fetch("https://coding-challenge-api.aerolab.co/user/history", {headers} );
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    static async postRedeem(productId) {  //llamarlo sin crear un nuevo objeto de la clase
        const headers = {
            "Content-type" : "application/json",
            Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
        }

        const params = {
            body: {productId},
            method: "post",
            mode: "cors",
            headers
        }

        try {
            let response = await fetch("https://private-anon-c888d91f1b-aerolabchallenge.apiary-mock.com/redeem", {params} );
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

export default ProductsServices;