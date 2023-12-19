// function chai() {
//     console.log(this);
// }

// const chai = function() {
//     console.log(this);
// }

const chai = () => {
    console.log(this);
}
chai();