function createCircularReference() {
    let obj1 = {};
    let obj2 = {};
    obj1.ref = obj2;
    obj2.ref = obj1;
}
createCircularReference();

function createWeakCircularReference() {
    let obj1 = {};
    let obj2 = new WeakMap();
    obj2.set(obj1, {});
    obj1.ref = obj2;
}
createWeakCircularReference();