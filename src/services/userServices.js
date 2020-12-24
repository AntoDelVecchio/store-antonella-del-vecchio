class UserServices {
    static async getUser() {  //llamarlo sin crear un nuevo objeto de la clase
        const headers = {
            "Content-type" : "application/json",
            Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ3NjI2ZjdkMjAwMjA0MTE0YzYiLCJpYXQiOjE2MDcxODM3MzR9.8tw4EsTsWF43Ortf_dnCFCfitH96p2hYvqxpKHW5NEU"
        }
        const url = "https://coding-challenge-api.aerolab.co/user/me";
        try {
            let response = await fetch(url, {headers} );
            if (response.status !== 200) {
                throw new Error("Ups, something went wrong!")
            }
            response = await response.json();
            return response;

        } catch (error) {
            return false;
        }
    }

    static async getHistory() {  //llamarlo sin crear un nuevo objeto de la clase
        const headers = {
            "Content-type" : "application/json",
            Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ3NjI2ZjdkMjAwMjA0MTE0YzYiLCJpYXQiOjE2MDcxODM3MzR9.8tw4EsTsWF43Ortf_dnCFCfitH96p2hYvqxpKHW5NEU"
        }
        const url = "https://coding-challenge-api.aerolab.co/user/history";
        try {
            let response = await fetch(url, {headers} );
            if (response.status !== 200) {
                throw new Error("Ups, something went wrong!")
            }
            response = await response.json();
            return response;
            
        } catch (error) {
            return false;
        }
    }

    static async postCoins(amountCoins) {  //llamarlo sin crear un nuevo objeto de la clase
        const headers = {
            "Content-type" : "application/json",
            Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ3NjI2ZjdkMjAwMjA0MTE0YzYiLCJpYXQiOjE2MDcxODM3MzR9.8tw4EsTsWF43Ortf_dnCFCfitH96p2hYvqxpKHW5NEU"
        }

        const parameters = {
            body: JSON.stringify({amount: amountCoins}),
            method: "post",
            mode: "cors",
            headers
        }
        
        const url = "https://coding-challenge-api.aerolab.co/user/points";
        try {
            let response = await fetch(url, parameters );
            if (response.status !== 200) {
                throw new Error("Ups, something went wrong!")
            }
            response = await response.json();
            return true;

        } catch (error) {
            return false;
        }
    }
}

export default UserServices;