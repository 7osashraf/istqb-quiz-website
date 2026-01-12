const questions = [
    {
        q: "The following is a list of the work products produced in the SDLC: i. Business requirements ii. Schedule iii. Test budget iv. Third-party executable code v. User stories and their acceptance criteria. Which of them can be reviewed?",
        options: [
            "i and iv can be reviewed",
            "i, ii, iii and iv can be reviewed",
            "i, ii, iii, and v can be reviewed",
            "iii, iv, v can be reviewed"
        ],
        correct: 2,
        explanation: "Only third-party executable code cannot be reviewed. Hence the correct answer is c."
    },
    {
        q: "Which of the following CANNOT be examined by static testing?",
        options: [
            "Contract",
            "Test plan",
            "Encrypted code",
            "Test charter"
        ],
        correct: 2,
        explanation: "Most work products can be examined using some form of static testing; however it is not suitable for work products that are too complex for human interpretation and should not be analyzed by tools, and encrypted code is too complex for human interpretation and so properly encrypted it will not be analyzable by most tools"
    },
    {
        q: "Which of the following techniques is a form of static testing?",
        options: [
            "Error guessing",
            "Automated regression testing",
            "Providing inputs and examining the resulting outputs",
            "Code review"
        ],
        correct: 3,
        explanation: "D is correct, per syllabus. A, B and C are all forms of dynamic testing."
    },
    {
        q: "Which of the following is NOT a benefit of static testing?",
        options: [
            "Having less expensive defect management due to the ease of detecting defects later in the SDLC",
            "Fixing defects found during static testing is generally much less expensive than fixing defects found during dynamic testing",
            "Finding coding defects that might not have been found by only performing dynamic testing",
            "Detecting gaps and inconsistencies in requirements"
        ],
        correct: 0,
        explanation: "Defect management is not less expensive. Finding and fixing defects later in SDLC is more costly"
    },
    {
        q: "Which of the following statements about the value of static testing is CORRECT?",
        options: [
            "The defect types found by static testing are different from the defect types that can be found by dynamic testing",
            "Dynamic testing can detect the defect types that can be found by static testing plus some additional defect types",
            "Dynamic testing can identify some of the defects that can be found by static testing but not all of them",
            "Static testing can identify the defect types that can be found by dynamic testing as well as some extra defect types"
        ],
        correct: 2,
        explanation: "Some defect types that can only be detected by static testing, such as unreachable code, design patterns not implemented as desired and defects in non-executable work products."
    },
    {
        q: "Which of the following is a benefit of static analysis?",
        options: [
            "Defects can be identified that might not be caught by dynamic testing",
            "Early defect identification requires less documentation",
            "Early execution of the code provides a gauge of code quality",
            "Tools are not needed because reviews are used instead of executing code"
        ],
        correct: 0,
        explanation: "Static analysis with a static analyzer can be used to find defects such as uninitialized variables that could be difficult to catch with dynamic testing."
    },
    {
        q: "Decide which of the following statements (i-v) are true for static testing. i. Abnormal external behaviors are easier to identify with this testing ii. Discrepancies from a coding standard are easier to find with this testing iii. It identifies failures caused by defects when the software is run iv. Its test objective is to identify defects as early as possible v. Missing coverage for critical security requirements is easier to find and fix",
        options: [
            "i, iv, v are true for static testing",
            "i, iii, iv are true for static testing",
            "ii, iii are true for static testing",
            "ii, iv, v are true for static testing"
        ],
        correct: 3,
        explanation: "This is an example of deviations from standards, which is a typical defect that is easier found with static testing. Its test objective is to identify defects as early as possible is the test objective of both static testing and dynamic testing. This is an example of gaps in the test basis traceability or coverage, which is a typical defect that is easier found with static testing"
    },
    {
        q: "Given the following example defects: i. Two different parts of the design specification disagree due to the complexity of the design ii. A response time is too long and so makes users lose patience iii. A path in the code cannot be reached during execution iv. A variable is declared but never subsequently used in the program v. The amount of memory needed by the program to generate a report is too high. Which of the following BEST identifies example defects that could be found by static testing (rather than dynamic testing)?",
        options: [
            "ii, v",
            "iii, v",
            "i, ii, iv",
            "i, iii, iv"
        ],
        correct: 3,
        explanation: "The correct match for static testing is i, iii, and iv"
    },
    {
        q: "Which of the following is an example of a defect that can be found by static testing but NOT by dynamic testing?",
        options: [
            "Lack of usability provided through the user interface",
            "Code writing path that reaches it",
            "Poor response times for most of the expected users",
            "Required features that are not implemented in the code"
        ],
        correct: 1,
        explanation: "A code review can detect code that cannot be reached by any path, however dynamic tests can only exercise reachable code and cannot determine that code cannot be reached without running every possible combination of inputs and input states, which is impractical for real code"
    },
    {
        q: "What is the main difference between static and dynamic testing?",
        options: [
            "Static testing is performed by developers; dynamic testing is performed by testers",
            "Manual test cases are used for dynamic testing; automated tests are used for static testing",
            "Static testing must be executed before performing dynamic testing",
            "Dynamic testing requires executing the software; the software is not executed during static testing"
        ],
        correct: 3,
        explanation: "Dynamic testing is done while the software is actually running whereas static testing depends on examining the software while it is not running."
    },
    {
        q: "Which of the following is a benefit of early and frequent stakeholder feedback?",
        options: [
            "Managers are aware of which developers are less productive",
            "It allows project managers to prioritize their stakeholder interactions",
            "It facilitates early communication of potential quality issues",
            "End users better understand why the delivery of the work product is delayed"
        ],
        correct: 2,
        explanation: "Obtaining feedback from stakeholders early and often in the software development process can be highly beneficial as it facilitates early communication of potential quality issues, can prevent misunderstandings about requirements, and ensures that any changes in stakeholder requirements are understood and implemented sooner"
    },
    {
        q: "Which of the following is a benefit of early and frequent stakeholder feedback?",
        options: [
            "Changes to requirements are understood and implemented earlier",
            "It ensures business stakeholders understand user requirements",
            "It allows product owners to change their requirements as often as they want",
            "End users are told which requirements will not be implemented prior to release"
        ],
        correct: 0,
        explanation: "Obtaining feedback from stakeholders early and often in the software development process can be highly beneficial. It facilitates early communication of potential quality issues, can prevent misunderstandings about requirements, and ensures that any changes in stakeholder requirements are understood and implemented sooner"
    },
    {
        q: "Which of the following is a benefit of early and frequent feedback?",
        options: [
            "It improves the test process for future projects",
            "It forces customers to prioritize their requirements based on agreed risks",
            "It provides a measure for the quality of changes",
            "It helps avoid requirements misunderstandings"
        ],
        correct: 3,
        explanation: "Early and frequent feedback allows for the early communication of potential quality problems"
    },
    {
        q: "What is the primary reason to get early and frequent feedback from stakeholders regarding a product being developed?",
        options: [
            "To make them feel involved",
            "To ensure that their vision for the product will be realized",
            "To create more meetings",
            "To use the stakeholders as testers"
        ],
        correct: 1,
        explanation: "By getting their feedback, the team can ensure that what they are building is what the stakeholders want."
    },
    {
        q: "Which of the following statements about formal reviews is TRUE?",
        options: [
            "Some reviews do not require more than one role",
            "The review process has several activities",
            "Documentation to be reviewed is not distributed before the review meeting, with the exception of the work product for specific review types",
            "Defects found during the review are not reported since they are not found by dynamic testing"
        ],
        correct: 1,
        explanation: "There are several activities during the formal review process"
    },
    {
        q: "Given the following descriptions of review activities: 1. Detected anomalies are deliberated upon, and determinations are reached regarding their status, ownership, and any further steps needed 2. Defects are recorded, and any needed updates are addressed prior to the acceptance of the work product 3. Reviewers employ techniques to come up with suggestions and questions about the work product and to spot anomalies 4. The objective of the review and its schedule are established to ensure a focused and efficient review 5. Participants are provided with access to the item being reviewed. Which of the following is the CORRECT sequence in the review process of the activities that are listed?",
        options: [
            "4 - 3 - 5 - 2 - 1",
            "4 - 5 - 3 - 1 - 2",
            "5 - 4 - 1 - 3 - 2",
            "5 - 4 - 3 - 2 - 1"
        ],
        correct: 1,
        explanation: "The correct sequence of activities is: 4 - 5 - 3 - 1 - 2"
    },
    {
        q: "For a formal review, at what point in the process are the exit criteria defined?",
        options: [
            "Planning",
            "Review initiation",
            "Individual review",
            "Fixing and reporting"
        ],
        correct: 0,
        explanation: "The entry and exit criteria should be defined during the planning step in the review process. These should be evaluated at each step to ensure the product is ready to move to the next step."
    },
    {
        q: "Which of the following BEST matches the task descriptions and activities? Given the following task descriptions: 1. The quality characteristics to be evaluated and the exit criteria are selected 2. Everyone has access to the work product 3. Anomalies are identified in the work product 4. Anomalies are discussed. And the following review activities: Individual review, Review initiation, Planning, Communication and analysis",
        options: [
            "1B, 2C, 3D, 4A",
            "1B, 2D, 3C, 4A",
            "1C, 2A, 3B, 4D",
            "1C, 2B, 3A, 4D"
        ],
        correct: 3,
        explanation: "The correct match is: 1C, 2B, 3A, 4D"
    },
    {
        q: "What task may management take on during a formal review?",
        options: [
            "Taking overall responsibility for the review",
            "Deciding what is to be reviewed",
            "Ensuring the smooth running of review meetings, and mediating, if necessary",
            "Recording review information such as review decisions"
        ],
        correct: 1,
        explanation: "This is the task of the management in a formal review"
    },
    {
        q: "Which participant in the review process is responsible for ensuring that the review meetings run effectively and that everyone at the meetings can voice their opinions freely?",
        options: [
            "Manager",
            "Moderator",
            "Chairperson",
            "Review Leader"
        ],
        correct: 1,
        explanation: "The moderator (or facilitator) is responsible for ensuring that the review meetings run effectively, including managing time, mediating discussions, and creating a safe environment where everyone can voice their opinions freely"
    },
    {
        q: "Which of the following BEST matches the roles and responsibilities? Given the following roles in reviews: 1. Scribe 2. Review leader 3. Facilitator 4. Manager. And the following responsibilities in reviews: a. Ensures the effective running of review meetings and the setting up a safe review environment b. Records review information, such as decisions and new anomalies found during the review meeting c. Decides what is to be reviewed and provides resources, such as staff and time for the review d. Takes overall responsibility for the review such as organizing when and where the review will take place",
        options: [
            "1A, 2B, 3D, 4C",
            "1A, 2C, 3B, 4D",
            "1B, 2D, 3A, 4C",
            "1B, 2D, 3C, 4A"
        ],
        correct: 2,
        explanation: "The correct match is: 1B, 2D, 3A, 4C"
    },
    {
        q: "In a formal review, which role is normally responsible for documenting all the open issues?",
        options: [
            "The facilitator",
            "The author",
            "The scribe",
            "The manager"
        ],
        correct: 2,
        explanation: "The scribe is normally responsible for documenting all issues, problems and open points. The author may take notes as well, but that is not their primary role."
    },
    {
        q: "The reviews being used in your organization have the following attributes: There is the role of a scribe, The main purpose is to evaluate quality, The meeting is led by the author of the work product, There is individual preparation, A review report is produced. Which of the following review types is MOST likely being used?",
        options: [
            "Informal review",
            "Walkthrough",
            "Technical review",
            "Inspection"
        ],
        correct: 1,
        explanation: "In a walkthrough, the author normally leads the review session."
    },
    {
        q: "If a review session is led by the author of the work product, what type of review is it?",
        options: [
            "Ad hoc",
            "Walkthrough",
            "Inspection",
            "Audit"
        ],
        correct: 1,
        explanation: "In a walkthrough, the author normally leads the review session."
    },
    {
        q: "Which of the following BEST matches the review types and the descriptions? Given the following review types: 1. Technical review 2. Informal review 3. Inspection 4. Walkthrough. And the following descriptions: a. Includes objectives such as gaining consensus, generating new ideas, and motivating authors to improve b. Includes objectives such as educating reviewers, gaining consensus, generating new ideas and detecting potential defects c. The main objective is detecting potential defects and it requires metrics collection to support process improvement d. The main objective is detecting potential defects and it generates no formal documented output",
        options: [
            "1A, 2B, 3C, 4D",
            "1A, 2D, 3C, 4B",
            "1B, 2C, 3D, 4A",
            "1C, 2D, 3A, 4B"
        ],
        correct: 1,
        explanation: "Includes objectives such as gaining consensus, generating new ideas, and motivating authors to improve"
    },
    {
        q: "Which of these statements is NOT a factor that contributes to successful reviews?",
        options: [
            "Participants should dedicate adequate time for the review",
            "Splitting large work products into small parts to make the required effort less intense",
            "Participants should avoid behaviors that might indicate boredom, exasperation, or hostility to other participants",
            "Failures found should be acknowledged, appreciated, and handled objectively"
        ],
        correct: 3,
        explanation: "Durin reviews one can find defects, not failures"
    },
    {
        q: "Which of the following is a factor that contributes to a successful review?",
        options: [
            "Ensure management participate as reviewers",
            "Split large work products into smaller parts",
            "Set reviewer evaluation as an objective",
            "Plan to cover one document per review"
        ],
        correct: 1,
        explanation: "To ensure successful reviews, it is important to break up the work product into parts that are small enough to be reviewed in a reasonable timescale to prevent reviewers from losing focus during individual reviews or review meetings"
    },
    {
        q: "You are frequently asked to participate in reviews of requirements. Unfortunately, you usually receive the document to be reviewed the night before the review meeting will be held. This is resulting in your not doing a thorough review and having to work significant overtime to get the review done. What review success factor is missing from this process?",
        options: [
            "Management support for the overall review process",
            "Reviewing only small chunks at a time",
            "Training for the proper performance in the meetings",
            "Allowing adequate time to conduct the review"
        ],
        correct: 3,
        explanation: "The reviewers are not being given adequate time to conduct the review."
    }
];
