const questions = [
    {
        q: "Which test activity does a data preparation tool support?",
        options: [
            "Test monitoring and control",
            "Test analysis",
            "Test design and implementation",
            "Test completion"
        ],
        correct: 2,
        explanation: "Test design and implementation can both include the identification, creation or acquisition of the testware necessary for test execution (e.g., test data)."
    },
    {
        q: "Given the following test tool categories: i. Collaboration tools, ii. DevOps tools, iii. Management tools, iv. Non-functional testing tools, v. Test design and implementation tools. Tools from which of the categories are MOST likely to facilitate test execution?",
        options: [
            "i, v",
            "ii, iv",
            "i, iii, v",
            "ii, iii, iv"
        ],
        correct: 1,
        explanation: "Both DevOps tools (ii) and Non-functional testing tools (iv) facilitate test execution. DevOps tools support the delivery pipeline (CI/CD) which includes automated execution. Non-functional tools include dynamic testing/execution."
    },
    {
        q: "Tools from which of the following categories help with the organization of test cases, detected defects and configuration management?",
        options: [
            "Test execution and coverage tools",
            "Test design and implementation tools",
            "Defect management tools",
            "Test management tools"
        ],
        correct: 3,
        explanation: "Test management tools increase the test process efficiency by facilitating the management of the software development lifecycle (SDLC), requirements, tests, defects, and configuration management."
    },
    {
        q: "Which of the following BEST matches the descriptions and categories? Descriptions: 1. Support workflow tracking, 2. Facilitate communication, 3. Virtual machines, 4. Support reviews. Categories: A. Static testing tools, B. Tools supporting scalability, C. DevOps tools, D. Collaboration tools.",
        options: [
            "1A, 2B, 3C, 4D",
            "1B, 2D, 3C, 4A",
            "1C, 2D, 3B, 4A",
            "1D, 2C, 3A, 4B"
        ],
        correct: 2,
        explanation: "The correct match is: 1 (Workflow tracking) -> C (DevOps tools), 2 (Facilitate communication) -> D (Collaboration tools), 3 (Virtual machines) -> B (Scalability tools), 4 (Support reviews) -> A (Static testing tools)."
    },
    {
        q: "What is the primary purpose of a test execution tool?",
        options: [
            "It runs automated test scripts to test the test object",
            "It automatically records defects in the defect tracking system",
            "It analyzes code to determine if there are any coding standard violations",
            "It tracks test cases, defects and requirements traceability"
        ],
        correct: 0,
        explanation: "This is the primary purpose of the test execution tools. Recording defects is a feature but not the primary purpose, code analysis is for static tools, and tracking is for management tools."
    },
    {
        q: "Which of the following is an example of a tool that supports static testing?",
        options: [
            "A tool that assists with tracking the results of reviews",
            "A defect tracking tool",
            "A test automation tool",
            "A tool that helps design test cases for security testing"
        ],
        correct: 0,
        explanation: "Reviews are a form of static testing and a tool that supports reviews is an example of a tool that supports static testing."
    },
    {
        q: "Which item correctly identifies a potential risk of performing test automation?",
        options: [
            "It may introduce unknown regressions in production",
            "Sufficient efforts to maintain testware may not be properly allocated",
            "Testing tools and associated testware may not be sufficiently relied upon",
            "It may reduce the time allocated for manual testing"
        ],
        correct: 1,
        explanation: "Wrong allocation of effort to maintain testware is a risk. Test automation does not introduce regressions (it finds them), and reducing manual testing time is a benefit."
    },
    {
        q: "Which of the following is MOST likely to be a risk of test automation?",
        options: [
            "The detection of additional high-severity defects",
            "Providing measures that are too complicated for humans to derive",
            "Incompatibility with the development platform",
            "Substantially reduced test execution times"
        ],
        correct: 2,
        explanation: "If the test automation is incompatible with the development platform, then it will not be able to integrate them. The other options are benefits."
    },
    {
        q: "Which of the following is MOST likely to be a benefit of test automation?",
        options: [
            "The capability of generating test cases without access to the test basis",
            "The achievement of increased coverage through more objective assessment",
            "The increase in test execution times available with higher processing power",
            "The prevention of human errors through greater consistency and repeatability"
        ],
        correct: 3,
        explanation: "The prevention of human errors through greater consistency and repeatability is a benefit of test automation as test automation cannot suffer from human errors."
    },
    {
        q: "Which of the following is MOST likely to be a benefit of test automation?",
        options: [
            "It provides coverage measures that are too complicated for humans to derive",
            "It shares responsibility for the testing with the tool vendor",
            "It removes the need for critical thinking when analyzing test results",
            "It generates test cases from an analysis of the program code"
        ],
        correct: 0,
        explanation: "Test automation can provide measures that are too complicated for humans to derive, such as white-box testing coverage measures for all but the most trivial code."
    },
    {
        q: "Which of the following is a risk with test automation?",
        options: [
            "Using an automation tool that will not be supported in the future",
            "Developing test automation for particularly tedious manual testing areas",
            "Using technical testers to implement the automation",
            "Developing automated reporting"
        ],
        correct: 0,
        explanation: "That is a known risk with test automation because it will be dependent upon the tool used for implementation and that tool might fall out of support by the vendor."
    },
    {
        q: "Which of the following is a benefit of test automation?",
        options: [
            "Test execution is faster",
            "Manual testing becomes obsolete",
            "ROI is easy to determine",
            "Test implementation is faster"
        ],
        correct: 0,
        explanation: "Test execution should be faster with automation than with manual testing, once the test cases have been developed. ROI is tricky to calculate, and implementation usually takes longer."
    }
];
