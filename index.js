// Iterating with Async/Await
async function iterateWithAsyncAwait(arr) {
    for (const value of arr) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(value);
    }
}

iterateWithAsyncAwait([1, 2, 3, 4, 5]);

// Awaiting a Call
async function awaitCall() {
    const data = await new Promise(resolve => {
        setTimeout(() => resolve({ message: 'API response' }), 2000);
    });
    console.log(data);
}

awaitCall();

// Handling Errors with Async/Await
async function errorHandler() {
    try {
        const data = await new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error('API error')), 2000);
        });
        console.log(data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

errorHandler();

// Awaiting Concurrent Requests
async function concurrentRequests() {
    const promises = [
        new Promise(resolve => {
            setTimeout(() => resolve({ message: 'API response 1' }), 2000);
        }),
        new Promise(resolve => {
            setTimeout(() => resolve({ message: 'API response 2' }), 3000);
        }),
    ];

    const results = await Promise.all(promises);
    console.log(results);
}

concurrentRequests();