class propertiesParser {
    static parse(line) {
        if (typeof line !== "string") throw new Error("It`s not line!")
        const pairs = line.split(",")
        const result = []
        pairs.map(pair => {
            if (!pair) throw new Error("Invalid syntax!")
            pair = pair.split(":")
            if (!pair[0].trim() || !pair[1].trim()) throw new Error("Invalid syntax!")
            result.push({title: pair[0].trim(), content: pair[1].trim()})
        })
        return result
    }

    static stringify(object) {
        if (typeof object !== "object") throw new Error("Invalid syntax")
        let result = ""
        object.map(pair => {
            result += `${pair.title}:${pair.content}, `
        })
        return result.slice(0, -2)
    }
};

export default propertiesParser