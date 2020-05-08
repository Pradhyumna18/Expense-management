export const getAccounts="GET_ACCOUNTS";
export const onDivClicked="DIV_CLICKED";

export const fetchAccounts = (accounts) => {
    return {
        type:getAccounts,
        payload: accounts,
    }
}
export const divClicked = (name) => {
    return {
        type:onDivClicked,
        payload: name,
    }
}