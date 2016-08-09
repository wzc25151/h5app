(function(window, $) {
    var html = $("html");
    var head = $("head");
    var body = $("body");
    var _mask = null;
    var _loading = null;
    window.app.stage = {
        showMask: function(view, onClick) {
            if (_mask == null) {
                _mask = {
                    view: $('<div class="mask"></div>')
                };
                _mask.view.click(function(event) {
                    if (_mask.onClick) {
                        _mask.onClick(false);
                    }
                });
            };
            _mask.onClick = onClick;
            _mask.view.append(view).appendTo(body);
        },
        closeMask: function() {
            _mask.onClick = null;
            _mask.view.detach().empty();
        },
        showAlert: function(content, callback, title, ok) {
            window.alert(content);
            if (callback) {
                callback();
            }
        },
        showConfirm: function(content, callback, title, yes, no) {
            var result = window.confirm(content);
            if (callback) {
                callback(result);
            }
        },
        showLoading: function(tip) {
            if (_loading == null) {
                _loading = {
                    view: $('<div class="pageLoading"></div>'),
                    panel: $('<div class="panel"><div class="loader_container"><div class="loader"></div></div></div>'),
                    tip: $('<div class="loading_tip"></div>')
                };
                _loading.view.append(_loading.panel);
                _loading.panel.append(_loading.tip);
            }
            _loading.tip.html(tip || "正在加载数据...");
            body.append(_loading.view);
        },
        closeLoading: function() {
            if (_loading != null) {
                _loading.view.detach();
            }
        },
    };
})(window, jQuery);