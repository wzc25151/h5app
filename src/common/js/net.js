(function(context, $) {
    function _doAjax(method, url, params, success, error) {
        $.ajax({
            url: url,
            type: method,
            async: true,
            data: params,
            dataType: "text",
            success: success,
            error: error || function(XMLHttpRequest, textStatus, errorThrown) {
                console.info(XMLHttpRequest.status, textStatus, errorThrown);
            }
        });
    };
    context.net = {
        load: function(url, params, success, error) {
            _doAjax("GET", url, params, success, error);
        },
        post: function(url, params, success, error) {
            _doAjax("POST", url, params, success, error);
        }
    };
})(window.app, jQuery);