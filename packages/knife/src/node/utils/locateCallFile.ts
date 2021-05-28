const locateCallFile = (deep = 1) => {
    // extract api.render() callsite file location using error stack
    const obj = {} as { stack: string; };
    Error.captureStackTrace(obj);
    const callSite = obj.stack.split('\n')[deep + 2];

    // the regexp for the stack when called inside a named function
    const namedStackRegExp = /\s\((.*):\d+:\d+\)$/;
    // the regexp for the stack when called inside an anonymous
    const anonymousStackRegExp = /at (.*):\d+:\d+$/;

    let matchResult = callSite.match(namedStackRegExp);
    if (!matchResult) {
        matchResult = callSite.match(anonymousStackRegExp);
    }

    return matchResult[1];
};

export default locateCallFile;
