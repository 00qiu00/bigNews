//工具函数
$(function (w) {
    var utils = {
        converToObj: function (str) {
            var arr = str.split('&')
            var obj = {}
            for (var i = 0; i < arr.length; i++) {

                var temp = arr[i].split('=')
                obj[temp[0]] = temp[1]
            }
            return obj
        },
        $ajax: function (type, url, newfn, data) {
            $.ajax(
                {
                    type: type,
                    url: url,
                    data: data,
                    success: newfn
                }
            )
        },
        $temlate: function ($class, $id, res, con) {
            $($class).html(!con ? template($id, res) : con + template($id, res))
        }
    }
    w.utils = utils
}(window))