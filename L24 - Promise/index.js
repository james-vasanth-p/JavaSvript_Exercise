// Example: Simple Promise that resolves after 2 seconds

function asyncTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task completed!');
        }, 2000);
    },error=>{
        alert(error);
    });
}

asyncTask()
    .then(result => {
        console.log(result); // Output: Task completed!
    })
    .catch(error => {
        console.error(error);
    }) ;