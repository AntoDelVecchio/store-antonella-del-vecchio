class UserServices {
    static async getUser() {  //llamarlo sin crear un nuevo objeto de la clase
        const headers = {
            "Content-type" : "application/json",
            Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
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
            Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
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