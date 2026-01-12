const questions = [
    {
        q: "Which of the following statements about the chosen software development lifecycle is CORRECT?",
        options: [
            "If agile software development is used, automation of system tests replaces the need for regression testing",
            "If a sequential development model is used, then the dynamic testing is typically restricted to later in the lifecycle",
            "If an iterative development model is used, then component testing is typically performed manually by developers",
            "If an incremental development model is used, then static testing is done in early increments and dynamic testing in later increments"
        ],
        correct: 1,
        explanation: "If a sequential development model is used, then early in the software development lifecycle no code is available for execution, and so during this time static testing (e.g., reviews) is performed. Later in the lifecycle, when code is available for execution, dynamic testing is possible."
    },
    {
        q: "In an iterative lifecycle model, which of the following is an accurate statement about testing activities?",
        options: [
            "For every development activity, there should be a corresponding testing activity",
            "For every testing activity, appropriate documentation should be produced, versioned and stored",
            "For every development activity resulting in code, there should be a testing activity to document test cases",
            "For every testing activity, metrics should be recorded and posted to a metrics dashboard for all stakeholders"
        ],
        correct: 0,
        explanation: "For any lifecycle model, this is a correct statement."
    },
    {
        q: "Consider the following rule: for every SDLC activity there is a corresponding test activity. In which SDLC models does this rule hold?",
        options: [
            "Only in sequential development models",
            "Only in iterative development models",
            "Only in iterative and incremental development models",
            "In sequential, incremental, and iterative development models"
        ],
        correct: 3,
        explanation: "This rule holds for all SDLC models"
    },
    {
        q: "Consider the following rule: for every SDLC activity there is a corresponding test activity. In which SDLC models does this rule hold?",
        options: [
            "Only in sequential SDLC models",
            "Only in iterative SDLC models",
            "Only in iterative and incremental SDLC models",
            "In sequential, incremental, and iterative SDLC models"
        ],
        correct: 3,
        explanation: "This rule holds for all SDLC models"
    },
    {
        q: "Which of the following is a good testing practice that applies to all software development lifecycles?",
        options: [
            "Each test level has specific and distinct test objectives",
            "Test implementation and execution for a given test level should start during the corresponding development phase",
            "Testers should start test design as soon as drafts of the relevant work products become available",
            "Every dynamic testing activity has a corresponding static testing activity"
        ],
        correct: 0,
        explanation: "Each test level has test specific objectives as a different form of test object (e.g., single component and complete system) is tested at each test level and overlapping test objectives would lead to unnecessary duplication"
    },
    {
        q: "Which of the following is a good testing practice that applies to all software development lifecycles?",
        options: [
            "For each test level, there is a corresponding development level",
            "For each test objective, there is a corresponding test object objective",
            "For every software test activity, there is a corresponding user activity",
            "For every software development activity, there is a corresponding test activity"
        ],
        correct: 3,
        explanation: "Quality control applies to all development activities, meaning that every software development activity has a corresponding test activity"
    },
    {
        q: "Which of the following is a good testing practice that applies to all software development lifecycles?",
        options: [
            "Testers should review work products as part of the next development phase",
            "Testers should review work products as soon as drafts are available",
            "Testers should review work products before test analysis and test design begin",
            "Testers should review work products immediately after they are published"
        ],
        correct: 1,
        explanation: "Testers should review work products as soon as drafts are available to enable early testing as part of a shift-left approach"
    },
    {
        q: "Which of the following is an example of a good testing practice?",
        options: [
            "Testers should have development experience",
            "Developers should determine the order of test execution in the test procedures",
            "Test design should begin when the code is complete to avoid changes",
            "Testers should review requirements documents as soon as a readable draft is available"
        ],
        correct: 3,
        explanation: "This is a good testing practice."
    },
    {
        q: "Which of the following is an example of a good testing practice?",
        options: [
            "Different test levels should have specific test objectives",
            "Testers should have development experience",
            "Developers should determine the order of test execution in the test procedures",
            "Test design should begin when the code is complete to avoid changes"
        ],
        correct: 0,
        explanation: "This is a good testing practice."
    },
    {
        q: "Which of the following statements BEST describes the acceptance test-driven development (ATDD) approach?",
        options: [
            "In ATDD, acceptance criteria are typically created based on the given/when/then format",
            "In ATDD, test cases are mainly created at component testing and are code-oriented",
            "In ATDD, tests are created, based on acceptance criteria or drive the development of the related software",
            "In ATDD, tests are based on the desired behavior of the software, which makes it easier for team members to understand them"
        ],
        correct: 2,
        explanation: "In acceptance test-driven development (ATDD) tests are written from acceptance criteria as part of the design process"
    },
    {
        q: "Which of the following is an example of a test-first approach to development?",
        options: [
            "Test-Driven Development",
            "Coverage-Driven Development",
            "Quality-Driven Development",
            "Feature-Driven Development"
        ],
        correct: 0,
        explanation: "Test-Driven Development (TDD) is a well-known example of a test-first approach to development"
    },
    {
        q: "Which of the following is an example of a test-first approach to development?",
        options: [
            "Behavior-Driven Development",
            "Test Level Driven Development",
            "Function-Driven Development",
            "Performance-Driven Development"
        ],
        correct: 0,
        explanation: "Behavior-Driven Development (BDD) is a well-known example of a test-first approach to development"
    },
    {
        q: "Which of the following is an example of a test-first approach to development?",
        options: [
            "Component Test-Driven Development",
            "Integration Test-Driven Development",
            "System Test-Driven Development",
            "Acceptance Test-Driven Development"
        ],
        correct: 3,
        explanation: "Acceptance Test-Driven Development (ATDD) is a well-known example of a test-first approach to development"
    },
    {
        q: "You are working as a tester in the team that follows the V-model. Which of the following activities CAN be performed in the initial phases of the SDLC? Select TWO options.",
        options: [
            "Dynamic test execution",
            "Static testing",
            "Test planning",
            "Acceptance test execution",
            "Maintenance testing"
        ],
        correct: 1,
        explanation: "In sequential development models, in the initial phases, testers participate in requirement reviews, which is a form of static testing. Test planning could be performed early in the SDLC before the test project begins together with test analysis and test design."
    },
    {
        q: "When testing is directed by the test cases, what development approach is being used?",
        options: [
            "TDD",
            "BDD",
            "ATDD",
            "TBD"
        ],
        correct: 0,
        explanation: "This is an example of test-driven development."
    },
    {
        q: "Which development approach captures the requirements in a simple test case format?",
        options: [
            "TDD",
            "BDD",
            "ATDD",
            "TBD"
        ],
        correct: 1,
        explanation: "Behavior-driven development uses the given/when/then format to define the test cases. Those are then used as the requirements to develop the code."
    },
    {
        q: "Which of the following is MOST likely to be a challenge encountered when implementing DevOps?",
        options: [
            "Making sure that non-functional quality characteristics are not overlooked",
            "Managing the continuously changing test environments",
            "The need for more manual testers with suitable experience",
            "Setting up the test automation as part of the delivery pipeline"
        ],
        correct: 3,
        explanation: "DevOps implementation can pose several risks and challenges, including the need to define and set up the delivery pipeline, introduce and maintain CI/CD tools, and establish and maintain test automation"
    },
    {
        q: "Which of the following statements about DevOps is CORRECT?",
        options: [
            "To speed up releases, continuous integration is used to encourage developers to submit code quickly without need to commit to component level testing",
            "To be able to update and release systems on a more frequent basis, many automated regression tests are required to reduce the danger of regression",
            "To treat both developers and operations equally, the testers will allocate more effort to release testing by operations using a shift-right approach",
            "To create increased synergy between testers, developers and operations, the testing must become fully automated with no manual testing"
        ],
        correct: 1,
        explanation: "DevOps enhances testing in several ways, such as by providing fast feedback on code quality, automated regression testing that minimizes regression risk, and promoting a shift-left approach with high-quality code submission and component tests"
    },
    {
        q: "Which of the following are advantages of DevOps? i. Faster product release and faster time to market ii. Increases the need for repetitive manual testing iii. Constant availability of executable software iv. Reduction in the number of regression tests associated with code refactoring v. Setting up the test automation framework is inexpensive since everything is automated",
        options: [
            "i, ii, iv are advantages",
            "iii, v are advantages",
            "i, iii are advantages",
            "ii, iv, v are advantages"
        ],
        correct: 2,
        explanation: "Faster product release and faster time to market is an advantage of DevOps. Constant availability of executable software is an advantage."
    },
    {
        q: "Your organization has decided to implement DevOps. One of the biggest concerns from the operations people is that there have been ongoing performance issues in production. How will implementing DevOps and CI/CD help with this problem?",
        options: [
            "It won't - the problem needs to be addressed during design",
            "Performance testing will be put into the CI/CD pipeline to test it incrementally and repeatedly throughout development",
            "Performance testing will be the main focus of the system integration testing, after the code has been delivered to the test environment",
            "Performance testing experts will be used to conduct the performance testing in an isolated environment which has been developed using the same process as production"
        ],
        correct: 1,
        explanation: "With a CI/CD implementation, performance testing can be implemented throughout the pipeline, starting with the unit testing and continuing through to the deployed product. CI/CD will also help ensure that the delivery is into the proper environments that can support the various types of testing."
    },
    {
        q: "Which of the following is NOT an example of the shift-left approach?",
        options: [
            "Reviewing the user requirements before they are formally accepted by the stakeholders",
            "Writing a component test before the corresponding code is written",
            "Executing a performance efficiency test for a component during component testing",
            "Writing a test script before setting up the configuration management process"
        ],
        correct: 3,
        explanation: "Test scripts should be subject to configuration management, so it makes no sense to create the test scripts before this process is set up"
    },
    {
        q: "In what way is CI/CD an example of the concept of shift-left?",
        options: [
            "It gets the code to production faster",
            "It allows the developers to continuously integrate their code",
            "It requires continuous testing throughout the pipeline",
            "It elevates the testers as the owners of quality"
        ],
        correct: 2,
        explanation: "CI/CD requires continuous testing, including test automation, to be implemented for the entire pipeline. This allows test activities to be as early as possible and shifts the testing left into the timeline."
    },
    {
        q: "Which of the following is NOT an example of the shift-left approach?",
        options: [
            "Reviewing the user requirements before they are formally accepted by the stakeholders",
            "Writing a component test before the corresponding code is written",
            "Executing a performance efficiency test for a component during component testing",
            "Writing a test script before setting up the configuration management process"
        ],
        correct: 3,
        explanation: "Test scripts should be subject to configuration management, so it makes no sense to create the test scripts before this process is set up"
    },
    {
        q: "Which of the following provides the BEST description of shift-left?",
        options: [
            "When agreed by the developers, manual activities on the left-hand side of the test process are automated to support the principle of early testing saves time and money",
            "When cost-effective, test activities are moved earlier in the software development lifecycle (SDLC) to reduce the total cost of quality by reducing the number of defects found later in the SDLC",
            "When we have spare time available, testers are required to automate tests for regression testing, starting with component tests and component integration tests",
            "When available, testers are trained to perform tasks early in the SDLC to allow more test activities to be automated later in the SDLC"
        ],
        correct: 1,
        explanation: "Shift left emphasizes the importance of starting testing earlier in the SDLC. Implementing shift left testing necessitates additional training, and increased effort and costs during the early phases of the SDLC, nevertheless, overall savings should be higher"
    },
    {
        q: "Which of the arguments below would you use to convince your manager to organize retrospectives at the end of each release cycle?",
        options: [
            "Retrospectives are very popular these days and clients would appreciate it if we added them to our processes",
            "Organizing retrospectives will save the organization money because without them end user representatives do not provide immediate feedback about the product",
            "Process weaknesses identified during the retrospective can be analyzed and serve as a to do list for the organization's continuous process improvement program",
            "Retrospectives embrace five values including courage and respect, which are crucial to maintain continuous improvement in the organization"
        ],
        correct: 2,
        explanation: "Regularly conducted retrospectives, when appropriate follow up activities occur, are critical to continual improvement of development and testing"
    },
    {
        q: "Which of the following BEST describes retrospectives?",
        options: [
            "Retrospectives allow team members to identify other team members who did not fully contribute to achieving quality as required by the whole-team approach",
            "Retrospectives give testers an opportunity to identify activities that were successful so that these are retained when potential improvements are made in the future",
            "Retrospectives are where agile team members are allowed to voice concerns about management and customers in a blame-free environment",
            "Retrospectives give agile team members a forum where they focus on discussing the plan and technical decisions for the next iteration"
        ],
        correct: 1,
        explanation: "During the retrospective, the group discusses what aspects of the project were successful and should be retained, as well as areas that could be improved, and how to do so"
    },
    {
        q: "Which of the following is LEAST likely to occur as a result of a retrospective?",
        options: [
            "The quality of future test objects improves by identifying improvements in development practices",
            "Test efficiency improves by speeding up the configuration of test environments through automation",
            "End users' understanding of the development and test processes is improved",
            "Automated test scripts are enhanced through feedback from developers"
        ],
        correct: 2,
        explanation: "Participants in retrospectives typically include testers, developers, architects, product owners, and business analysts, but end users are rarely invited or attend these meetings – and they also would not understand reports from these meetings. So, it is very unlikely that they will learn and understand more about the development and test processes through retrospectives"
    },
    {
        q: "Your team has just completed a retrospective. They have discussed what was successful and should be retained, and they discussed what improvements are needed. What else do they need to discuss in order to recognize process improvements?",
        options: [
            "What will be retained or changed for the future",
            "Who is to blame for the shortcomings of the project",
            "How much money was spent that could have been saved",
            "Why changes were not made earlier in the project"
        ],
        correct: 0,
        explanation: "It's great to gather the information, but in order for change to really be made, it has to be planned for implementation in future sprints/releases/projects."
    },
    {
        q: "Which types of failures (1-4) fit which test levels (A-D) BEST? 1. Failures in system behavior as it deviates from the user's business needs 2. Failures in communication between components 3. Failures in logic in a module 4. Failures in not correctly implemented business rules",
        options: [
            "1D, 2B, 3A, 4C",
            "1D, 2B, 3C, 4A",
            "1B, 2A, 3D, 4C",
            "1C, 2B, 3A, 4D"
        ],
        correct: 0,
        explanation: "The test basis for acceptance testing is the user's business needs (1D). Communication between components is tested during component integration testing (2B). Failures in logic can be found during component testing (3A). Business rules are the test basis for system testing (4C)."
    },
    {
        q: "Which of the following is MOST likely to be performed as part of system testing?",
        options: [
            "Security testing of a credit management system by an independent test team",
            "Testing the interface of a currency exchange system with an external banking system",
            "Beta testing of a remote learning system by courseware developers",
            "Testing interactions between in-house and database of a human resources system"
        ],
        correct: 0,
        explanation: "System testing examines the behavior and capabilities of the complete system and covers functional testing of quality characteristics, which includes security testing. This type of testing is often performed by an independent test team based on system specifications"
    },
    {
        q: "Which of the following test levels is MOST likely being performed if the testing is focused on validation and is not being performed by testers?",
        options: [
            "Component testing",
            "Component integration testing",
            "System integration testing",
            "Acceptance testing"
        ],
        correct: 3,
        explanation: "Acceptance testing focuses on validating that the system meets the user's business needs and is ready for deployment. Ideally, this testing is carried out by the end users"
    },
    {
        q: "During which level(s) of testing should non-functional tests be executed?",
        options: [
            "Unit and integration only",
            "System testing only",
            "Integration, system and acceptance only",
            "Unit, integration, system and acceptance only"
        ],
        correct: 3,
        explanation: "Non-functional tests can and should be executed at all levels of testing."
    },
    {
        q: "You work as a tester on a project on a mobile application for food ordering for one of your clients. The client sent you a list of requirements. One of them, with high priority, says: The order must be processed in less than 10 seconds in 95% of the cases. You created a set of test cases in which orders of random order were made, the processing time measured, and the test results were checked against the requirements. What test type did you perform?",
        options: [
            "Functional, because the test cases cover the user's business requirement for the system",
            "Non-functional, because they measure the system's performance",
            "Functional, because the test cases interact with the user interface",
            "White-box, because we need to know the internal structure of the program to measure the order processing time"
        ],
        correct: 1,
        explanation: "This is an example of testing for performance efficiency, a type of non-functional testing"
    },
    {
        q: "Which of the following tests is MOST likely to be performed as part of functional testing?",
        options: [
            "The test checks that the sort function puts the elements of the list or array in ascending order",
            "The test checks whether the sort function completes sorting within one second of starting",
            "The test checks how easily the sort function can be changed from sorting ascending to sorting descending",
            "The test checks that the sort function still functions correctly when moved from a 32-bit to a 64-bit architecture"
        ],
        correct: 0,
        explanation: "Checking that the sort function puts the elements of the list or array in ascending order is evaluating the functional correctness of the sort function, which is functional testing"
    },
    {
        q: "Usability testing is an example of which type of testing?",
        options: [
            "Functional",
            "Non-functional",
            "Structural",
            "Change-related"
        ],
        correct: 1,
        explanation: "Usability is one of the non-functional test types according to ISO 25010."
    },
    {
        q: "You have been receiving daily builds from the developers. Even though they are documenting the fixes they are including in each build, you are finding that the fixes exist in the build or are not working. What type of testing is best suited for finding these issues?",
        options: [
            "Unit testing",
            "System testing",
            "Confirmation testing",
            "Regression testing"
        ],
        correct: 2,
        explanation: "Confirmation testing will determine if a fix is present in a build and if it actually fixes the defect it is supposed to fix."
    },
    {
        q: "You are testing a user story with three acceptance criteria: AC1, AC2 and AC3. AC1 is covered by test case TC1, AC2 by TC2, and AC3 by TC3. The test execution history had three test runs on three different versions of the software. Tests are repeated once you are informed that all defects found in the test run are corrected and a new version of the software is available. Which of the above tests are executed as regression tests?",
        options: [
            "Only 4, 7, 8, 9",
            "Only 5, 7",
            "Only 4, 6, 8, 9",
            "Only 5, 6"
        ],
        correct: 1,
        explanation: "Because TC1 and TC3 failed in Execution 1 (i.e., test (1) and test (3)), test (4) and test (6) are confirmation tests. Because TC2 and TC3 failed in Execution 2 (i.e., tests (5) and (6)), test (8) and test (9) are also confirmation tests. TC2 passed in Execution 1 (i.e., test (2)), so test (5) is a regression test. TC1 passed in Execution 2 (i.e., test (4)), so test (7) is also a regression test."
    },
    {
        q: "The navigation system software has been updated due to it suggesting routes that break traffic laws, such as driving the wrong way down one-way streets. Which of the following BEST describes the testing that will be performed?",
        options: [
            "Only confirmation testing",
            "Confirmation testing then regression testing",
            "Only regression testing",
            "Regression testing then confirmation testing"
        ],
        correct: 1,
        explanation: "Confirmation testing will check that the updates have resulted in a correct implementation and the regression testing will be used to ensure that no defects have been introduced or uncovered in unchanged areas of the system"
    },
    {
        q: "Which of the following statements is CORRECT?",
        options: [
            "Regression tests increase in number as the project progresses, whereas the number of confirmation tests decreases as the project progresses",
            "Regression tests are created and run when the test object is fixed, whereas confirmation tests are run whenever the test object is enhanced",
            "Regression testing is concerned with checking that the operational environment remains unchanged, whereas confirmation testing is concerned with testing changes to the test object",
            "Regression testing is concerned with adverse effects in unchanged code, whereas confirmation testing is concerned with testing changed code"
        ],
        correct: 3,
        explanation: "Regression testing ensures that changes do not have negative effects on unchanged software. Confirmation testing verifies that a defect has been fixed in changed code"
    },
    {
        q: "Your organization's test strategy suggests that once a system is going to be retired, data migration shall be tested. As part of what test type is this testing MOST likely to be performed?",
        options: [
            "Maintenance testing",
            "Regression testing",
            "Component testing",
            "Integration testing"
        ],
        correct: 0,
        explanation: "When a system is retired, this can require testing of data migration or archiving, which is a form of maintenance testing"
    },
    {
        q: "Which of the following is MOST likely to be a trigger that leads to maintenance testing of a currency exchange system?",
        options: [
            "The developers reported that changing the currency exchange system was difficult and the testers decided to check it this was true",
            "The refund option of the currency exchange system was removed as it did not always repay the correct amount to customers",
            "The agile team has started developing a user story that adds a new customer loyalty feature to the currency exchange system",
            "The language support option of the currency exchange system was used to enable both English and local language currency transaction"
        ],
        correct: 1,
        explanation: "A system modification (such as a fix or enhancement) is an example of a trigger for maintenance testing. The removal of the refund option in the currency exchange system was a fix that would lead to maintenance testing"
    },
    {
        q: "When a system is targeted for decommissioning, what type of maintenance testing may be required?",
        options: [
            "Retirement testing",
            "Regression testing",
            "Data migration testing",
            "Patch testing"
        ],
        correct: 2,
        explanation: "Data migration to another system or data migration to an archive may be needed."
    }
];
