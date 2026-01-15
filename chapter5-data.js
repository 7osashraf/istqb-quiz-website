const questions = [
    {
        q: "Consider the following part of a test plan. 'Testing will be performed using component testing and component integration testing. The regulations require to demonstrate that 100% branch coverage is achieved for each component classified as critical.' Which part of the test plan does this part belong to?",
        options: ["Communication", "Risk register", "Context of testing", "Test approach"],
        correct: 3,
        explanation: "This is an example of how risk analysis influences the thoroughness and scope of testing."
    },
    {
        q: "During a risk analysis the following risk was identified and assessed: Risk: Response time is too long to generate a report. Risk likelihood: medium; risk impact: high. Response to risk: An independent test team performs performance testing during system testing. A selected sample of end users performs alpha and beta acceptance testing before the release. What measure is proposed to be taken in response to this analyzed risk?",
        options: ["Risk acceptance", "Contingency plan", "Risk mitigation", "Risk transfer"],
        correct: 2,
        explanation: "Concrete actions are proposed and these actions are related to testing, which is a form of risk mitigation."
    },
    {
        q: "Which of the following BEST matches the risks with the mitigation activities? Given the following risks: 1. Ineffective loop implementation causes long system responses. 2. Consumers change their preferences 3. Flooding of the server room 4. Patients above a certain age receive inaccurate reports. And the following mitigation activities: a. Risk acceptance b. Performance testing c. Using boundary value analysis as the test technique d. Risk transfer",
        options: ["1C, 2D, 3A, 4B", "1B, 2D, 3A, 4C", "1B, 2A, 3D, 4C", "1C, 2A, 3D, 4B"],
        correct: 2,
        explanation: "The correct combinations of risk and mitigation are: 1B, 2A, 3D and 4C."
    },
    {
        q: "Consider the following identified risk: Risk: Tax Calculation is not conforming to country regulations. Risk likelihood: Medium, Risk impact: High. Which of the following is the BEST risk transfer measure that can be taken in response to the above identified risk?",
        options: [
            "Hire a tester having the proper knowledge of the country regulations relevant to tax calculation",
            "Review the tax calculation development code using the most formal review type to ensure the conformance",
            "Apply white-box and black-box techniques to identify non-conformance defects",
            "Sign a contract with a third-party organization to certify the product; to ensure its conform to tax calculation rules specified in the country regulations"
        ],
        correct: 3,
        explanation: "Sign a contract with a third-party organization to certify the product; to ensure its conform to tax calculation rules specified in the country regulations."
    },
    {
        q: "Which TWO of the following options are common metrics used for reporting on the quality level of the test object?",
        options: [
            "Number of defects found during system testing",
            "Total effort on test design divided by the number of designed test cases",
            "Number of executed test procedures",
            "Number of defects found divided by the size of a work product",
            "Time needed to repair a defect"
        ],
        correct: 0,
        explanation: "The number of defects found is related to the test object quality. Defect density is related to the test object quality."
    },
    {
        q: "Which of the following is a product quality metric?",
        options: [
            "Mean time to failure",
            "Number of defects found",
            "Requirements coverage",
            "Defect detection percentage"
        ],
        correct: 0,
        explanation: "Product quality metrics measure quality characteristics. Mean time to failure measures maturity, so it is a product quality metric."
    },
    {
        q: "A metric that tracks the number of test cases passed is gathered during which activity in the test process?",
        options: ["Planning", "Implementation", "Execution", "Reporting"],
        correct: 2,
        explanation: "Test execution metrics are gathered during the Test Execution activity. These metrics are used in reporting."
    },
    {
        q: "Which of the following metrics is used for reporting on the test progress?",
        options: [
            "Sum of estimated hours of test design activities",
            "Number of defects found during system testing",
            "Number of test cases run and not run",
            "Number of defects found divided by the user story points of an iteration"
        ],
        correct: 2,
        explanation: "This metric directly tracks test execution progress. It shows: How many test cases have been executed (run). How many remain (not run)."
    },
    {
        q: "Which of the following pieces of information contained in a test progress report is the LEAST useful for business representatives?",
        options: [
            "Impediments to testing",
            "Branch coverage achieved",
            "Test progress",
            "New risks within the test cycle"
        ],
        correct: 1,
        explanation: "Branch coverage is a technical metric used by developers and technical test analysts. This information is of no interest to business representatives."
    },
    {
        q: "Which of the following is NOT a valid purpose for a test report?",
        options: [
            "Tracking test progress and identifying areas that require further attention",
            "Providing information on the tests executed, their results, and any issues or defects found",
            "Providing information about each defect, such as the steps to reproduce it",
            "Providing information on testing planning for the next period"
        ],
        correct: 2,
        explanation: "Providing information about defects is the purpose of a defect report, not a test report."
    },
    {
        q: "Which of the following activities in the test process makes the MOST use of test progress reports?",
        options: ["Test design", "Test completion", "Test analysis", "Test planning"],
        correct: 1,
        explanation: "A test completion report is prepared during test completion, when a project, test level, or test type is complete and when, ideally, its exit criteria have been met. This report uses information from test progress reports and other data."
    },
    {
        q: "Which of the following variances should be explained in the Test Summary Report?",
        options: [
            "The variances between the weekly status reports and the test exit criteria",
            "The variances between the defects found and the defects fixed",
            "The variances between what was planned for testing and what was actually tested",
            "The variances between test cases executed and the total number of test cases"
        ],
        correct: 2,
        explanation: "The variances or deviations between the test plan and the testing that was actually done must be explained in the test summary report."
    },
    {
        q: "Which work product can be used by an agile team to show the amount of work that has been completed and the amount of total work remaining for a given iteration?",
        options: [
            "Acceptance criteria",
            "Defect report",
            "Test completion report",
            "Burndown chart"
        ],
        correct: 3,
        explanation: "Burndown charts are a graphical representation of work left to do versus time remaining. They are updated daily, so they can continuously show the work progress."
    },
    {
        q: "You are a member of a test team located in North America, developing a product for a client located in Europe. The team is agile and follows the DevOps approach and uses a continuous integration/continuous delivery pipeline. Which of the following is the LEAST effective way to communicate test progress to the customer?",
        options: ["Face-to-face", "Dashboards", "Email", "Video conferencing"],
        correct: 0,
        explanation: "The client is in a different location and time zone, so it may be difficult to communicate face-to-face."
    },
    {
        q: "You have just completed testing on a major ERP implementation. The project has taken two years and is now ready for final approval before go-live. What test documentation should be produced at this time?",
        options: [
            "Formal test summary report",
            "Testing team task board",
            "Email to the team congratulating them on their success",
            "Burn down chart"
        ],
        correct: 0,
        explanation: "At this point in the project, the formal test summary report should be prepared. B and d are used for information and communication during the project cycle."
    },
    {
        q: "Which of the following is the LEAST effective way to communicate daily status?",
        options: [
            "Verbal communication",
            "Formal test progress report",
            "Task board",
            "Burn-down chart"
        ],
        correct: 1,
        explanation: "Verbal communication (e.g., daily stand-ups) → Quick, interactive, and adaptive. Agile teams emphasize lightweight, real-time communication (e.g., daily stand-ups, task boards). Formal reports are time-consuming, lack immediacy, and contradict Agile principles of simplicity and collaboration."
    },
    {
        q: "You need to update one of the automated test scripts to be in line with a new requirement. Which process indicates that you create a new version of the test script in the test repository?",
        options: [
            "Traceability management",
            "Maintenance testing",
            "Configuration management",
            "Requirements engineering"
        ],
        correct: 2,
        explanation: "To support testing, configuration management may involve the version control of all test items."
    },
    {
        q: "The user reported a software failure. An engineer from the support team asked the user for the software version number where the failure was observed. Based on the version number, the team reassembled all the files that make up the release and allowed a developer to perform analysis, find the defect, and fix it. Which of the following enabled the above activity to be performed by the team?",
        options: [
            "Risk management",
            "Test monitoring and control",
            "Test approach",
            "Configuration management"
        ],
        correct: 3,
        explanation: "Configuration management provides a discipline for identifying, controlling, and tracking work products. Configuration management keeps a record of changed configuration items when a new baseline is created. Using configuration management, it is possible to revert to a previous baseline in order to reproduce previous test results."
    },
    {
        q: "Which of the following is NOT an example of how configuration management supports testing?",
        options: [
            "All commits to the repository are uniquely identified and version controlled",
            "All changes in the test environment elements are tracked",
            "All requirement specifications are referenced unambiguously in test plans",
            "All identified defects have an assigned status"
        ],
        correct: 3,
        explanation: "When a failure occurs, thanks to the unique identification of commits, it is possible to reassemble the files from the software version which was used by the user (as well as the corresponding versions of the test scripts) and thus reproduce the failure and locate the defect faster."
    },
    {
        q: "Which of the following BEST describes an example of how configuration management (CM) supports testing?",
        options: [
            "Having the version number of the environment, the CM tool can retrieve the version numbers of libraries, stubs and drivers used in that environment",
            "Having a record of the values of the test inputs, the CM tool can execute the test cases for these configurations and calculate test coverage",
            "Having the date of the date of purchase of a software license, the CM tool automatically generates information about the fact that the product license is coming to an end",
            "Having the version number of the test case, the CM tool can automatically generate test data for this test case"
        ],
        correct: 0,
        explanation: "For a complex configuration item (e.g., a test environment), configuration management (CM) records the items it consists of, their relationships, and versions."
    },
    {
        q: "You are working on a software to the test team in iterations. In iteration 3 you identified a failure. The developer found and fixed the defect and released the fix in iteration 4. You confirmed the fix and closed the defect report. You are now testing iteration 7 and the failure has occurred again. You have talked to the developer and he doesn't know how or when the failure came back and has asked you to investigate. How can configuration management help you gather more information on this failure?",
        options: [
            "You can see what changed in iteration 4 to fix the problem",
            "You can reload earlier iterations 4 to 6 where the problem was re-introduced",
            "You can review all the code changes that have occurred since iteration 4 to see what might have broken it",
            "You can improve the regression testing to ensure the failure is caught earlier"
        ],
        correct: 1,
        explanation: "Because you have configuration management, you should be able to obtain and reinstall the code from iterations 5 and 6 and see where the problem was re-introduced."
    },
    {
        q: "If the developers are releasing code for testing that is not version controlled, what process is missing?",
        options: [
            "Configuration management",
            "Debugging",
            "Test and defect management",
            "Risk analysis"
        ],
        correct: 0,
        explanation: "Configuration management is missing if the code is not being properly versioned and tracked."
    },
    {
        q: "Which of the following is an example of a testing work product that is NOT properly supported by configuration management?",
        options: [
            "Test cases are updated without tracking the history of changes",
            "Current source code version is traced to an old baselined requirements version",
            "Latest test scripts version is traced to the latest user stories version",
            "Test conditions are traced to the relevant baselined requirements version"
        ],
        correct: 0,
        explanation: "This indicates lack of version control, which violates configuration management principles."
    },
    {
        q: "You received the following defect report from the developers stating that the anomaly described in this test report is not reproducible. Application hangs up. 2022-May-03 – John Doe – Rejected. The application hangs up after entering 'Test input: $a' in the Name field on the new user creation screen. Tried to log off, log in with test_admin01 account, same issue. Tried with other test admin accounts, same issue. No error message received; log (see attached) contains fatal error notification. Based on the test case TC-1305, the application should accept the provided input and create the user. Please fix with high priority, this feature is related to REQ-0012, which is a critical new business requirement. What critical information is MISSING from this test report that would have been useful for the developers?",
        options: [
            "Expected result and actual result",
            "References and defect status",
            "Test environment and test item",
            "Priority and severity"
        ],
        correct: 2,
        explanation: "The defect report states that the anomaly is urgent, that it is a global issue (i.e., many, if not all, test administration accounts are affected) and states the impact is high for business stakeholders."
    },
    {
        q: "Consider the following defect report for a web-based shopping application: Application: WebShop v0.99. Defect: Login button not working. Steps to Reproduce: Launch the website Click on the login button. Expected result: The user should be redirected to the login page. Actual result: The login button does not respond when clicked. Severity: High Priority: Urgent. What is the MOST important information that is missing from this defect report?",
        options: [
            "Name of the tester and date",
            "Test environment elements and their version numbers",
            "Identification of the test object",
            "Impact on the interests of stakeholders"
        ],
        correct: 1,
        explanation: "The most important thing that is missing is the identification of the browser and device used for the testing. The browser and device information are important because such a defect can be browser- or device-specific. For example, the problem might work fine on Chrome (on a specific version of a specific browser) but not on another. Therefore, the browser and device information can be the deciding factors in reproducing the defect and solving the problem."
    },
    {
        q: "You have received the following description section in a defect report: The report executed per the attached steps, but the data was incorrect. For example, the information in column 1 was wrong. See the attached screenshot. This report is critical to the users and they will be unable to do their jobs without this information. What is the biggest problem with this defect report?",
        options: [
            "The developer won't know how important the problem is",
            "The developer won't know how to retest",
            "The developer won't be able to see what the tester is saying is wrong",
            "The developer won't know what the tester expected to see"
        ],
        correct: 3,
        explanation: "From this information, the developer only knows the tester thinks the information is wrong, but it's not clear what was expected."
    },
    {
        q: "Consider the following defect report for a Book Lending System. Defect ID: 001 | Title: Unable to Return a Book | Severity: High | Priority: | Environment: Windows 10, Google Chrome. Description: When attempting to return a book using the Book Return feature, the system does not register the return and the book remains checked out to the user. Steps to Reproduce: Login to the Book Lending System as a user who has checked out a book. Click on the 'Book Return' button for the book that has been checked out. System does not register the return and the book remains checked out. Expected Result: The book should be returned and no longer appear as checked out to the user. Actual Result: The book remains checked out to the user and is not registered as returned in the system. Attachments: [empty list]. Which of the following is MOST likely to help the developer reproduce the failure quickly?",
        options: [
            "Adding information about which specific users and which books have effects on the 'Description' section",
            "Filling in the missing value for the 'Priority' field",
            "Adding memory dumps and database snapshots taken after each step described in the 'Steps to Reproduce' section to the 'Attachments' section",
            "Repeating the test case using different test environments and writing defect reports for each of them separately"
        ],
        correct: 0,
        explanation: "Adding this information allows the developer to use the same input data, so it is more likely they will be able to reproduce the failure quickly and so identify the defect faster."
    },
    {
        q: "You have been testing software that will be used to track credit card purchases. You have found a defect that causes the system to crash, but only if a person has made and voided 10 purchases in a row. What is the proper priority and severity rating for this defect?",
        options: [
            "Priority high, severity high",
            "Priority high, severity low",
            "Priority low, severity low",
            "Priority low, severity high"
        ],
        correct: 3,
        explanation: "This is not likely to happen, so the urgency to fix it is low but it does crash the system so the severity is high."
    }
];This paragraph contains information on test levels and exit criteria, which are part of the test approach."
    },
    {
        q: "Which of the following is NOT a purpose of a test plan?",
        options: [
            "To define test data and expected results for component tests and component integration tests",
            "To define as exit criteria from the component test level that '100% statement coverage and 100% branch coverage must be achieved'",
            "To describe what the test progress report shall contain and what should be the form of this report",
            "To explain why system integration testing will be excluded from testing, although the test strategy requires this test level"
        ],
        correct: 0,
        explanation: "The test plan defines detailed test data requirements (as part of the test approach), but not the detailed test data for test cases. Test data is part of the test cases, not the test plan. Also, it is usually impossible to define such data when the test plan is created, because it is not exactly known what the components will look like."
    },
    {
        q: "You are working in a team of testers who are all writing test cases. You have noticed that there is a significant inconsistency in the length of detail in the different test cases. Where should the criteria for test case writing be documented?",
        options: ["The test plan", "The test approach", "The test case template", "The project plan"],
        correct: 2,
        explanation: "The level of detail and structure for the test documentation should be included in the test plan as part of the criteria for the test documentation."
    },
    {
        q: "How do testers add value to iteration and release planning?",
        options: [
            "Testers determine the priority of the user stories to be developed",
            "Testers focus only on functional aspects of the system to be tested",
            "Testers participate in the detailed risk identification and risk assessment of user stories",
            "Testers guarantee the release of high-quality software through early test design during the release planning"
        ],
        correct: 2,
        explanation: "Testers being involved from the beginning of the software development lifecycle (SDLC), it will increase understanding of design decisions and will detect defects early."
    },
    {
        q: "Which TWO of the following options are the exit criteria for testing a system?",
        options: [
            "Test environment readiness",
            "The ability to log in to the test object by the tester",
            "Estimated defect density is reached",
            "Requirements are translated into given/when/then format",
            "Regression tests are automated"
        ],
        correct: 2,
        explanation: "Estimated defect density is a measure of diagnostic tests, hence it belongs to the exit criteria. Automation of regression tests is a completion criterion; hence it belongs to the exit criteria."
    },
    {
        q: "Your team follows the process that uses the DevOps delivery pipeline. The first three steps of this process are: (1) Code development (2) Submit code into a version control system and merge it into the 'test' branch (3) Perform component testing and submit code. Which of the following is BEST suited to be the entry criterion for step (2) of this pipeline?",
        options: [
            "Static analysis returns no high severity warnings for the submitted code",
            "System version control reports no conflicts merging code into the 'test' branch",
            "Component tests are compiled and ready to be executed",
            "Statement coverage is at least 80%"
        ],
        correct: 0,
        explanation: "This is something that can (and should be) checked before the code is submitted to version control."
    },
    {
        q: "Which of the following BEST define EXIT criteria in a testing project?",
        options: [
            "The budget is approved",
            "Budget runs out",
            "Test basis is available",
            "Test cases achieved at least 80% statement coverage",
            "All test analysts are ISTQB certified at the Foundation Level"
        ],
        correct: 3,
        explanation: "Running out of budget can be viewed as an exit criterion. Test basis is available is a typical exit criterion."
    },
    {
        q: "Which of the following is an example of a good exit criterion from smoke testing?",
        options: [
            "Tests should be completed",
            "The project budget should be spent",
            "All defects should be fixed",
            "All severity 1 defects must be resolved"
        ],
        correct: 3,
        explanation: "This is measurable and clear."
    },
    {
        q: "Which of the following is the entry criteria for testing a system?",
        options: [
            "Requirements are translated into given/when/then format",
            "Estimated defect density is reached",
            "Regression tests are automated",
            "Running out of budget"
        ],
        correct: 2,
        explanation: "Automation of regression tests is a completion criterion for the efficiency and repeatability of regression testing."
    },
    {
        q: "Your team uses the three-point estimation technique to estimate the test effort for a new high-risk feature. The following estimates were made: Most optimistic estimation: 2 person-hours, Most likely estimation: 11 person-hours, Most pessimistic estimation: 14 person-hours. What is the final estimate?",
        options: ["9 person-hours", "14 person-hours", "11 person-hours", "10 person-hours"],
        correct: 3,
        explanation: "In the three-point estimation technique: E = (optimistic + 4*most likely + pessimistic)/6. E = (2+(4*11)+14)/6 = 10. Thus: d) is correct."
    },
    {
        q: "The team wants to estimate the time needed for one tester to execute four test cases for a software component. The team has gathered the following measures of the effort used to execute a single test case: Best-case scenario: 1 hour, Worst-case scenario: 8 hours, Most likely scenario: 3 hours. Given that the three-point estimation technique is being used, what is the final estimate of the time needed to execute all the test cases?",
        options: ["14 hours", "3.5 hours", "16 hours", "12 hours"],
        correct: 2,
        explanation: "Using the three-point estimation technique, the final estimate (E) is calculated as: E = (a + 4*m + b) / 6, where a is the most optimistic estimate, m is the most likely estimate, and b is the most pessimistic estimate. Thus: a) is correct. In this case, the estimate for executing a single test case is: E = (1h + 4*3h + 8h) / 6 = 3.5 hours. So, the total time needed for the tester to execute 4 test cases is 3.5h * 4 = 14 hours."
    },
    {
        q: "At the beginning of each iteration, the team estimates the amount of work (in person-days) they will need to complete during the iteration. Let E(n) be the estimated amount of work for iteration n, and let A(n) be the actual amount of work done in iteration n. From the third iteration on, the team uses the following estimation model based on the extrapolation: E(n)= [3*A(n-1)+A(n-2)]/4. The graph shows the estimated and actual amount of work for the first four iterations. What is the estimated amount of work for iteration #5?",
        options: ["10.5 person-days", "8.25 person-days", "6.5 person-days", "9.4 person-days"],
        correct: 2,
        explanation: "From the graph we have: A(4)=6 and A(3)=8 (the last two gray boxes). From the formula we obtain: E(5) = (3*A(4) + A(3)) / 4 = (3*6+8) / 4 = 26 / 4 = 6.5 person-days. Thus: a) is correct."
    },
    {
        q: "Your team uses planning poker to estimate the test effort for a newly required feature. There is a rule in your team that if there is no time to reach full agreement and the variation in the results remains high after applying rules like 'accept the number with the most votes' can be applied. After two rounds, the consensus was not reached, so the third round was initiated. You can see the test estimation results in the table below. [Round 1: 21, 2, 5, 34, 13, 8, 2] [Round 2: 13, 8, 8, 34, 13, 8, 5] [Round 3: 13, 8, 13, 13, 13, 13, 8]. Which of the following is the BEST example of the next step?",
        options: [
            "The product owner has to step in and make a final decision",
            "Accept 13 as the final test estimate as this has most of the votes",
            "No further action is needed. Consensus has been reached",
            "Remove the new feature from the current release because consensus has not been reached"
        ],
        correct: 1,
        explanation: "If test estimates are not the consensus, but the variation in the result is small, applying rules like 'accept the number with the most votes' can be applied."
    },
    {
        q: "You want to estimate the test effort for the new project using estimation based on ratios. You calculate the test-to-development effort ratio using averaged data for both development effort and test effort from four historical projects similar to the new one. The table shows the historical data. [P1: Dev 800,000, Test 40,000] [P2: Dev 1,200,000, Test 38,000] [P3: Dev 600,000, Test 70,000] [P4: Dev 1,000,000, Test 120,000]. The estimated development effort for the new project is $800,000. What is your estimate of the cost for testing this project?",
        options: ["$40,000", "$80,000", "$81,250", "$82,500"],
        correct: 1,
        explanation: "The average development effort is $900,000 and the average test effort is $90,000 (calculated from the four projects). The test-to-development effort ratio is 1:10 ($90,000 : $900,000), which means that historically, on average, the test effort is 10% of the development effort. If the development effort is estimated as $800,000, the estimated test effort is estimated as: 10% * $800,000 = 0.1 * $800,000 = $80,000. Thus: b) is correct."
    },
    {
        q: "You are estimating the testing time required for a new project. You have gathered information from three experts and they have given you the following numbers in days: [Expert 1: Optimistic 20, Likely 40, Pessimistic 60] [Expert 2: Optimistic 40, Likely 55, Pessimistic 75] [Expert 3: Optimistic 30, Likely 70, Pessimistic 90] [Average: Optimistic 30, Likely 55, Pessimistic 75]. Using the average numbers from the table above and applying the three-point estimation technique, what is the estimate?",
        options: ["325 ± 45", "81.25 ± 8", "54.17 ± 7.5", "40 ± 2"],
        correct: 2,
        explanation: "The formula is (Optimistic + 4(Likely) + Pessimistic)/6 so the answer is (30+220+75)/6 = 54.17 and the standard deviation is (75-30)/6 which is 7.5."
    },
    {
        q: "Your team is using Planning Poker to estimate the effort for a story. [First vote: Developer 3, Tester 8] [Second vote: Developer 5, Tester 8] [Third vote: Developer 5, Tester 5]. Although three votes were taken to reach consensus, how many story points should be allocated to the story?",
        options: [
            "10 because that's the sum of the points",
            "8 because that was the highest number",
            "3 because that was the lowest number",
            "5 because that was the consensus"
        ],
        correct: 3,
        explanation: "Voting should continue until consensus is reached and that number should be used to assign the points to the story."
    },
    {
        q: "You are testing a mobile application that allows users to find a nearby restaurant based on the type of food they want to eat. Consider the following list of test cases, priorities (i.e., a smaller number means a higher priority), and dependencies: [TC 001: Select type of food, Priority 3, Dependency TC 001] [TC 002: Select restaurant, Priority 2, Dependency -] [TC 003: Get direction, Priority 1, Dependency TC 002] [TC 004: Call restaurant, Priority 2, Dependency -] [TC 005: Make reservation, Priority 3, Dependency TC 002]. Which of the following test cases should be executed as the third one?",
        options: ["TC 003", "TC 005", "TC 002", "TC 001"],
        correct: 0,
        explanation: "Test TC 001 must come first, followed by TC 002, to satisfy dependencies. Afterwards, TC 003 to satisfy priority and then TC 004, followed by TC 005. Thus: a) is correct."
    },
    {
        q: "The table shows the traceability matrix from test cases to requirements. 'X' means that a given test case covers the corresponding requirement. [TC1: X on Req1, X on Req3, X on Req4, X on Req7] [TC2: X on Req1, X on Req5] [TC3: X on Req5, X on Req6] [TC4: X on Req2]. You want to prioritize the test cases following the additional coverage prioritization technique. You execute all four test cases. Which test case should be executed as the LAST one?",
        options: ["TC1", "TC2", "TC3", "TC4"],
        correct: 3,
        explanation: "TC1 achieves the highest coverage (4/7 = Req1, Req3, Req4 and Req7), so should be executed first. Req2, Req5 and Req6 are still not covered. The next test case that provides additional coverage of the remaining requirements is TC3, covering 2 out of these 3 requirements (Req5 and Req6). So, TC3 should be executed as the second one. Now the only requirement still not covered is Req2, which is covered by TC4. Therefore, TC4 should be executed as the third test case. So, the last test case executed will be TC2. Thus: a) is not correct, b) is correct."
    },
    {
        q: "You are preparing a test execution schedule for executing seven test cases TC 1 to TC 7. The figure also shows the priorities of these test cases (1 = highest priority, 4 = lowest priority). The figure also shows the dependencies between test cases using arrows. For instance, the arrow from TC 4 to TC 5 means that TC 5 can only be executed if TC 4 was previously executed. [TC1: priority 2] [TC2: priority 3] [TC5: priority 1] [TC6: priority 1] [TC3: priority 2] [TC4: priority 2] [TC7: priority 1]. Which test case should be executed sixth?",
        options: ["TC 3", "TC 5", "TC 6", "TC 2"],
        correct: 0,
        explanation: "We want to run test cases according to their priorities, but we also need to consider the dependencies. If we only consider priorities, we want to first run TC 5 and TC 7 (highest priority), then TC 1, TC 3, and TC 4, and finally TC 2 and TC 6 (lowest priority). However, in order to run TC 7, we need to first run TC 4. In order to run TC 4 and TC 2, TC 2 is blocked by TC 1, which should be run prior to TC 2. So, in order to run priority 1 test cases as early as possible, the first five test cases should be: TC 4 - TC 7 - TC 1 - TC 2 - TC 5. Next, we need to run TC 3, because it has higher priority than TC 6. Thus the full sequence is: TC 4 - TC 7 - TC 1 - TC 2 - TC 5 - TC 3 - TC 6. So, the sixth test case will be TC 3. Thus: a) is correct."
    },
    {
        q: "You are testing a web application that allows users to SEARCH for products, VIEW product details, ADD products to a shopping cart, and place an ORDER. You have prepared the following seven test cases, all of which you want to execute. The tests should be executed in the best order, based on test priority. [TC1: SEARCH for product A, Priority 4] [TC2: SEARCH for product B, Priority 4] [TC3: VIEW product A details, Priority 3] [TC4: VIEW product B details, Priority 2] [TC5: ADD product A to a shopping cart, Priority 3] [TC6: ADD product B to a shopping cart, Priority 1] [TC7: place an ORDER, Priority 5]. You also identified the following logical dependencies between test cases: SEARCH functionality must be tested before VIEW functionality can be tested. VIEW functionality must be tested before ADD functionality. ADD functionality must be tested before ORDER functionality. Which test case should be executed first?",
        options: ["TC 3", "TC 1", "TC 7", "TC 2"],
        correct: 1,
        explanation: "The logical dependencies mean that for each product you have to run SEARCH → VIEW → ADD before running ORDER. You can add more products (using the same flow), before you run ORDER. Based on this, TC1 or TC2 must be executed first, otherwise no progress can be made. The first priority should be given to VIEW and ADD for product B, as it has the test cases assigned with higher priority. So, the first 3 tests to execute are TC2 → TC4 → TC6. Now we need to consider whether to run TC7 and then the entire flow for product A or run the TCs for product A first. If TC7 has lower priority than the other tests, it should be tested last. Therefore, the entire flow should be: TC2 → TC4 → TC6 → TC1 → TC3 → TC5 → TC7. Thus: b) is correct."
    },
    {
        q: "Consider the following test cases that are used to test an accounting system: [Test 1: Purchase Item, Dependency None, Priority 2] [Test 2: Receive Invoice, Dependency Test 1, Priority 2] [Test 3: Receive Goods, Dependency Test 1, Priority 2] [Test 4: Send Payment, Dependency Test 2, Priority 3] [Test 5: Report Payments, Dependency Test 4, Priority 1]. Given this information, what is the proper order in which to execute these test cases?",
        options: ["1, 3, 2, 4, 5, 3", "1, 2, 4, 5, 1, 2", "1, 3, 2, 4, 5", "3, 4, 5, 1, 2"],
        correct: 2,
        explanation: "The goal is to run the highest priority tests as soon as possible. Dependency has to be considered in the order for the tests to be actually executed. In order to get the highest priority test run as soon as possible, then we need to run 1, 2, 4 so it has 5 since test 5 follows these 3 test cases and is dependent on it. Then we need to do 2 so we can do 4 and 5 (the highest priority test) and then 3 is last because it has no tests dependent on it."
    },
    {
        q: "You have been given the following set of test cases to run. You have been instructed to run them in order by risk and to accomplish the testing as quickly as possible to provide early feedback to the developers as soon as possible. Given this information, what is the best order in which to run these tests? [Test Case 1: 30 mins, Low Risk, Dependency 6] [Test Case 2: 10 mins, Medium Risk, Dependency none] [Test Case 3: 45 mins, High Risk, Dependency 1] [Test Case 4: 30 mins, High Risk, Dependency 2] [Test Case 5: 10 mins, Medium Risk, Dependency 4] [Test Case 6: 15 mins, Low Risk, Dependency 2]",
        options: ["2, 4, 5, 6, 1, 3", "4, 3, 2, 5, 6, 1", "2, 5, 6, 4, 1, 3", "6, 1, 3, 2, 4, 5"],
        correct: 0,
        explanation: "A is correct because it addresses the highest risk and fastest tests first. It runs a fast medium test before a slow test dependent on test 2 to give feedback to the developers more quickly."
    },
    {
        q: "Which of the following is TRUE regarding the test pyramid?",
        options: [
            "It emphasizes having far more tests at the lower test levels",
            "It suggests that each low-level test checks a large part of the functionality",
            "It describes distribution of test types across SDLC",
            "It has no impact on the construction of automated tests"
        ],
        correct: 0,
        explanation: "The test pyramid emphasizes having a larger number of tests at the lower test levels."
    },
    {
        q: "What does the test pyramid model show?",
        options: [
            "That tests may have different priorities",
            "That tests may have different granularity",
            "That tests may require different entry criteria",
            "That tests may depend on other tests"
        ],
        correct: 1,
        explanation: "The test pyramid model shows that different tests have different levels of granularity."
    },
    {
        q: "Consider the following test categories (1-4) and agile testing quadrants (A-D): 1. Usability testing 2. Component testing 3. Functional testing 4. Reliability testing A. Agile testing quadrant Q1: technology facing, supporting the development team B. Agile testing quadrant Q2: business facing, supporting the development team C. Agile testing quadrant Q3: business facing, critique the product D. Agile testing quadrant Q4: technology facing, critique the product. How do the following test categories map onto the agile testing quadrants?",
        options: ["1C, 2A, 3B, 4D", "1D, 2A, 3C, 4B", "1C, 2B, 3D, 4A", "1D, 2B, 3D, 4A"],
        correct: 1,
        explanation: "Usability testing is in Q3 (1 – C). Component testing is in Q1 (2 – A). Functional testing is in Q2 (3 – B). Reliability testing is in Q4 (4 – D). Thus: a) is correct."
    },
    {
        q: "The following Agile testing quadrants: Agile testing quadrant Q1: technology facing, supporting the team. Agile testing quadrant Q2: Business facing, supporting the team. Agile testing quadrant Q3: Business facing, critique the product. Agile testing quadrant Q4: Technology facing, critique the product. Which of the following is the CORRECT order of test categories and the above Agile testing quadrants?",
        options: [
            "Q1: API Testing, Q2: Exploratory Testing, Q3: Performance Testing, Q4: Component integration Testing",
            "Q1: Component integration Testing, Q2: Exploratory Testing, Q3: API Testing, Q4: Performance Testing",
            "Q1: Performance Testing, Q2: API Testing, Q3: Exploratory Testing, Q4: Component integration Testing",
            "Q1: Component integration Testing, Q2: API Testing, Q3: Exploratory Testing, Q4: Performance Testing"
        ],
        correct: 3,
        explanation: "Q1: Component Integration Testing → Usually comes early in system integration. Q2: API Testing → Often performed during or after integration to verify endpoints. Q3: Exploratory Testing → Typically done when there's a working system to explore. Q4: Performance Testing → Typically done at the end or near release."
    },
    {
        q: "How can the testing quadrants be beneficial for testing?",
        options: [
            "They help in test planning by dividing the test process into four stages, corresponding to the four basic test levels: component, integration, system, and acceptance testing",
            "They help in assessing the high-level coverage (e.g., requirements coverage) based on low-level coverage (e.g., code coverage)",
            "They help non-technical stakeholders to understand the different types of tests and that some test types are more relevant to certain test levels than others",
            "They help agile teams to develop a communication strategy based on classifying people according to four basic psychological types, and on modelling the relations between them"
        ],
        correct: 2,
        explanation: "Testing quadrants allow managers and other stakeholders to understand the relationships between test types, the activities they support (team support or product critique), and the viewpoint they are focused on (business- or technology-facing)."
    },
    {
        q: "What is the relationship between the testing quadrants, test levels and test types?",
        options: [
            "Testing quadrants represent particular combinations of test levels and test types, defining their location in the software development lifecycle",
            "Testing quadrants describe the degree of granularity of individual test types performed at each test level",
            "Testing quadrants assign the test types that can be performed to the test levels",
            "Testing quadrants group test levels and test types by several criteria such as targeting specific stakeholders"
        ],
        correct: 3,
        explanation: "The testing quadrants group test levels, test types, test activities, test techniques and work products by agile development. In the model, tests can be business facing or technology facing. Tests can support the team (i.e., guide the development) or critique the product (i.e., measure its behavior against expectations). This model determines the four quadrants."
    },
    {
        q: "According to the testing quadrants model, which of the following falls into quadrant Q1 ('technology facing' and 'support the team')?",
        options: ["Usability testing", "Functional testing", "User acceptance testing", "Component integration testing"],
        correct: 3,
        explanation: "Component integration testing is technology facing testing that supports the team (guides the development) (Q1)."
    },
    {
        q: "You are working on a project and have determined that exploratory testing is the best test technique to apply. Which testing quadrant are you using?",
        options: ["Q1", "Q2", "Q3", "Q4"],
        correct: 2,
        explanation: "Exploratory testing belongs to quadrant Q3."
    },
    {
        q: "Unit tests belong in which testing quadrant?",
        options: ["Q1", "Q2", "Q3", "Q4"],
        correct: 0,
        explanation: "Unit, or component tests belong to quadrant Q1."
    },
    {
        q: "During risk analysis the team considered the following risk: 'The system allows too high a discount for a customer'. The team estimated the risk impact to be very high. What can one say about the risk likelihood?",
        options: [
            "It is also very high. High risk impact always implies high risk likelihood",
            "It is very low. High risk impact always implies low risk likelihood",
            "One cannot say anything about risk likelihood. Risk impact and risk likelihood are independent",
            "Risk likelihood is not important with such a high-risk impact. One does not need to define it"
        ],
        correct: 2,
        explanation: "Risk impact and risk likelihood are independent. We need both factors to determine risk level."
    },
    {
        q: "For a given risk, its risk level is $1,000 and its risk likelihood is estimated as 50%. What is the risk impact?",
        options: ["$500", "$2,000", "$50,000", "$200"],
        correct: 1,
        explanation: "Risk assessment can use a quantitative or qualitative approach, or a mix of them. In the quantitative approach the risk level is calculated as the multiplication of risk level and risk likelihood. Then, Risk impact = Risk level / Risk likelihood. In our case, Risk impact = $1,000 / 50% = $1,000 / 0.5 = $2,000. Thus: a) is not correct, b) is correct."
    },
    {
        q: "Level of risk is determined by which of the following?",
        options: [
            "Likelihood and impact",
            "Priority and risk rating",
            "Probability and practicality",
            "Risk identification and mitigation"
        ],
        correct: 0,
        explanation: "The combination of likelihood and impact is normally used to determine the overall risk level (sometimes called the risk priority number)."
    },
    {
        q: "The following list contains risks that have been identified for a new software product to be developed: i. Management moves two experienced testers to another project ii. The system does not comply with functional safety standards iii. System response time exceeds requirements iv. Stakeholders have inaccurate expectations v. Disabled people have problems when using the system. Which of the following is a project risks?",
        options: ["i, iv", "iv, v", "i, iii", "ii, v"],
        correct: 0,
        explanation: "i. Project risk, ii. Product risk, iii. Product risk, iv. Project risk, v. Product risk. Thus: a) is correct."
    },
    {
        q: "Which of the following is a product risks?",
        options: ["Scope creep", "Poor architecture", "Cost-cutting", "Poor tool support", "Response time that is too long"],
        correct: 1,
        explanation: "Poor architecture is an example of a product risk since it refers to a product characteristic."
    },
    {
        q: "Which of the following is a project risk?",
        options: [
            "A defect that is causing a performance issue",
            "A duplicate requirement",
            "An issue with a data conversion procedure",
            "A schedule that requires work during weekdays as shutdown"
        ],
        correct: 3,
        explanation: "This is a risk to the entire project. A, B and C are product risks."
    },
    {
        q: "Which of the following is a project risk?",
        options: [
            "A module that performs incorrect calculations due to a defect in a formula",
            "A failed performance test",
            "An issue with the interface between the system under test and a peripheral device",
            "A problem with the development manager which is resulting in his rejecting all defect reports"
        ],
        correct: 3,
        explanation: "This is a project risk. The other three are product risks."
    },
    {
        q: "Which of the following is an example of how product risk analysis influences thoroughness and scope of testing?",
        options: [
            "The test manager monitors and reports the level of all known risks on a daily basis so the stakeholders can make an informed decision on the release date",
            "One of the identified risks was 'Lack of support of open-source databases', so the team decided to integrate the system with an open source database",
            "During the quantitative risk analysis, the team estimated the total level of all identified risks and reported it as the total residual risk before testing",
            "Risk assessment revealed high performance risks, so it was decided to perform detailed performance efficiency testing early in the SDLC"
        ],
        correct: 3,
        explanation: "This shows how risk analysis impacts the thoroughness of testing (i.e., the level of detail)."
    },
    {
        q: "Which of the following is an example of how product risk analysis may influence the thoroughness and scope of testing?",
        options: [
            "Continuous risk monitoring allows us to identify emerging risk as soon as possible",
            "Risk identification allows us to implement risk mitigation activities and reduce the risk level",
            "The assessed risk level helps us to determine the rigor of testing",
            "Risk analysis allows us to derive coverage items"
        ],
        correct: 2,
        explanation
