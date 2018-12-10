var Utils = {
		
		timeout : 1500,
		
		Ajax: function (httpMethod, url, data, type, successCallBack, async, cache) {
			if (typeof async == "undefined") {
				async = true;
			}
			if (typeof cache == "undefined") {
				cache = false;
			}
			var ajaxObj = $.ajax({
				type: httpMethod.toUpperCase(),
				contentType: 'application/json',
				url: url,
				data: data,
				dataType: type,
				async: async,
				cache: cache,
				success: successCallBack,
				error: function (err, type, httpStatus) {
					Common.AjaxFailureCallback(err, type, httpStatus);
				}
			});

			return ajaxObj;
		},
		
		AjaxPost: function (url, data, type, successCallBack, async, cache) {
			if (typeof async == "undefined") {
				async = true;
			}
			if (typeof cache == "undefined") {
				cache = false;
			}
			var ajaxObj = $.ajax({
				type: 'POST',
				contentType: 'application/json',
				url: url,
				data: data,
				dataType: type,
				async: async,
				cache: cache,
				success: successCallBack,
				error: function (err, type, httpStatus) {
					Common.AjaxFailureCallback(err, type, httpStatus);
				}
			});

			return ajaxObj;
		},
		
		AjaxGet: function (url, type, successCallBack, async, cache) {
			if (typeof async == "undefined") {
				async = true;
			}
			if (typeof cache == "undefined") {
				cache = false;
			}
			var ajaxObj = $.ajax({
				type: 'GET',
				contentType: 'application/json',
				url: url,
				dataType: type,
				async: async,
				cache: cache,
				success: successCallBack,
				error: function (err, type, httpStatus) {
					Common.AjaxFailureCallback(err, type, httpStatus);
				}
			});

			return ajaxObj;
		},
		
		AjaxPut: function (url, type, successCallBack, async, cache) {
			if (typeof async == "undefined") {
				async = true;
			}
			if (typeof cache == "undefined") {
				cache = false;
			}
			var ajaxObj = $.ajax({
				type: 'PUT',
				contentType: 'application/json',
				url: url,
				dataType: type,
				async: async,
				cache: cache,
				success: successCallBack,
				error: function (err, type, httpStatus) {
					Common.AjaxFailureCallback(err, type, httpStatus);
				}
			});

			return ajaxObj;
		},
		
		DisplaySuccess: function (message) {
			Common.ShowSuccessSavedMessage(message);
		},

		DisplayError: function (error) {
			Common.ShowFailSavedMessage(message);
		},

		AjaxFailureCallback: function (err, type, httpStatus) {
			var failureMessage = 'Error occurred in ajax call' + err.status + " - " + err.responseText + " - " + httpStatus;
		},

		ShowSuccessSavedMessage: function (messageText) {
			$.blockUI({ message: messageText });
			setTimeout($.unblockUI, timeout);
		},

		ShowFailSavedMessage: function (messageText) {
			$.blockUI({ message: messageText });
			setTimeout($.unblockUI, timeout);
		},
}