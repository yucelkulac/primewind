export const inpuValidateHelper = (inputs) => {
    let isAllFilled = true;
    inputs.forEach((element) => {
        if (element === undefined || element === null || element === '') {
            isAllFilled = false;
        }
    });
    return isAllFilled;
}