"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Promise
const promise1 = (num) => {
    return new Promise((resolve, reject) => {
        if (num <= 20) {
            resolve("Smaller Than 20");
        }
        else {
            reject("Greater Than 20");
        }
    });
};
promise1(25)
    .then(msg => {
    console.log(msg); // Output: Greater Than 20
})
    .catch(error => {
    console.log(error); // Output: Greater Than 20
});
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield fetch("https://api.example.com/data");
            if (!response.ok) {
                throw new Error("Network Response Not Ok: " + response.statusText);
            }
            let data = yield response.json();
            return data;
        }
        catch (error) {
            console.log("There has been a problem", error);
        }
    });
}
// Call the function and handle the promise
fetchData().then(data => {
    if (data) {
        console.log(data);
    }
}).catch(error => {
    console.log("Error fetching data:", error);
});
