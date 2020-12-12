class ProductsServices {
    static async getProducts() {  //llamarlo sin crear un nuevo objeto de la clase
        const headers = {
            "Content-type" : "application/json",
            Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ3NjI2ZjdkMjAwMjA0MTE0YzYiLCJpYXQiOjE2MDcxODM3MzR9.8tw4EsTsWF43Ortf_dnCFCfitH96p2hYvqxpKHW5NEU"
        }
        try {
            let response = await fetch("https://coding-challenge-api.aerolab.co/products", {headers} );
            if (response.status !== 200) {
                throw new Error("Ups, something went wrong!")
            }
            response = await response.json();
            return response;

        } catch (error) {
            return false;
        }
    }

    static async postRedeem(productId) {  //llamarlo sin crear un nuevo objeto de la clase
        const headers = {
            "Content-type" : "application/json",
            Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ3NjI2ZjdkMjAwMjA0MTE0YzYiLCJpYXQiOjE2MDcxODM3MzR9.8tw4EsTsWF43Ortf_dnCFCfitH96p2hYvqxpKHW5NEU"
        }

        const parameters = {
            body: JSON.stringify({productId}),
            method: "post",
            mode: "cors",
            headers
        }
        
        try {
            let response = await fetch("https://coding-challenge-api.aerolab.co/redeem", parameters );
            if (response.status !== 200) {
                throw new Error("Ups, something went wrong!")
            }
            response = await response.json();
            return response;

        } catch (error) {
            return false;
        }
    }
}

export default ProductsServices;