const rand = () => {
    return Math.random().toString(36).substr(2)
}

function token() {
    return rand() + rand()
}

export default token