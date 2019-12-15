class UserInfo {
    static regular = /[a-zA-Z]+/g;

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
}

export default UserInfo;
