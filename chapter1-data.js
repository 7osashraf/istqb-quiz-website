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
    ,
    {
        q: "Which of the following BEST matches the tasks with the activities? Given test tasks: 1. Derive test cases from test conditions 2. Identify reusable testware 3. Organize test cases into test procedures 4. Evaluate test basis and test object. And test activities: A. Test analysis B. Test design C. Test implementation D. Test completion",
        options: ["1B, 2A, 3D, 4C", "1B, 2D, 3C, 4A", "1C, 2A, 3B, 4D", "1C, 2D, 3A, 4B"],
        correct: 1,
        explanation: "The CORRECT match is: 1B (Test design), 2D (Test completion), 3C (Test implementation), 4A (Test analysis)"
    },
    {
        q: "Which of the following test activities are MOST likely to improve the application of boundary value analysis and equivalence partitioning? Select TWO options.",
        options: ["Test implementation", "Test design", "Test execution", "Test monitoring", "Test analysis"],
        correct: 4,
        explanation: "Test analysis is likely to involve the use of test techniques to identify test conditions and coverage items. Test design is likely to involve the use of test techniques to create test cases from test conditions and coverage items"
    },
    {
        q: "Which test activity involves working with test design, requirement, test conditions, test environment requirements and test cases?",
        options: ["Test design", "Test execution", "Test analysis", "Test implementation"],
        correct: 3,
        explanation: "Test implementation includes the creation of test procedures, such as manual and automated test scripts, which are created from test cases and may be assembled into test suites."
    },
    {
        q: "Which of the following factors have a SIGNIFICANT influence on the test approach? I. The SDLC II. The number of defects detected in previous projects III. The identified product risks IV. New regulatory requirements forcing formal white-box testing V. The test environment setup",
        options: ["i, ii have significant influence", "i, iii, iv have significant influence", "ii, iv, v have significant influence", "iii, v have significant influence"],
        correct: 1,
        explanation: "The SDLC has a significant influence on the test approach. The identified product risks are one of the most important factors influencing the test approach. Regulatory requirements are important factors influencing the test approach."
    },
    {
        q: "It is we are working on a project that has no budget, which is preventing testing to be done quickly. How should the test approach be adjusted?",
        options: ["Develop detailed test cases to reduce the test automation effort", "Use techniques such as exploratory and checklist-based testing that require less time on test case development", "Ensure that testing starts only after the developers have completed integration tests", "Develop end-to-end test automation before performing manual testing"],
        correct: 1,
        explanation: "These techniques will help to address the need for testing to be done quickly. These are lightweight approaches that require less time preparing documentation and allow test execution to start sooner."
    },
    {
        q: "Which of the following is MOST likely to impact how testing is performed for a given test object?",
        options: ["The average level of experience of the organization's marketing team", "The knowledge of users that a new system is being built for them", "The number of years' experience of the members of the test team", "The end user's organizational structure for a commercial music streaming application"],
        correct: 2,
        explanation: "The number of years' experience of the members of the performance efficiency testing team will help to determine the capabilities and knowledge that the team members will apply when they are testing."
    },
    {
        q: "Consider the following testware. Test Charter #04.018. Session time: 1h. Explore: Registration page. With: Different sets of incorrect input data. To discover: Defects related to accepting the registration process with the incorrect input. Which test activity produces this testware as an output?",
        options: ["Test planning", "Test monitoring and test control", "Test analysis", "Test design"],
        correct: 3,
        explanation: "The testware under consideration is a test charter. Test charters are the output from test design."
    },
    {
        q: "Consider the following testware. Defect ID: 785. Defect Summary: Interest rate of a saving account is not specified in the requirements document. Work Product: Requirements document Defect. Description: in page 33, the interest rate of a saving account is not specified. Which test activity produces this testware?",
        options: ["Test planning", "Test analysis", "Test design", "Test execution"],
        correct: 1,
        explanation: "The provided testware (defect report) identifies a missing requirement. This is a result of test analysis which examines requirements to identify issues."
    },
    {
        q: "Given the following testware: i. Test completion report ii. Data held in a database used for test inputs and expected results iii. The list of elements needed to build the test environment iv. Documented sequences of test cases to be executed v. Test cases. Which BEST shows the testware produced as a result of performing test implementation?",
        options: ["ii, iv", "iii, v", "i, ii, v", "i, iii, iv"],
        correct: 0,
        explanation: "Items ii and iv in the list are produced as a result of test implementation"
    },
    {
        q: "Which of the following BEST shows the testware produced by the activities? Given testware: 1. Coverage items 2. Change requests 3. Test execution schedule 4. Prioritized test conditions. And test activities: A. Test analysis B. Test design C. Test implementation D. Test completion",
        options: ["1B, 2D, 3C, 4A", "1B, 2D, 3C, 4A", "1B, 2D, 3C, 4A", "1B, 2D, 3C, 4A"],
        correct: 0,
        explanation: "The correct match is: 1B (Test design), 2D (Test completion), 3C (Test implementation), 4A (Test analysis)"
    },
    {
        q: "Your team has conducted a quality risk analysis and has determined the likelihood, impact and mitigation plan for each identified risk. This information should be captured in what work product?",
        options: ["Test strategy", "Test plan", "Risk register", "Risk plan"],
        correct: 2,
        explanation: "This information should be recorded in the risk register. The risk register should be referenced in the test plan."
    },
    {
        q: "Which of the following is the BEST example of how traceability supports testing?",
        options: ["Performing the impact analysis of a change will give information about the completion of tests", "Analyzing the traceability between test cases and test results will give information about the estimated level of residual risk", "Performing the impact analysis of a change will help selecting the right test cases for regression testing", "Analyzing the traceability between the test basis, the test objects and the test cases will help in selecting test data"],
        correct: 2,
        explanation: "Traceability running the impact analysis of the changes helps in detecting the test cases for the regression test."
    },
    {
        q: "Which of the following statements is a CORRECT example of the value of traceability?",
        options: ["Traceability between the mitigated risks and test cases that passed provides a means of determining the level of residual risk", "Traceability between user requirements and test results provides a means of measuring project progress against business goals", "Traceability between testers and test cases that failed provides a means of determining the skill level of the testers", "Traceability between identified risks and written test conditions provides a means of determining which further test conditions need to be written"],
        correct: 1,
        explanation: "Traceability between user requirements and test results provides an indication of which user requirements have been tested and provides a means of measuring project progress against business goals."
    },
    {
        q: "If you need to provide a report showing test execution coverage of the requirements, what do you need to track?",
        options: ["Traceability between the test cases and the requirements", "Coverage of the risk items by test case", "Traceability between the requirements and the risk items", "Coverage of the requirements by the test cases that have been designed"],
        correct: 0,
        explanation: "In order to show the test execution coverage of the requirements you will need traceability between the requirements and the test cases."
    },
    {
        q: "Which TWO of the following tasks belong MAINLY to a testing role? Select TWO options.",
        options: ["Configure test environments", "Maintain the product backlog", "Design solutions to new requirements", "Create the test plan", "Analyze the test basis"],
        correct: 4,
        explanation: "This is done by the testers since its technical task done as part of a test analysis."
    },
    {
        q: "Which of the following is MOST likely to describe a task performed by someone in a test management role?",
        options: ["Evaluate test basis and test object", "Define test environment requirements", "Assess testability of test object", "Create test completion report"],
        correct: 3,
        explanation: "The test management role primarily involves activities related to test planning, test monitoring and test control, and test completion. Thus, creating the test completion report, which is the prime output from the test completion, is likely to be a task performed by the test management role."
    },
    {
        q: "Which of the following statements about the different test roles is MOST likely to be CORRECT?",
        options: ["In Agile software development, the test management role is the primary responsibility of the team, while the testing role is primarily the responsibility of a single individual from outside the team", "The testing role is primarily responsible for test monitoring and test control, while the test management role is primarily responsible for test planning and test completion", "In Agile software development, test management activities that span multiple teams are handled by a test manager outside the team, while some test management tasks are handled by the team itself", "The test management role is primarily responsible for test analysis and test design, while the testing role is primarily responsible for test planning and test execution"],
        correct: 2,
        explanation: "In Agile software development, some of the test management tasks may be handled by the Agile team itself. However, for test activities that span multiple teams within an organization, test managers outside the development team may perform these tasks."
    },
    {
        q: "Who normally writes the test plan for a project?",
        options: ["The project manager", "The product owner", "The test manager", "The tester"],
        correct: 2,
        explanation: "Writing and updating the test plan is normally the responsibility of the test manager."
    },
    {
        q: "Which of the following are the MOST important skills of a tester? i. Having domain knowledge ii. Creating a product vision iii. Being a good team player iv. Planning and organizing the work of the team v. Critical thinking",
        options: ["ii and iv are important", "i, iii and v are important", "i, ii and v are important", "iii and iv are important"],
        correct: 1,
        explanation: "Having domain knowledge is an important tester skill. Being a good team player is an important tester skill. Critical thinking is one of the most important skills of testers."
    },
    {
        q: "Which of the following is MOST likely to be an example of a tester using a generic skill when testing?",
        options: ["The tester's deep knowledge of a variety of computer games enabled them to get on well with one of the developers who was also into gaming", "The tester was a former pilot and was able to understand the acceptance criteria for the helicopter control system", "The tester previously worked as a programmer and used their skills in this area to better communicate with the business analysts", "The tester was very careful not to make mistakes when they methodically generated test cases prior to starting their exploratory testing session"],
        correct: 1,
        explanation: "Domain knowledge that can be used to understand and communicate with end-users and business representatives is one of the generic skills required for testers. A tester's experience as a pilot would make them better able to appreciate the acceptance criteria for the helicopter control system."
    },
    {
        q: "You are working with a junior tester who has been given a user story to test. They have created only one positive path test for the story, including negative scenarios. Which of the following generic skills do they appear to be lacking?",
        options: ["Communication", "Curiosity", "Confidence", "Creativity"],
        correct: 3,
        explanation: "It appears they are lacking in creativity in designing test scenarios."
    },
    {
        q: "How is the whole team approach present in the interactions between testers and business representatives?",
        options: ["Business representatives decide on test automation approaches", "Testers help business representatives to define test strategy", "Business representatives are not part of the whole team approach", "Testers help business representatives to create suitable acceptance tests"],
        correct: 3,
        explanation: "Testers work closely with business representatives to ensure that the desired quality levels are achieved. This includes supporting and collaborating with them to help them create suitable acceptance tests."
    },
    {
        q: "Which of the following is an advantage of the whole team approach?",
        options: ["Improved communication between team members", "Decreased individual accountability for quality", "Faster deployment of deliverables to the end users", "Reduced collaboration with external business users"],
        correct: 0,
        explanation: "The whole team approach promotes robust communication and collaboration between the team members."
    },
    {
        q: "Which of the following is an advantage of the whole-team approach?",
        options: ["Teams with no testers", "Improved team dynamics", "Larger team sizes", "Specialized team members"],
        correct: 1,
        explanation: "By leveraging the diverse skill sets of each team member most effectively, the whole-team approach fosters superior team dynamics, promotes robust communication and collaboration, and generates a synergistic effect that benefits the entire project."
    },
    {
        q: "Which of the following is an advantage of the whole-team approach?",
        options: ["It allows team members to take on any role at any time", "It only needs a single team to support the complete development project", "It embeds testers as representatives of the same team", "It generates a team synergy that benefits the entire project"],
        correct: 3,
        explanation: "By leveraging the diverse skill sets of each team member most effectively, the whole-team approach fosters superior team dynamics, promotes robust communication and collaboration, and generates a synergistic effect that benefits the entire project."
    },
    {
        q: "In some Agile teams, people are encouraged to use their skills to help the team, regardless of their role. This could mean that testers help the developers write code and developers help testers complete all the testing. What is this approach called?",
        options: ["Team Aid", "Whole Team", "Skills First", "First Aid"],
        correct: 1,
        explanation: "This is an example of the Whole Team approach where the team members leverage their skills, regardless of role, to collaborate, to advance the process."
    },
    {
        q: "You are working in an Agile team where the testers are being accused of slowing down the process because the time system testing is taking. Which of the following would be an approach that would best support the developers helping with the testing tasks rather than waiting for the testers to complete all the testing.",
        options: ["Whole Team", "Team Split", "Behavior-Driven Development", "Waterfall"],
        correct: 0,
        explanation: "The whole team approach would support the developers helping with the testing tasks rather than waiting for the testers to complete all the testing."
    },
    {
        q: "Which of the following BEST explains a benefit of independence of testing?",
        options: ["The use of an independent test team allows project management to assign responsibility for the quality of the final deliverable to the test team", "If a test team external to the organization can be afforded, then there are distinct benefits in terms of this external team not being so easily swayed by the delivery concerns of project management", "An independent test team can work separately from the developers, need not be distracted by changing project requirements and changes, and can restrict communication with the developers to defect reporting through the defect management system", "When specifications contain ambiguities, assumptions are made on their interpretation, and an independent tester can be useful in questioning those assumptions and subsequent interpretation made by the developer"],
        correct: 3,
        explanation: "When specifications are never perfect, meaning that assumptions will have to be made by the developer. An independent tester is useful in that they can challenge and verify the assumptions and subsequent interpretation made by the developer."
    },
    {
        q: "Given the following benefits and drawbacks of the independence of testing: i. Testers see a different location from the developers ii. Testers question the assumptions programmers make while writing code iii. A confrontational dynamic has been established between testers and developers iv. Developers have convinced themselves that testers are mostly accountable for quality v. Testers have different biases than those held by the developers. Which are MOST likely to be considered benefits?",
        options: ["i, iv", "ii, v", "i, iii, iv", "ii, iii, v"],
        correct: 1,
        explanation: "Testers and developers have varied backgrounds, technical viewpoints, and potential biases, allowing testers to usefully challenge assumptions made by stakeholders during system specification and implementation. This is an advantage."
    },
    {
        q: "Which of the following statements about the independence of testing is CORRECT?",
        options: ["Independent testers will find defects due to their different technical perspective from developers, but their experience will lead to an unhealthy adversarial relationship with the developers", "Developers' familiarity with their own code means they only find a few defects in it, however their shared software background means these defects would also be found by the testers", "Independent testing requires testers who are outside the developer's team and ideally from outside the organization, however it is acceptable that the application domain may change from case to case", "Testers from outside the developer's team are more independent than testers from within the team, but the testers are within the organization are more likely to be blamed for delays than in product release"],
        correct: 0,
        explanation: "The primary benefit of independence of testing is that testers are more likely to identify different types of failures and defects compared to developers, due to their varied backgrounds, technical viewpoints, and potential biases, including cognitive bias."
    },
    {
        q: "What is the biggest problem with a developer testing his own code?",
        options: ["Developers are not good testers", "Developers are not quality focused", "Developers are not objective about their own code", "Developers do not have time to test their own code"],
        correct: 2,
        explanation: "The developer makes a mistake/error which causes a defect/fault/bug which may cause a failure when the code is dynamically tested or executed."
    }
];

