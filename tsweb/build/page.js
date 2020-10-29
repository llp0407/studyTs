define("components", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Foot = exports.Content = exports.Header = void 0;
    var Header = (function () {
        function Header() {
            var elem = document.createElement("div");
            elem.innerText = "this is Header";
            document.body.appendChild(elem);
        }
        return Header;
    }());
    exports.Header = Header;
    var Content = (function () {
        function Content() {
            var elem = document.createElement("div");
            elem.innerText = "this is Content";
            document.body.appendChild(elem);
        }
        return Content;
    }());
    exports.Content = Content;
    var Foot = (function () {
        function Foot() {
            var elem = document.createElement("div");
            elem.innerText = "this is Foot";
            document.body.appendChild(elem);
        }
        return Foot;
    }());
    exports.Foot = Foot;
});
define("page", ["require", "exports", "components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Page = (function () {
        function Page() {
            new components_1.Header();
            new components_1.Content();
            new components_1.Foot();
        }
        return Page;
    }());
    exports.default = Page;
});
