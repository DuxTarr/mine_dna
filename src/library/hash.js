class Hash {
    static regular = /[0-9a-fA-F]+/g;

    static convertToValid(string) {
        if (string === null) {
            return '';
        }
        let match = string.match(this.regular);
        if (match === null) {
            return '';
        }
        return match[0];
    }

    static getHash($string) {
        let md5 = require('md5');
        return md5($string).substr(0, 15);
    }
}

export default Hash;
