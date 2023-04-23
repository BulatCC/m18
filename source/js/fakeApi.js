export const fakeApi = () => new Promise((resolve) => {
    setTimeout(() => resolve('200'), 1000);
});
