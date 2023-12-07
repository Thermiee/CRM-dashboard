export const UserData = async () => {
    const url = "https://fe-task-api.mainstack.io/user"
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export const WalletData = async () => {
    const url = "https://fe-task-api.mainstack.io/wallet"
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export const TransactionData = async () => {
    const url = "https://fe-task-api.mainstack.io/transactions"
    const response = await fetch(url)
    const data = await response.json()
    return data
}

