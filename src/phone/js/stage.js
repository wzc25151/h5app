(function(window, $) {
    var html = $("html");
    var body = $("body");
    var width = html.width();
    if (width < 1000) {
        var fontSize = width * 62.5 / 320;
        html.css("font-size", fontSize + "%");
    }
    var _header = null;
    var _footer = null;
    var _toolbar = null;
    window.app.stage.showHeader = function() {
        if (_header == null) {
            _header = {
                view: $('<div class="header"></div>'),
                title: $('<span class="title">标题</span>'),
                left: $('<a href="javascript:void(0)" class="left">&lt;返回</a>'),
                right: $('<a href="javascript:void(0)" class="right">更多</a>')
            };
            _header.view.append(_header.title);
            _header.view.append(_header.left);
            _header.view.append(_header.right);
            _header.right.click(function(event) {
                window.app.stage.showToolbar();
            });
        }
        body.append(_header.view);
    };
    window.app.stage.closeHeader = function() {
        if (_header) {
            _header.detach();
        };
    };
    window.app.stage.showFooter = function() {
        if (_footer == null) {
            _footer = {
                view: $('<div class="footer"><a href="javascript:void(0)">页面A</a><a href="javascript:void(0)">页面B</a></div>')
            };
        };
        body.append(_footer.view);
    };
    window.app.stage.closeFooter = function() {
        if (_footer) {
            _footer.detach();
        };
    };
    window.app.stage.showToolbar = function() {
        if (_toolbar == null) {
            _toolbar = {
                view: $('<div class="toolbar popup"><br><br>helloworld<br><br></div>')
            };
        }
        window.app.stage.showMask(_toolbar.view, window.app.stage.closeToolbar);
        _toolbar.view.animate({
            top: (html.height() - _toolbar.view.height()) + "px"
        }, "fast");
    };
    window.app.stage.closeToolbar = function() {
        if (_toolbar) {
            _toolbar.view.animate({
                top: "100%"
            }, "fast", window.app.stage.closeMask);
        }
    };
    window.app.stage.showHeader();
    window.app.stage.showFooter();
})(window, jQuery);