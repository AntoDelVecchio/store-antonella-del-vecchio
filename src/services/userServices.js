class UserServices {
    static async getUser() {  //llamarlo sin crear un nuevo objeto de la clase
        const headers = {
            "Content-type" : "application/json",
            Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ3NjI2ZjdkMjAwMjA0MTE0YzYiLCJpYXQiOjE2MDcxODM3MzR9.8tw4EsTsWF43Ortf_dnCFCfitH96p2hYvqxpKHW5NEU"
        }
        try {
            let response = await fetch("https://coding-challenge-api.aerolab.co/user/me", {headers} );
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    static async postCoins(cantCoins) {  //llamarlo sin crear un nuevo objeto de la clase
        const headers = {
            "Content-type" : "application/json",
            Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ3NjI2ZjdkMjAwMjA0MTE0YzYiLCJpYXQiOjE2MDcxODM3MzR9.8tw4EsTsWF43Ortf_dnCFCfitH96p2hYvqxpKHW5NEU"
        }

        const params = {
            body: {amount: cantCoins},
            method: "post",
            mode: "cors",
            headers
        }
        
        try {
            let response = await fetch("https://coding-challenge-api.aerolab.co/user/points", params );
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

export default UserServices;