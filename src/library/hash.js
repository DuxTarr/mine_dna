class Hash {
    static regular = /[0-9a-fA-F]+/g;

    static convertToValid(string) {
        let match = string.match(this.regular);
        if (match === null) {
            return null;
        }
        return match[0];
    }
}

export default Hash;
