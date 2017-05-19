'use strict';

var _readFile = require('./src/read-file');

var _readFile2 = _interopRequireDefault(_readFile);

var _parseWord = require('./src/parse-word');

var _translation = require('./src/translation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _readFile2.default)('./md/ng.md', 'utf-8').then(function (res) {

    var words = (0, _parseWord.wordFrequency)((0, _parseWord.parseWord)(res));
    console.log(words.length);
    words.forEach(function (e) {
        console.log(e);
        //     getTranslation(e)
        //         .then( obj => {
        //             console.log(obj)
        //         })
    });
}); /**
     * Created by hsuanlee on 16/05/2017.
     */
//# sourceMappingURL=main.js.map