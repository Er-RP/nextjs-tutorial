const handleError = (error: any,operation:string) => {
    console.log(`Error while ${operation}:`,error)
    throw new Error(`Something went wrong while ${operation}`)
}

export default handleError