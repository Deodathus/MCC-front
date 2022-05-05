
function transform(amount) {
    const itemsInStackAmount = 64;

    const difference = amount % itemsInStackAmount;
    const stacksAmount = Math.floor(amount/itemsInStackAmount);

    if (stacksAmount > 0) {
        return stacksAmount + '+' + difference;
    }
}

export default {
    transform
};
