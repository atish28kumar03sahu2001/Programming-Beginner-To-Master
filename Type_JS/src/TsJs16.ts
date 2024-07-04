//Promise
const promise1 = (num: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (num <= 20) {
            resolve("Smaller Than 20");
        } else {
            reject("Greater Than 20");
        }
    });
}

promise1(25)
    .then(msg => {
        console.log(msg); // Output: Greater Than 20
    })
    .catch(error => {
        console.log(error); // Output: Greater Than 20
    });

//Async Await
interface ApiResponse {
    id: number;
    name: string;
}

async function fetchData(): Promise<ApiResponse | void> {
    try {
        let response: Response = await fetch("https://api.example.com/data");
        if (!response.ok) {
            throw new Error("Network Response Not Ok: " + response.statusText);
        }
        let data: ApiResponse = await response.json();
        return data;
    } catch (error) {
        console.log("There has been a problem", error);
    }
}

// Call the function and handle the promise
fetchData().then(data => {
    if (data) {
        console.log(data);
    }
}).catch(error => {
    console.log("Error fetching data:", error);
});