/* eslint-disable */
import { forwardRef, useMemo, useContext, useRef, useCallback, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useSteps, indentNormalizer, Text, FlexBox, Box } from 'spectacle';
import styled, { ThemeContext } from 'styled-components';
import { compose, layout, position } from 'styled-system';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/vs-dark';
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var _excluded = ["highlightRanges", "language", "showLineNumbers", "children", "stepIndex", "theme", "descriptions"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var checkForNumberValues = function checkForNumberValues(ranges) {
  return ranges.every(function (element) {
    return typeof element === 'number';
  });
};

var checkForInvalidValues = function checkForInvalidValues(ranges) {
  return ranges.every(function (element) {
    return element === null || element === undefined;
  });
};

var getRangeFormat = function getRangeFormat(numberOfSteps, highlightRanges, step) {
  // If the value passed to highlightRanges is:
  // a single array containing only two numbers e.g. [3, 5]
  if (numberOfSteps === 1) {
    return highlightRanges;
  } // a 2D array containing null/undefined values e.g. [1, null, 5, [7, 9]]


  if (highlightRanges[step] === null || highlightRanges[step] === undefined) {
    return [];
  } // a 2D array and some of its elements contain numbers e.g. [[1, 3], 5, 7, 9, [10, 15]]


  if (typeof highlightRanges[step] === 'number') {
    return [highlightRanges[step]];
  } // a 2D array e.g. [[1], [3], [5, 9], [15], [20, 25], [30]]


  return highlightRanges[step];
};

var getStyleForLineNumber = function getStyleForLineNumber(lineNumber, activeRange) {
  var isOneLineNumber = activeRange.length === 1;

  if (isOneLineNumber) {
    var _activeRange = _slicedToArray(activeRange, 1),
        activeLineNumber = _activeRange[0];

    if (activeLineNumber === lineNumber) {
      return {
        opacity: 1
      };
    } else {
      return {
        opacity: 0.5
      };
    }
  }

  var _activeRange2 = _slicedToArray(activeRange, 2),
      from = _activeRange2[0],
      to = _activeRange2[1];

  return {
    opacity: from <= lineNumber && lineNumber <= to ? 1 : 0.5
  };
};

var Container = styled('div')(compose(position, layout));
var CodePane = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$highlightRanges = _ref.highlightRanges,
      highlightRanges = _ref$highlightRanges === void 0 ? [] : _ref$highlightRanges,
      language = _ref.language,
      _ref$showLineNumbers = _ref.showLineNumbers,
      showLineNumbers = _ref$showLineNumbers === void 0 ? true : _ref$showLineNumbers,
      rawCodeString = _ref.children,
      stepIndex = _ref.stepIndex,
      _ref$theme = _ref.theme,
      syntaxTheme = _ref$theme === void 0 ? dark : _ref$theme,
      descriptions = _ref.descriptions,
      props = _objectWithoutProperties(_ref, _excluded);

  var numberOfSteps = useMemo(function () {
    if (highlightRanges.length === 0 || // Prevents e.g. [null, null] to be used to count the number of steps
    checkForInvalidValues(highlightRanges)) {
      return 0;
    } // Checks if the value passed to highlightRanges is a single array containing only two numbers e.g. [3, 5]


    var isSingleRange = highlightRanges.length <= 2 && // Prevents e.g. [3, [5]] from being considered a single array range
    checkForNumberValues(highlightRanges);

    if (isSingleRange) {
      return 1;
    }

    return highlightRanges.length;
  }, [highlightRanges]);
  var theme = useContext(ThemeContext);

  var _useSteps = useSteps(numberOfSteps, {
    stepIndex: stepIndex
  }),
      isActive = _useSteps.isActive,
      step = _useSteps.step,
      placeholder = _useSteps.placeholder;

  var children = useMemo(function () {
    return indentNormalizer(rawCodeString);
  }, [rawCodeString]);
  var scrollTarget = useRef(null);
  var getLineNumberStyle = useCallback(function (lineNumber) {
    if (!isActive) return {};
    var range = getRangeFormat(numberOfSteps, highlightRanges, step);
    return getStyleForLineNumber(lineNumber, range);
  }, [isActive, highlightRanges, numberOfSteps, step]);
  var getLineProps = useCallback(function (lineNumber) {
    if (!isActive) return {};
    var range = getRangeFormat(numberOfSteps, highlightRanges, step);
    return {
      ref: lineNumber === range[0] ? scrollTarget : null,
      style: getStyleForLineNumber(lineNumber, range)
    };
  }, [isActive, highlightRanges, numberOfSteps, step]);
  useEffect(function () {
    window.requestAnimationFrame(function () {
      if (!scrollTarget.current) return;
      scrollTarget.current.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
      });
    });
  }, [isActive, step]);

  var description = useMemo(function() {
    if (isActive && descriptions[step]) {
      return _jsx(Text, {
        key: 2,
        backgroundColor: 'rgba(0,0,0,0.25)',
        color: 'yellow',
        children: descriptions[step]
      })
    } else {
      return <Text key={2}></Text>;
    }
  }, [isActive, step]);
  
  var customStyle = useMemo(function () {
    /**
     * Provide fallback values if the user intentionally overrides the
     * default theme with no valid values.
     */
    var _theme$space = theme.space,
        space = _theme$space === void 0 ? [0, 0, 0] : _theme$space,
        _theme$fontSizes$mono = theme.fontSizes.monospace,
        monospace = _theme$fontSizes$mono === void 0 ? '20px' : _theme$fontSizes$mono;
    return {
      padding: space[0],
      margin: 0,
      fontSize: monospace
    };
  }, [theme]);
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [placeholder, /*#__PURE__*/_jsx(Container, _objectSpread(_objectSpread({
      ref: ref
    }, props), {}, {
      children: [_jsx(Box, {
        key: 1,
        maxHeight: "80%",
        overflow: "auto",
        children: /*#__PURE__*/_jsx(SyntaxHighlighter, {
          customStyle: customStyle,
          language: language,
          wrapLines: true,
          showLineNumbers: showLineNumbers,
          lineProps: getLineProps,
          lineNumberStyle: getLineNumberStyle,
          style: syntaxTheme,
          children: children
        })
      }), description]
    }))]
  });
});
CodePane.displayName = 'CodePane';
export default CodePane;
