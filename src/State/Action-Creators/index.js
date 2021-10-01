export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch ({
            type:'dposit',
            payload: amount
        })
    }
}
export const withdrawitMoney = (amount) => {
    return (dispatch) => {
        dispatch ({
            type:'withdraw',
            payload: amount
        })
    }
}