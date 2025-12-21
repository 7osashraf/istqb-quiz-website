const questions = [
    {
        q: "When the tester verifies the test basis while designing tests early in the lifecycle, which test objective is being achieved?",
        options: ["Gaining confidence", "Finding defects", "Evaluating work products", "Providing information for decision making"],
        correct: 2,
        explanation: "The answer is c. Verifying the test basis is achieved primarily by doing dynamic testing. This is a bit tricky because you are very likely to find defects while doing this analysis and this may lead to either gaining or destroying confidence and needing to supply information to the customer that decision makers. What is occurring here is an evaluation of the work product, in this case the requirements."
    },
    {
        q: "Which of the following is a typical test objective?",
        options: ["Validating that documented requirements are met", "Causing failures and identifying defects", "Initiating errors and identifying root causes", "Verifying the test object meets user expectations"],
        correct: 1,
        explanation: "Causing failures and identifying defects is probably the most common objective of dynamic testing."
    },
    {
        q: "Which of the following is a typical test objective?",
        options: ["Finding and fixing defects in the test object", "Maintaining effective communications with developers", "Validating that legal requirements have been met", "Building confidence in the quality of the test object"],
        correct: 3,
        explanation: "Building confidence in the quality of the test object is achieved by executing tests that pass."
    },
    {
        q: "Which of the following statements describe a valid test objective?",
        options: ["To prove that there are no unfixed defects in the system under test", "To prove that there will be no failures after implementation of the system into production", "To reduce the risk level of the test object and to build confidence in the quality level", "To verify that there are no untested combinations of inputs"],
        correct: 2,
        explanation: "Testing finds defects and failures which reduces the level of risk and at the same time gives more confidence in the quality level of the test object."
    },
    {
        q: "You were given a task to analyze and fix causes of failures in a new system to be released. Which activity are you performing?",
        options: ["Debugging", "Software testing", "Requirement elicitation", "Defect management"],
        correct: 0,
        explanation: "Debugging is the process of finding, analyzing, and removing the causes of failures in a component or system."
    },
    {
        q: "Which of the following statements BEST describes the difference between testing and debugging?",
        options: ["Testing causes failures while debugging fixes failures", "Testing is a negative activity while debugging is a positive activity", "Testing determines that defects exist while debugging removes defects", "Testing finds the cause of defects while debugging fixes the cause of defects"],
        correct: 2,
        explanation: "Testing directly (through observation of the defect in reviews) or by a tool in static analysis), or indirectly by causing a failure in dynamic testing. Debugging (only for dynamic testing) and fixing the defects."
    },
    {
        q: "Which of the following is an example of debugging?",
        options: ["A tester finds a defect and reports it", "A tester retests a fix from the developer and finds a regression", "A developer finds and fixes a defect", "A developer performs unit testing"],
        correct: 2,
        explanation: "Debugging is done by developer does to identify the cause of the defect, analyze it and fix it. D may involve debugging, if the developer finds a defect, but the act of unit testing is not the same as debugging."
    },
    {
        q: "Which of the following options shows an example of test activities that contribute to success?",
        options: ["Having testers involved during various software development lifecycle (SDLC) activities will help to detect defects in work products", "Testers try not to disturb the developers while coding, so that the developers write better code", "Testers collaborating with end users help to improve the quality of defect reports during component integration and system testing", "Certified testers will design much better test cases than non-certified testers"],
        correct: 0,
        explanation: "Testers being involved from the beginning of the software development lifecycle (SDLC), it will increase understanding of design decisions and will detect defects early."
    },
    {
        q: "Which of the following is an example of why testing is necessary?",
        options: ["Dynamic testing increases quality by causing test objects to fail in ways that could never be achieved by users", "Static testing is used by developers to identify failures in their program code earlier than can be achieved through dynamic testing", "Static analysis provides evidence to customers that the elements of the system that provide the outputs are fit for release", "Reviews increase the quality of requirements specifications and lead to fewer changes being needed in derived work products"],
        correct: 3,
        explanation: "Reviews testing is applied from the very start of the software development lifecycle and are used to find defects that can be removed before subsequent development activities waste effort on faulty requirements."
    },
    {
        q: "In many software organizations the test department is called the Quality Assurance (QA) department. Is this sentence correct or not and why?",
        options: ["It is correct. Testing and QA mean exactly the same thing", "It is correct. These names can be used interchangeably because both testing and QA focus their activities on the same quality issues", "It is not correct. Testing is something more: testing includes all activities with regard to quality. QA focuses on quality-related processes", "It is not correct. QA is focused on quality-related processes while testing concentrates on demonstrating that all of system or test object for purpose to detect defects"],
        correct: 3,
        explanation: "Testing and quality assurance are not the same. Testing is the process consisting of all software development lifecycle (SDLC) activities, both static and dynamic, concerned with planning, preparation and evaluation of a component or system and related work products to determine that they are fit for purpose."
    },
    {
        q: "Which of the following statements about quality assurance (QA) and/or quality control (QC) is correct?",
        options: ["QA is performed as part of testing", "Testing is performed as part of QC", "Testing is another term for QC", "Testing is performed as part of QA"],
        correct: 1,
        explanation: "QC aims to achieve appropriate levels of quality by focusing on identifying and correcting product defects. Testing which is one of QC helps to uncover these defects."
    },
    {
        q: "Which of the following statements best describes the relationship between Quality Assurance (QA) and Testing?",
        options: ["QA is product-oriented and involves finding defects through testing", "Quality control is process-oriented and focused on process compliance", "Test results are used by quality control to fix bugs", "Test results are used by quality control to get feedback on how well the development process is performing"],
        correct: 3,
        explanation: "QA is process-oriented, not product-oriented. QC is product-oriented, and one of its outputs (testing) helps in fixing bugs."
    },
    {
        q: "In what way does root cause analysis contribute to quality assurance?",
        options: ["Helps to better identify and correct the root cause of defects", "Outlines how development teams can code faster", "Specifies the desired root causes to be achieved by other teams", "Contributes to the justification of future project funding"],
        correct: 0,
        explanation: "Root cause analysis can determine common causes of issues. Addressing these common causes by process improvement can increase quality."
    },
    {
        q: "A designer documents a design for a user interface that does not suitably address disabled users because the designer is tired. The programmer implements the user interface in line with the design but as they are working under severe time pressure, they do not include suitable exception handling. When the operational system is used, complaints are made by some disabled users about the interface. Which of the following statements is CORRECT?",
        options: ["The miscalculation of bonuses is a defect that occasionally occurs", "The fine received for failing to address some disabled users is a failure", "The programmer working under severe time pressure is a root cause", "The design of the user interface is a design error"],
        correct: 2,
        explanation: "The error is made by the programmer and this mistake is caused by them working under severe time pressure, which is the root cause of the subsequent defect."
    },
    {
        q: "Which of the following is a correct statement?",
        options: ["A developer makes a mistake which causes a defect that may be seen as a failure during dynamic testing", "A developer makes an error which results in a failure that may be seen as a fault when the software is executed", "A developer has introduced a failure which results in a defect that may be seen as a mistake during dynamic testing", "A developer makes a mistake which causes a bug that may be seen as a defect when the software is executed"],
        correct: 3,
        explanation: "The developer makes a mistake/error which causes a defect/fault/bug which may cause a failure when the code is dynamically tested or executed."
    },
    {
        q: "A phone ringing in a neighboring cubicle distracts a programmer causing him to improperly program the logic that checks the upper boundary of an input variable. Later, during unit testing, a tester notices that this input field accepts invalid input values. Which of the following correctly describes an incorrectly coded upper bound?",
        options: ["The root cause", "A failure", "An error", "A defect"],
        correct: 3,
        explanation: "The problem in the code is a defect."
    },
    {
        q: "Test conditions are being used by testers to generate test cases and execute tests. Even though the test conditions remain the same, the test cases are varied each time. Which of the following principles of testing is being addressed through the variation of test cases?",
        options: ["Tests wear out", "Absence-of-defects fallacy", "Early testing saves time and money", "Defects cluster together"],
        correct: 0,
        explanation: "The tests wear out principle is concerned with the idea that repeating identical tests on unaltered code is unlikely to uncover novel defects. By using test conditions to generate new tests each time, the tests will not be identical and the risk of the tests wearing out is reduced."
    },
    {
        q: "You have been assigned as a tester to a team producing a new system incrementally. You have noticed that no changes have been made to the existing regression test cases for several iterations. Your manager is happy, but you are not. Which testing principle explains your skepticism?",
        options: ["Tests wear out", "Absence-of-defects fallacy", "Defects cluster together", "Exhaustive testing is impossible"],
        correct: 0,
        explanation: "This principle means that if the same tests are repeated over and over again, eventually these tests no longer find any new defects."
    },
    {
        q: "One of the principles of testing states that exhaustive testing is impossible. Which of the following is an example of addressing this principle in practice?",
        options: ["Creating test cases that cover every possible specified output", "Documenting all possible test input variations and prioritizing these based on importance", "Starting exploratory testing as soon as possible based on the test basis", "Using equivalence partitioning and boundary value analysis to generate test cases"],
        correct: 3,
        explanation: "Using test techniques both during test analysis and as part of the test design activity provides a systematic way to derive a finite subset of all possible test cases."
    },
    {
        q: "The absence-of-defects fallacy is one of the principles of testing. Which of the following is an example of addressing this principle in practice?",
        options: ["Explaining that it is not possible for testing to show the absence of defects", "Supporting the end users to perform acceptance testing", "Ensuring that no implementation defects remain in the delivered system", "Modifying tests that cause no failures to ensure few defects remain"],
        correct: 1,
        explanation: "By supporting the end user to perform acceptance testing it should be possible to validate that the system meets users needs and expectations, fulfills business objectives, and outperforms competing systems."
    },
    {
        q: "Why is it important to avoid the principle of tests wearing out?",
        options: ["Dynamic testing is less reliable in finding bugs", "Running the same tests repeatedly will consistently find new failures", "Tests should not be context dependent", "Running the same tests repeatedly will reduce the chance of finding new failures"],
        correct: 3,
        explanation: "As tests are run repeatedly, the tests become less effective."
    },
    {
        q: "Which of the following is a true statement about exhaustive testing?",
        options: ["It is a form of stress testing", "It is not feasible except in the case of trivial software", "It is commonly done with test automation", "It is normally the responsibility of the developer during unit testing"],
        correct: 1,
        explanation: "Exhaustive testing, all combinations of inputs and preconditions, is not feasible unless the software is trivially simple."
    },
    {
        q: "When following a standard test process, when should the test control activity take place?",
        options: ["During the planning activities", "During the implementation and execution activities", "During the monitoring activities", "During all the activities"],
        correct: 3,
        explanation: "Control occurs throughout the project to ensure that it is staying on track based on the plan and to take any corrective steps that may be necessary."
    },
    {
        q: "Which of the following is the activity that compares the planned test progress to the actual test progress?",
        options: ["Test monitoring", "Test planning", "Test closure", "Test control"],
        correct: 0,
        explanation: "Test monitoring involves the on-going comparison of actual progress against the test plan."
    },
    {
        q: "You work in a team that develops a mobile application for food ordering. In the current iteration the team decided to implement the payment functionality. Which of the following activities is a part of test analysis?",
        options: ["Estimating that testing the integration with the payment service will take 8 person days", "Deciding what the team should test to make sure that it is possible to properly share payment between many users", "Using boundary value analysis (BVA) to derive the test data for the test cases that check the correct payment processing", "Analyzing the discrepancy between the actual result and expected result after executing a test case"],
        correct: 1,
        explanation: "This is an example of defining test conditions which is a part of test analysis."
    }
];
