(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interface_1 = require("./interface");
var MATRIX_ARR = [
    [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }],
    [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 2 }],
    [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 1, y: 2 }],
    [{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 2, y: 1 }, { x: 2, y: 2 }],
];
var BlockL = /** @class */ (function () {
    function BlockL(index) {
        if (index === void 0) { index = Math.floor(Math.random() * 5); }
        this.type = interface_1.BLOCK_TYPE_T.L;
        this.matrix = [];
        this.index = 0;
        this.x = 0;
        this.y = 0;
        this.index = index % 4;
        this.matrix = MATRIX_ARR[this.index];
    }
    BlockL.prototype.getMatrix = function () {
        var _this = this;
        return this.matrix.map(function (item) {
            var o = { x: 0, y: 0 };
            o.x = item.x + _this.x;
            o.y = item.y + _this.y;
            return o;
        });
    };
    BlockL.prototype.change = function () {
        this.index = (this.index + 1) % 4;
        this.matrix = MATRIX_ARR[this.index];
        return this.getMatrix();
    };
    BlockL.prototype.moveLeft = function () {
        this.x = this.x - 1;
        return this.getMatrix();
    };
    BlockL.prototype.moveRight = function () {
        this.x = this.x + 1;
        return this.getMatrix();
    };
    return BlockL;
}());
exports.default = BlockL;
},{"./interface":3}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BlockL_1 = require("./BlockL");
var Game = {
    init: function (_a) {
        var context = _a.context, _b = _a.numberOfFirework, numberOfFirework = _b === void 0 ? 5 : _b;
        console.info(context);
        this.context = context;
        this.curBlock = new BlockL_1.default();
    },
    drawCurBlock: function () {
        var ctx = this.context;
        ctx.fillStyle = "green";
        this.curBlock.getMatrix().forEach(function (item) {
            ctx.fillRect(item.x * 10, item.y * 10, 9, 9);
        });
    },
    start: function () {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        console.info("asdfsd");
        this.drawCurBlock();
        requestAnimationFrame(Game.start.bind(this));
    }
};
exports.default = Game;
},{"./BlockL":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BLOCK_TYPE_T;
(function (BLOCK_TYPE_T) {
    BLOCK_TYPE_T["L"] = "L";
    BLOCK_TYPE_T["N"] = "N";
    BLOCK_TYPE_T["Z"] = "Z";
    BLOCK_TYPE_T["O"] = "O";
})(BLOCK_TYPE_T || (BLOCK_TYPE_T = {}));
exports.BLOCK_TYPE_T = BLOCK_TYPE_T;
},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = require("./Game");
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
Game_1.default.init({ context: context, numberOfFirework: 1 });
Game_1.default.start();
},{"./Game":2}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvQmxvY2tMLnRzIiwic3JjL3RzL0dhbWUudHMiLCJzcmMvdHMvaW50ZXJmYWNlLnRzIiwic3JjL3RzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLHlDQUFrRTtBQUVsRSxJQUFNLFVBQVUsR0FBRztJQUNmLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUN6QyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7SUFDekMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQ3pDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFD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LEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0QsS0FBSztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BGLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDdEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO1FBQ25CLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDaEQsQ0FBQztDQUVKLENBQUE7QUFFRCxrQkFBZSxJQUFJLENBQUE7Ozs7QUNibkIsSUFBSyxZQUtKO0FBTEQsV0FBSyxZQUFZO0lBQ2IsdUJBQUssQ0FBQTtJQUNMLHVCQUFLLENBQUE7SUFDTCx1QkFBSyxDQUFBO0lBQ0wsdUJBQUssQ0FBQTtBQUNULENBQUMsRUFMSSxZQUFZLEtBQVosWUFBWSxRQUtoQjtBQUVnQixvQ0FBWTs7OztBQ3BCN0IsK0JBQXlCO0FBQ3pCLElBQUksTUFBTSxHQUFxQixRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRW5FLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEMsY0FBSSxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sU0FBQSxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFDeEMsY0FBSSxDQUFDLEtBQUssRUFBRSxDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHtCTE9DS19ULCBCbE9DS19ULCBCTE9DS19UWVBFX1QsUE9JTlRfVH0gZnJvbSBcIi4vaW50ZXJmYWNlXCJcclxuXHJcbmNvbnN0IE1BVFJJWF9BUlIgPSBbXHJcbiAgICBbe3g6MCx5OjB9LHt4OjAseToxfSx7eDowLHk6Mn0se3g6MSx5OjJ9XSxcclxuICAgIFt7eDowLHk6MX0se3g6MSx5OjF9LHt4OjIseToxfSx7eDoyLHk6Mn1dLFxyXG4gICAgW3t4OjIseTowfSx7eDoyLHk6MX0se3g6Mix5OjJ9LHt4OjEseToyfV0sXHJcbiAgICBbe3g6MCx5OjF9LHt4OjAseToyfSx7eDoyLHk6MX0se3g6Mix5OjJ9XSxcclxuXHJcbl1cclxuY2xhc3MgQmxvY2tMIGltcGxlbWVudHMgQmxPQ0tfVCB7XHJcbiAgICB0eXBlID0gQkxPQ0tfVFlQRV9ULkxcclxuICAgIG1hdHJpeDpBcnJheTxQT0lOVF9UPiA9IFtdXHJcbiAgICBpbmRleCA9IDA7XHJcbiAgICB4ID0gMDtcclxuICAgIHkgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGluZGV4ID0gTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIDUpKXtcclxuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXggICUgNFxyXG4gICAgICAgIHRoaXMubWF0cml4ID0gTUFUUklYX0FSUlt0aGlzLmluZGV4XTtcclxuICAgIH1cclxuICAgIGdldE1hdHJpeCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hdHJpeC5tYXAoaXRlbT0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IG8gPSB7eDowLHk6MH1cclxuICAgICAgICAgICAgby54ID0gaXRlbS54ICsgdGhpcy54O1xyXG4gICAgICAgICAgICBvLnkgPSBpdGVtLnkgKyB0aGlzLnk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbztcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZSgpe1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAodGhpcy5pbmRleCArIDEpJTRcclxuICAgICAgICB0aGlzLm1hdHJpeCA9IE1BVFJJWF9BUlJbdGhpcy5pbmRleF1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TWF0cml4KClcclxuICAgIH1cclxuICAgIG1vdmVMZWZ0KCl7XHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy54IC0gMTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRNYXRyaXgoKVxyXG4gICAgfVxyXG4gICBcclxuICAgIG1vdmVSaWdodCAoKXtcclxuICAgICAgICB0aGlzLnggPSB0aGlzLnggKyAxO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE1hdHJpeCgpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9ja0wiLCJpbXBvcnQgQmxvY2tMIGZyb20gXCIuL0Jsb2NrTFwiXHJcbmxldCAgR2FtZSA9IHtcclxuICAgIFxyXG4gICAgaW5pdCh7Y29udGV4dCxudW1iZXJPZkZpcmV3b3JrID0gNX0pe1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbyhjb250ZXh0KVxyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICBcclxuICAgICAgICB0aGlzLmN1ckJsb2NrID0gbmV3IEJsb2NrTCgpXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgZHJhd0N1ckJsb2NrKCl7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuY29udGV4dDtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJncmVlblwiO1xyXG4gICAgICAgIHRoaXMuY3VyQmxvY2suZ2V0TWF0cml4KCkuZm9yRWFjaChpdGVtPT57XHJcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdChpdGVtLngqMTAsIGl0ZW0ueSoxMCwgOSwgOSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jb250ZXh0LmNhbnZhcy53aWR0aCwgdGhpcy5jb250ZXh0LmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbyhcImFzZGZzZFwiKVxyXG4gICAgICAgIHRoaXMuZHJhd0N1ckJsb2NrKClcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoR2FtZS5zdGFydC5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWUiLCJpbnRlcmZhY2UgQmxPQ0tfVCB7XHJcbiAgICBtb3ZlTGVmdDooKT0+QXJyYXk8UE9JTlRfVD5cclxuICAgIG1vdmVSaWdodDooKT0+QXJyYXk8UE9JTlRfVD5cclxuICAgIGNoYW5nZTooKT0+QXJyYXk8UE9JTlRfVD5cclxuICAgIG1hdHJpeDpBcnJheTxQT0lOVF9UPlxyXG4gICAgdHlwZTpCTE9DS19UWVBFX1RcclxuICAgIFxyXG59XHJcbmludGVyZmFjZSBQT0lOVF9UIHtcclxuICAgIHg6bnVtYmVyXHJcbiAgICB5Om51bWJlclxyXG59XHJcblxyXG5lbnVtIEJMT0NLX1RZUEVfVHtcclxuICAgIEw9XCJMXCIsXHJcbiAgICBOPVwiTlwiLFxyXG4gICAgWj1cIlpcIixcclxuICAgIE89XCJPXCJcclxufVxyXG5cclxuZXhwb3J0IHsgQmxPQ0tfVCxCTE9DS19UWVBFX1QsUE9JTlRfVH0iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9HYW1lXCJcclxubGV0IGNhbnZhczpIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUNhbnZhcycpO1xyXG5cclxubGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuR2FtZS5pbml0KHtjb250ZXh0LG51bWJlck9mRmlyZXdvcms6MX0pO1xyXG5HYW1lLnN0YXJ0KCkiXX0=
