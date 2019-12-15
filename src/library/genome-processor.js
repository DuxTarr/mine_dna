let GenomeProcessor = {
    HEX_PREFIX: '0x',


    getInfoByCode: function (appearance, skills) {
        if (appearance.indexOf(this.HEX_PREFIX) === 0) {
            appearance = appearance.substr(2, 16)
        }

        let eyesGene = this.getEyesNameByHash(appearance);
        let skinGene = this.getSkinNameByHash(appearance);
        let hairGene = this.getHairNameByHash(appearance);
        let jacketGene = this.getJacketNameByHash(appearance);
        let pantsGene = this.getPantsNameByHash(appearance);

        return {
            eyes: eyesGene,
            skin: skinGene,
            hair: hairGene,
            jacket: jacketGene,
            pants: pantsGene,
        }

    },

    getEyesNameByHash: function (genome) {
        let symbol = genome.substr(1,1);
        return this.convertSymbolToString(symbol);
    },

    getSkinNameByHash: function (genome) {
        let symbol = genome.substr(12,1);
        return this.convertSymbolToString(symbol);
    },

    getHairNameByHash: function (genome) {
        let symbol = genome.substr(5,1);
        return this.convertSymbolToString(symbol);
    },

    getJacketNameByHash: function (genome) {
        let symbol = genome.substr(11,1);
        return this.convertSymbolToString(symbol);
    },

    getPantsNameByHash: function (genome) {
        let symbol = genome.substr(9,1);
        return this.convertSymbolToString(symbol);
    },

    convertSymbolToString(symbol) {
        return "0" + Math.floor(parseInt(symbol, 16)/2).toString();
    }
};

export default GenomeProcessor;
