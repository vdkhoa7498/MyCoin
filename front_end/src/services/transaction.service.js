import axios from '../utils/axios'

export function getTransactions() {
    return axios.get("/transactions");
}

export function createTransaction({
    sender,
    receiver,
    amount,
    privateKey,
}) {
    return axios.post("/transaction", {
        sender,
        receiver,
        amount,
        privateKey,
    });
}