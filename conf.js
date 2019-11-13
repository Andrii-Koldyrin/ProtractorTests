exports.config = {
    directConnect: false,
    framework: 'mocha',
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    Capabilities: {
        'browserName': 'chrome'
    },
    suites:
        {
            mochaTest: 'GoogleTest.js'
    }
};