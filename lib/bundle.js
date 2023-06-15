import React from 'react';
import dayjs from 'dayjs';

var FormTable = (function () {
  console.log(dayjs, 'dayjs');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "FormTable"), /*#__PURE__*/React.createElement("span", null, "\u5317\u4EAC\u65F6\u95F4\uFF1A", dayjs().format('YYYY-MM-DD HH:mm:ss')));
});

export { FormTable };
