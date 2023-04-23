export const fakeApi = () => new Promise((resolve) => {
    window.setTimeout(() => {
        resolve('200');
    }, 1000);
});
