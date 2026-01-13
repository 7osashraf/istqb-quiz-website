const questions = [
    {
        q: "Which of the following is a characteristic of experience-based test techniques?",
        options: [
            "Test cases are created based on detailed design information",
            "Items tested within the interface test section are used to measure coverage",
            "The techniques heavily rely on the tester's knowledge of the software and the business domain",
            "The test cases are used to identify deviations from the requirements"
        ],
        correct: 2,
        explanation: "This is a common characteristic of experience-based test techniques. This knowledge and experience include expected use of the software, its environment, likely defects, and the distribution of those defects is used to define tests"
    },
    {
        q: "You perform system testing of an e-commerce web application and are provided with the following requirement: REQ-017.7 If the cost of purchases exceeds $100, the customer gets a 5% discount on subsequent purchases. Otherwise, the customer does not receive a discount. Which test techniques will be MOST helpful in designing test cases based on this requirement?",
        options: [
            "White-box test techniques",
            "Black-box test techniques",
            "Experience-based test techniques",
            "Risk-based test techniques"
        ],
        correct: 1,
        explanation: "The document is a requirement that specifies the desired behavior of the test object. Therefore, the most suitable test techniques in this case are black-box test techniques (e.g., Boundary Value Analysis or Decision Table Testing)"
    },
    {
        q: "If test cases are derived from looking at the code, what type of test design technique is being used?",
        options: [
            "Black-box",
            "White-box",
            "Specification-based",
            "Behavior-based"
        ],
        correct: 1,
        explanation: "A, B and D are all black-box and use the specifications or requirements for the test design."
    },
    {
        q: "Which of the following test techniques uses the requirements specifications as a test basis?",
        options: [
            "Structure-based",
            "Black-box",
            "White-box",
            "Exploratory"
        ],
        correct: 1,
        explanation: "Black-box testing is based off the requirements documents."
    },
    {
        q: "What is the MAIN difference between black-box test techniques and experience-based test techniques?",
        options: [
            "The test object",
            "The test level at which the test technique is used",
            "The test basis",
            "The software development lifecycle (SDLC) in which the test technique can be used"
        ],
        correct: 2,
        explanation: "Black-box test techniques (also known as specification-based techniques) are based on an analysis of the specified behavior of the test object without reference to its internal structure. So, the test basis is usually a specification. Experience-based test techniques effectively use the knowledge and experience of testers for the design and implementation of test cases. This means that the test basis, where designing tests, may not use the specification at all"
    },
    {
        q: "Which of the following statements BEST describes the difference between decision table testing and branch testing?",
        options: [
            "In decision table testing, the test cases are derived from the decision statements in the code. In branch testing, the test cases are derived from knowledge of the control flow of the test object",
            "In decision table testing, the test cases are derived from the specification that describes the business logic. In branch testing the test cases are based on anticipation of potential defects in the source code",
            "In decision table testing, the test cases are derived from knowledge of the control flow of the test object. In branch testing, test cases are derived from the specification that describes the business logic",
            "In decision table testing, the test cases are independent of how the software is implemented. In branch testing, test cases can be created only after the design or implementation of the code"
        ],
        correct: 3,
        explanation: "Decision table testing is a black-box test technique, so it is based on an analysis of the specified behavior of the test object without reference to its internal structure. Therefore, the test cases are independent of how the software is implemented. Branch testing is a white-box test technique, where test cases are derived based on the source code structure"
    },
    {
        q: "Which of the following test techniques can be used to test a module while relying on the analysis of its code structure?",
        options: [
            "Black-box test techniques",
            "White-box test techniques",
            "Experience-based test techniques",
            "Specification-based techniques"
        ],
        correct: 1,
        explanation: "White-box testing (also called structural testing) relies on analyzing the internal code structure of a module to design test cases."
    },
    {
        q: "Which of the following statements is CORRECT about white-box testing?",
        options: [
            "The fundamental strength of white-box technique is detecting the requirements in software specifications",
            "White-box techniques can be used in static testing through the execution of the code",
            "White-box techniques are not considering the behavior of the code",
            "White-box techniques are well suited for testing paths through the code flow graph"
        ],
        correct: 3,
        explanation: "White-box testing focuses on internal code structure, including control flow, paths, and logic. And Code flow graphs (e.g., control flow graphs) are used to visualize paths through code and achieve branch coverage, etc."
    },
    {
        q: "You are testing a simplified apartment search form which has only two search criteria: floor (with three possible options: ground floor; first floor; second or higher floor) and garden type (with three possible options: no garden; small garden; large garden). Only apartments on the ground floor can have gardens. The form has a built-in validation mechanism that will not allow you to use the search criteria which violate this rule. Each test has two input values: floor and garden type. You want to apply equivalence partitioning (EP) to cover every floor and garden type in your tests. What is the minimal number of test cases to achieve 100% EP coverage?",
        options: [
            "3",
            "4",
            "5",
            "6"
        ],
        correct: 1,
        explanation: "We need a total of four test cases: TC1 (ground floor, small garden), TC2 (ground floor, large garden), TC3 (first floor, no garden), TC4 (second or higher floor, no garden)"
    },
    {
        q: "The system for selling cinema tickets calculates the discount type based on the client's birth year (BY) and on the current year (CY) as follows: Let D be the difference between CY and BY, that is, D = CY - BY. Your test suite already contains two test cases: BY = 1990, CY = 2020, expected result: no discount; BY = 2030, CY = 2029, expected result: print the error message. Which of the following test data sets should be added to achieve full valid equivalence partitioning coverage for the discount type?",
        options: [
            "BY = 2001, CY = 2065",
            "BY = 1900, CY = 1965",
            "BY = 2011, CY = 2029",
            "BY = 2000, CY = 2000"
        ],
        correct: 3,
        explanation: "CY - BY = 0, so these inputs correspond to a partition that is not yet covered (student discount)"
    },
    {
        q: "You are testing a PIN validator, which accepts valid PINs and rejects invalid PINs. A PIN is a sequence of digits. A PIN is valid if it consists of four digits, which are not all the same digit. You have identified the following valid equivalence partitions: Variable: PIN code length - The partition 'length correct' - four-digit PINs, The partition 'length incorrect' - PINs with length other than 4. Variable: Number of different digits - The partition 'number of different digits correct' - PINs with at least two different digits, The partition 'number of different digits incorrect' - PINs with all digits being the same. Which of the following is the BEST set of input test data to cover the identified equivalence partitions?",
        options: [
            "12, 1111, 1234, 12345",
            "1, 123, 1111, 1234",
            "11, 12, 1111, 12345",
            "123, 1222, 12345"
        ],
        correct: 0,
        explanation: "Value '12' covers 'length incorrect, too few digits'. Value '1111' covers 'length correct' and 'number of different digits incorrect'. Value '1234' again covers 'length correct' and 'number of different digits correct'. Value '12345' covers 'length incorrect, too many digits'"
    },
    {
        q: "You are testing a machine that scores exam papers and assigns grades. Based on the score achieved the grades are as follows: 1-49 = F, 50-59 = D-, 60-69 = D, 70-79 = C, 80-89 = B, 90-100=A. If you apply equivalence partitioning, how many test cases will you need to achieve minimum test coverage?",
        options: [
            "6",
            "8",
            "10",
            "12"
        ],
        correct: 0,
        explanation: "You need a test for the invalid too low (0 or less), one for each valid partition, and one for invalid too high (> 100). It may not be more than 6 centre if it provides a proper error."
    },
    {
        q: "You are using a banking application that allows a customer to withdraw 20, 100 or 500 dollars in a single transaction. The values are chosen from a drop-down list and no other values may be entered. How many equivalence partitions need to be tested to achieve 100% equivalence partition coverage?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        correct: 2,
        explanation: "The values to be tested are 20, 100, 500 and no selection."
    },
    {
        q: "Customers of the TestWash car wash chain have cards with a record of the number of washes they have bought so far. The initial value is 0. After entering the car wash, the system increases the number on the card by one. This value represents the number of the current wash. Based on this number the system decides what discount the customer is entitled to. For every tenth wash the system gives a 10% discount, and for every twentieth wash, the system gives a further 40% discount (i.e., a 50% discount in total). Which of the following sets of input data (understood as numbers of the current wash) achieves the highest equivalence partition coverage?",
        options: [
            "19, 20, 30",
            "11, 12, 20",
            "1, 10, 50",
            "10, 29, 30, 31"
        ],
        correct: 0,
        explanation: "19 covers the 'no discount' partition, 20 covers the '50% discount' partition, and 30 covers the '10% discount' partition. These three values cover all three of the valid equivalence partitions"
    },
    {
        q: "You are testing a temperature control system for a horticultural cold storage facility. The system receives the temperature (in full degrees Celsius) as the input. If the temperature is between 0 and 2 degrees inclusive, the system displays the message 'temperature OK'. For lower temperatures, the system displays the message 'temperature too low' and for higher temperatures it displays the message 'temperature too high'. Using two-value boundary value analysis, which of the following sets of test inputs provides the highest level of boundary value coverage?",
        options: [
            "-1, 3",
            "0, 2",
            "-1, 0, 2, 3",
            "-2, 0, 2, 4"
        ],
        correct: 2,
        explanation: "The correct option is: -1, 0, 2, 3"
    },
    {
        q: "You are testing a system that calculates the final course grade for a given student. The final grade is assigned based on the final result, according to the following rules: 0-50 points: failed, 51-60 points: fair, 61-70 points: satisfactory, 71-80 points: good, 81-90 points: very good, 91-100 points: excellent. You have prepared the following set of test cases [table with TC1-TC6]. What is the 2-value Boundary Value Analysis (BVA) coverage for the final result that is achieved with the existing test cases?",
        options: [
            "50%",
            "60%",
            "33.3%",
            "100%"
        ],
        correct: 0,
        explanation: "There are 12 boundary values for the final result values: 0, 50, 51, 60, 61, 70, 71, 80, 81, 90, 91, and 100. The test cases cover six of them (TC1 - 91, TC2 - 50, TC3 - 81, TC4 - 60, TC5 - 70 and TC7 - 51). Therefore, the test cases cover 6/12 = 50%"
    },
    {
        q: "You are testing a form that verifies the correctness of the length of the password given as input. The form accepts a password with the correct length and rejects a password that is too short or too long. The password length is correct if it has between 6 and 12 characters inclusive. Otherwise, it is considered incorrect. At first, the form is empty (password length = 0). You apply boundary value analysis to the 'password length' variable. Your set of test cases achieves 100% 2-value boundary value coverage. The team decided that due to the high risk of this component, test cases should be added to ensure 100% 3-value boundary value coverage. Which additional password lengths should be tested to achieve this?",
        options: [
            "4, 5, 13, 14",
            "7, 11",
            "1, 5, 13",
            "1, 4, 7, 11, 14"
        ],
        correct: 3,
        explanation: "The additional lengths that need to be covered to move from 2-value to 3-value are: 1, 4, 7, 11 and 14."
    },
    {
        q: "You are designing test cases based on the following decision table [decision table with R1-R7, C1-C3, Categories A-D]. So far you have designed the following test cases: TC1: 19-year-old, unregistered man with no experience; expected result: category A. TC2: 65-year-old, unregistered woman with 5 years of experience; expected result: category B. TC3: 66-year-old, registered man with no experience; expected result: category C. TC4: 65-year-old, registered woman with 4 years of experience; expected result: category D. Which of the following test cases, when added to the existing set of test cases, will increase the decision table coverage?",
        options: [
            "66-year-old, unregistered man with no experience; expected result: category B",
            "55-year-old, unregistered woman with 2 years of experience; expected result: category A",
            "19-year-old, registered woman with 5 years of experience; expected result: category D",
            "No additional test case can increase the already achieved decision table coverage"
        ],
        correct: 2,
        explanation: "The conditions '66-year-old', 'unregistered' and 'no experience' match rule R6, which is not covered by the existing test cases, so after adding this test case, the decision table coverage will increase"
    },
    {
        q: "You have been given the following conditions and results from those condition combinations. Given this information, using the decision table technique, what is the minimum number of test cases you would need to test these conditions? [table with Valid cash, Valid credit card, Valid debit card, Valid pin, Bank accepts, Valid Selection, Item in Stock]",
        options: [
            "7",
            "13",
            "15",
            "18"
        ],
        correct: 2,
        explanation: "See table below. [detailed decision table shown]"
    },
    {
        q: "A person gets a 20% discount if he bought laptop and high level mobile and, 10% discount if he bought laptop and medium level mobile, doesn't get a discount if he bought a laptop and low level mobile. And there's no discount if he bought only a mobile or a laptop individually. We want to create a test case for each rule, how many test cases do we need?",
        options: [
            "3",
            "6",
            "8",
            "12"
        ],
        correct: 1,
        explanation: "B is correct [table shown with TC1-TC6 covering all combinations]"
    },
    {
        q: "You test a system whose lifecycle is modeled by the state transition diagram shown below. The system starts in the INIT state and ends its operation in the OFF state. What is the MINIMAL number of test cases to achieve valid transitions coverage?",
        options: [
            "4",
            "2",
            "7",
            "3"
        ],
        correct: 3,
        explanation: "Neither can both 'done' transitions. This means we need at least three test cases to achieve transition coverage. For example: TC1: test, done TC2: run, error, done TC3: run, pause, resume, pause, done"
    },
    {
        q: "You are applying state transition testing to the hotel room reservation system modeled by the following state transition table, with 4 states and 5 different events [state transition table shown]. Assuming all test cases start in the 'Requesting' state, which of the following test cases, represented as sequences of events, achieves the highest valid transitions coverage?",
        options: [
            "NotAvailable, Available, ChangeRoom, NotAvailable, Cancel",
            "Available, ChangeRoom, NotAvailable, Available, Pay",
            "Available, ChangeRoom, Available, ChangeRoom, NotAvailable",
            "NotAvailable, Cancel, ChangeRoom, Available, Pay"
        ],
        correct: 1,
        explanation: "This sequence of five events covers 5 different transitions (the first 'Available' event corresponds to a transition between S1 and S2, and the second 'Available' event corresponds to a transition between S3 and S2, so two different transitions are covered). This test case covers 5 out of 7 valid transitions and achieves the highest valid transitions coverage"
    },
    {
        q: "You are designing test cases based on the following state transition diagram [state transition diagram shown with START, REQUESTING, WAITING LIST, CONFIRMED, END states]. What is the MINIMUM number of test cases required to achieve 100% valid transitions coverage?",
        options: [
            "3",
            "2",
            "5",
            "6"
        ],
        correct: 0,
        explanation: "The following three transitions: 'REQUESTING -> CONFIRMED', 'WAITING LIST -> CONFIRMED', 'WAITING LIST -> END' cannot appear in the same test case. All the other transitions can appear in combination with one or more of these three transitions, so we need a minimum of three test cases. TC1: START (Room request) → REQUESTING (Available) → CONFIRMED (Pay) → END. TC2: START (Room request) → REQUESTING (Not available) → WAITING LIST (Available) → CONFIRMED (Pay) → END. TC3: START (Room request) → REQUESTING (Not available) → WAITING LIST (Cancel) → END"
    },
    {
        q: "The following decision table contains five rules for determining the risk of atherosclerosis [decision table with cholesterol/blood pressure rules]. You designed the test cases with the following input data: TC1: Cholesterol = 125 mg/dl, Blood pressure = 141 mm Hg. TC2: Cholesterol = 200 mg/dl, Blood pressure = 201 mm Hg. TC3: Cholesterol = 124 mg/dl, Blood pressure = 201 mm Hg. TC4: Cholesterol = 109 mg/dl, Blood pressure = 200 mm Hg. TC5: Cholesterol = 201 mg/dl, Blood pressure = 140 mm Hg. What is the decision table coverage achieved by these test cases?",
        options: [
            "40%",
            "60%",
            "80%",
            "100%"
        ],
        correct: 1,
        explanation: "There are five columns in the decision table. Each test case covers one of them. TC1 and TC2 both cover Rule 4. TC3 and TC4 both cover Rule 2. TC5 covers Rule 5. So, these five test cases cover three out of five columns, achieving a coverage of (3/5)*100% = 60%."
    },
    {
        q: "You are working on a project to develop a system to analyze driving test results. You have been asked to design test cases based on the following decision table [decision table for driving license]. What test data will show that there are contradictory rules in the decision table?",
        options: [
            "C1 = T, C2 = T, C3= F",
            "C1 = T, C2 = F, C3= T",
            "C1 = T, C2 = T, C3 = T and C1 = F, C2 = T, C3=T",
            "C1 = F, C2 = F, C3 = F"
        ],
        correct: 3,
        explanation: "The combination (F, F, F) matches both R2 and R3, but R2 and R3 have different actions, so this shows a contradiction between R2 and R3."
    },
    {
        q: "A developer was asked to implement the following business rule: INPUT: value (integer number). IF (value ≤ 100 OR value ≥ 200) THEN write 'value incorrect' ELSE write 'value OK'. You design the test cases using 2-value boundary value analysis. Which of the following sets of test inputs achieves the greatest coverage?",
        options: [
            "100, 150, 200, 201",
            "99, 100, 200, 201",
            "98, 99, 100, 101",
            "101, 150, 199, 200"
        ],
        correct: 3,
        explanation: "101, 199 and 200 are valid coverage items for 2-value BVA, so we achieve 75% coverage"
    },
    {
        q: "You are testing a scale system that determines shipping rates for a regional web-based auto parts distributor. Due to regulations, shipments cannot exceed 100 lbs. You want to include boundary value analysis as part of your black-box test design. How many weight values will you need to evaluate to achieve 100% two-value boundary value analysis? [table shown with weight ranges and costs]",
        options: [
            "4",
            "8",
            "10",
            "12"
        ],
        correct: 1,
        explanation: "2 per valid weight range plus one for a negative weight and one for a weight exceeding 100 lbs (-1, 0, 10, 11, 25, 26, 50, 51, 100, 101)."
    },
    {
        q: "You have been given the following requirement: A user must log in to the system with a valid username and password. If they fail to enter the correct combination three times, they will receive an error and will have to wait 10 minutes before trying again. The test terminates when the user successfully logs in. How many test cases are needed to provide 100% state transition coverage?",
        options: ["1", "2", "4", "5"],
        correct: 0,
        explanation: "Per the diagram below, only one test is needed: Login, Fail, Fail, Fail =3, Wait, Login, Home. If you were required to exit after the Wait, a second test would be required but the question doesn't indicate that an exit is required."
    },
    {
        q: "You are testing an e-commerce transaction that has the following states and transitions: 1. Login (invalid) > Login 2. Login > Search 3. Search > Search 4. Search > Shopping Cart 5. Shopping Cart > Search 6. Shopping Cart > Checkout 7. Checkout > Search 8. Checkout > Logout. For a state transition diagram, how many transitions should be shown?",
        options: ["4", "6", "8", "16"],
        correct: 2,
        explanation: "There are 8 transitions that should be shown in the state transition diagram as explained in the question."
    },
    {
        q: "Your test suite achieved 100% statement coverage. What is the consequence of this fact?",
        options: [
            "Each instruction in the code that contains a defect has been executed at least once",
            "Any test suite containing more test cases than your test suite will also achieve 100% statement coverage",
            "Each path in the code has been executed at least once",
            "Every combination of input values has been tested at least once"
        ],
        correct: 0,
        explanation: "Since 100% statement coverage is achieved, every statement, including the ones with defects, must have been executed and evaluated at least once"
    },
    {
        q: "Your test suite S for a program P achieves 100% statement coverage. It consists of three test cases, each of which achieves 50% statement coverage. Which of the following statements is CORRECT?",
        options: [
            "Executing S will cause all possible failures in P",
            "S achieves 100% branch coverage for P",
            "Every executable statement in P containing a defect has been run at least once during the execution of S",
            "After removing one test case from S, the remaining two test cases will still achieve 100% statement coverage"
        ],
        correct: 2,
        explanation: "100% statement coverage means that each executable statement was executed at least once"
    },
    {
        q: "You run two test cases, T1 and T2, on the same code. Test T1 achieved 40% statement coverage and test T2 achieved 65% statement coverage. Which of the following sentences must be necessarily true?",
        options: [
            "The test suite composed of tests T1 and T2 achieves 105% statement coverage",
            "There exists at least one statement that must have been executed by both T1 and T2",
            "At least 5% Of the statements in the code under test are non-executable",
            "The test suite composed of tests T1 and T2 achieves full branch coverage"
        ],
        correct: 1,
        explanation: "If the statements executed by T1 and T2 were disjoint, the coverage of the test suite {T1, T2} would be 105%, which is impossible. Therefore, at least 5% of executable statements must have been executed by both T1 and T2"
    },
    {
        q: "How is statement coverage determined?",
        options: [
            "Number of test decision points divided by the number of test cases",
            "Number of branches tested divided by the total number of executable statements",
            "Number of possible test case outcomes divided by the total number of function points",
            "Number of executable statements tested divided by the total number of executable statements"
        ],
        correct: 3,
        explanation: "D is correct, per syllabus as each tested statement is considered to be exercised."
    },
    {
        q: "Consider a piece whose lifecycle is modeled by the state transition diagram shown below. It starts in ES state and ends its operation in ES state. Which of the following is the MINIMAL number of test cases needed to achieve 100% states coverage?",
        options: ["1 test case", "2 test case", "3 test case", "4 test case"],
        correct: 0,
        explanation: "a) is correct"
    },
    {
        q: "Which of the following statements about branch testing is CORRECT?",
        options: [
            "If a program includes only unconditional branches, then 100% branch coverage can be achieved without executing any test cases",
            "If the test cases exercise all unconditional branches in the code, then 100% branch coverage is achieved",
            "If 100% statement coverage is achieved, then 100% branch coverage is also achieved",
            "If 100% branch coverage is achieved, then all decision outcomes in each decision statement in the code are exercised"
        ],
        correct: 3,
        explanation: "Each decision outcome corresponds to a conditional branch, so 100% branch coverage implies 100% coverage of the decision outcomes"
    },
    {
        q: "You want to apply branch testing to the code represented by the following control flow graph. How many coverage items do you need to test?",
        options: ["2", "6", "8", "7"],
        correct: 2,
        explanation: "In branch testing the coverage items are branches, which are represented by the edges of a control flow graph. There are 8 edges in the control flow graph."
    },
    {
        q: "If you are testing a module of code, how do you determine the level of branch coverage you have achieved?",
        options: [
            "By taking the number of branches you have tested and dividing that by the total number of executable statements in the module",
            "By taking the number of branches you have tested and dividing that by the total number of branches in the module",
            "By taking the number of branches you have tested and dividing that by the total lines of code in the module",
            "By taking the number of branches you have tested and dividing that by the total number of test cases you have executed for the module"
        ],
        correct: 1,
        explanation: "Branch coverage looks at the number of branches tested versus the number of branches in the code under test."
    },
    {
        q: "If you have a section of code that has one simple IF statement, how many tests will be needed to achieve 100% branch coverage?",
        options: ["1", "2", "3", "Unknown with this information"],
        correct: 1,
        explanation: "A simple IF statement will be composed of If ... then ... else.... end if. There are two branch outcomes, one for the result of the IF being true and one for it being false. Since 100% branch coverage requires at least one test case for each branch outcome, two tests are needed."
    },
    {
        q: "Which of the following statements is CORRECT about branch testing?",
        options: [
            "A test case achieving 100% statement coverage is also achieving 100% branch coverage",
            "The elements of branch testing is expressed as the number of branches exercised by test cases divided by the total number of executable code statements, expressed as a percentage",
            "If a test case covers only unconditional branches, then 100% branch coverage can be achieved with only one test case",
            "The element in branch testing is the unconditional branches, which means that covering all unconditional branches implies achieving 100% branch coverage"
        ],
        correct: 2,
        explanation: "Branch coverage requires testing all decision outcomes (e.g., true/false in an if statement)."
    },
    {
        q: "Which of the following is Not true for white-box testing?",
        options: [
            "During white-box testing the entire software implementation is considered",
            "White-box coverage metrics can help identify additional tests to increase code coverage",
            "White-box test techniques can be used in static testing",
            "White-box testing can help identify gaps in requirements implementation"
        ],
        correct: 0,
        explanation: "This is the weakness of the white-box test techniques. They are not able to identify the missing implementation, because they are based solely on requirements specification"
    },
    {
        q: "Why does white-box testing facilitate defect detection even when the software specification is vague, outdated or incomplete?",
        options: [
            "Test cases are designed based on the structure of the test object rather than the specification",
            "For each white-box test technique the coverage can be well-defined and easily measured",
            "White-box test techniques are very well designed to detect omissions in the requirements",
            "White-box test techniques can be used in both static testing and dynamic testing"
        ],
        correct: 0,
        explanation: "A fundamental strength that all white-box techniques share is that the entire software implementation is taken into account during testing, which facilitates defect detection even when the software specification is vague, outdated or incomplete. This means that white-box testing can find defects such as an extra feature added to the code (either accidentally or deliberately) that is not supposed to be there, which black-box testing cannot detect"
    },
    {
        q: "How can white-box testing be useful in support of black-box testing?",
        options: [
            "White-box coverage measures can help testers evaluate black-box tests in terms of the code coverage achieved by these black-box tests",
            "White-box coverage analysis can help testers identify unreachable fragments of the source code",
            "Branch testing subsumes black-box test techniques, so achieving full branch coverage guarantees achieving full coverage of any black-box technique",
            "White-box test techniques can provide coverage items for black-box techniques"
        ],
        correct: 0,
        explanation: "Performing only black-box testing does not provide a measure of actual code coverage. White-box coverage measures provide an objective measurement of coverage and provide the necessary information to allow additional tests to be generated to increase this coverage, and subsequently increase confidence in the code"
    },
    {
        q: "You are working on a project with very tight deadlines. The code is being developed but is not yet executable. What type of testing could you apply that would help find defects now?",
        options: ["Black-box", "White-box", "Experience-based", "Factor-based"],
        correct: 1,
        explanation: "You have code that can be structurally reviewed for items such as the proper handling of branching."
    },
    {
        q: "Which of the following BEST describes the concept behind error guessing?",
        options: [
            "Error guessing involves using your knowledge and experience of defects found in the past and typical errors made by developers",
            "Error guessing involves using your personal experience of development and the errors you made as a developer",
            "Error guessing requires you to imagine that you are the user of the test object and to guess errors the user can make interacting with it",
            "Error guessing requires you to rapidly duplicate the development task to identify the sort of errors a developer might make"
        ],
        correct: 0,
        explanation: "The basic concept behind error guessing is that the tester tries to guess what errors may have been made by the developer and what defects may be in the test object based on past experience (and sometimes checklists)"
    },
    {
        q: "Which of the following is NOT anticipated by the tester while applying error guessing?",
        options: [
            "The developer misunderstood the formula in the user story for calculating the interest",
            "The developer wrote 'FA = A*(1+I*N)' instead of 'FA = A*Y(1+I*N)' in the source code",
            "The developer missed the seminar on new compound interest rate legislation",
            "The accuracy of the interest calculated by the system is precise enough"
        ],
        correct: 2,
        explanation: "This is an example of a potential root cause of a defect, which is neither an error, defect nor failure, and difficult for the tester to anticipate"
    },
    {
        q: "Consider the following list: Correct input not accepted, Incorrect input accepted, Wrong output format, Division by zero. What test technique is MOST PROBABLY used by the tester who uses this list when performing testing?",
        options: ["Exploratory testing", "Fault attack", "Checklist-based testing", "Boundary value analysis"],
        correct: 1,
        explanation: "This is a list of possible failures. Fault attacks are a methodical approach to the implementation of error guessing and requires a list of possible errors, defects and failures, and to design tests that will identify defects associated with the errors, expose the defects, or provoke the failures"
    },
    {
        q: "If you are using error guessing for test design, what type of testing are you doing?",
        options: ["Specification-based", "Structure-based", "Experience-based", "Reference-based"],
        correct: 2,
        explanation: "This is an experience-based technique."
    },
    {
        q: "What is error guessing?",
        options: [
            "A testing technique used to guess where a developer is likely to have made a mistake",
            "A technique used for assessing defect metrics",
            "A development technique to verify that all error paths have been coded",
            "A testing technique used to anticipate likely schedule variances due to faults"
        ],
        correct: 0,
        explanation: "Error guessing is a technique used to anticipate where developers are likely to make errors and to create tests to cover those areas."
    },
    {
        q: "Which of the following is a good reason to use experience-based testing?",
        options: [
            "You can find defects that might be missed by more formal techniques",
            "You can test for defects that only experienced users would encounter",
            "You can target the developer's efforts to the areas that users will be more likely to use",
            "It is supported by various tools and can be fully automated"
        ],
        correct: 0,
        explanation: "Experience-based testing is often used to fill in the gaps left by the more formal testing techniques."
    },
    {
        q: "In your project there has been a delay in the release of a brand-new application and test execution started late, but you have very detailed domain knowledge and good analytical skills. The full list of requirements has not yet been shared with the team, but management is asking for some test results to be presented. Which test technique fits BEST in this situation?",
        options: ["Checklist-based testing", "Error guessing", "Exploratory testing", "Branch testing"],
        correct: 2,
        explanation: "Exploratory testing is most useful when there are few known specifications and/or there is a pressing timeline for testing"
    },
    {
        q: "Which of the following is true about exploratory testing?",
        options: [
            "Test cases are designed before the exploratory testing session starts",
            "The tester can perform test execution, but cannot perform test design",
            "Exploratory testing results are good predictors of the number of remaining defects",
            "During exploratory testing the tester may use black-box test techniques"
        ],
        correct: 3,
        explanation: "During exploratory testing, the testers can use any test technique that they find useful"
    },
    {
        q: "Which TWO of the following statements provide the BEST rationale for using exploratory testing? Select TWO options.",
        options: [
            "Testers have not been allocated enough time for test design and test execution",
            "The existing test strategy requires that testers use formal, black-box test techniques",
            "The specification is written in a formal language that can be processed by a tool",
            "Testers are the members of the agile team and have good programming skills",
            "Testers are experienced in the business domain and have good analytical skills"
        ],
        correct: 0,
        explanation: "Exploratory testing is useful when there are few or inadequate specifications or there is significant time pressure on the testing. Exploratory testing is also useful to complement other more formal test techniques. Exploratory testing will be more effective if the tester is experienced, has domain knowledge and has a high degree of essential skills, like analytical skills, curiosity and creativeness."
    },
    {
        q: "When exploratory testing is conducted using time-boxing and test charters, what is it called?",
        options: ["Schedule-based testing", "Session-based testing", "Risk-based testing", "Formal chartering"],
        correct: 1,
        explanation: "This is often called session-based testing and may use session sheets."
    },
    {
        q: "You are testing a mobile application that allows customers to access and manage their bank accounts. You are running a test suite that involves evaluating each screen, and each field on each screen, against a general list of user interface best practices derived from a popular book on the topic that maximizes attractiveness, ease-of-use, and accessibility for such applications. Which of the following options BEST categorizes the test technique you are using?",
        options: ["Black-box", "Exploratory", "Checklist-based", "Error guessing"],
        correct: 2,
        explanation: "The list of user interface best practices is the list of test conditions to be systematically checked"
    },
    {
        q: "Which of the following BEST fits as an element of the checklist used in checklist-based testing?",
        options: [
            "The developer made an error when implementing the code",
            "The achieved statement coverage exceeds 85%",
            "The program works correctly regarding functional and non-functional requirements",
            "The error message is written in language that the user can understand"
        ],
        correct: 3,
        explanation: "This is an example of test condition that can be checked by a human"
    },
    {
        q: "Which of the following BEST describes how using checklist-based testing can result in increased coverage?",
        options: [
            "Checklist items can be defined at a sufficiently low level of detail, so the tester can implement and execute detailed test cases based on these items",
            "Checklists can be automated, so each time an automated test execution covers the checklist items, it results in additional coverage",
            "Each checklist item should be tested separately and independently, so the elements cover different areas of the software",
            "Two testers designing and executing tests based on the same high-level checklist items will typically perform the testing in slightly different ways"
        ],
        correct: 3,
        explanation: "If the checklist items are high-level, some variability in the actual testing is likely to occur, resulting in potentially greater coverage but less repeatability. If two testers follow a checklist of high-level items, each of them may vary how they cover each such item. If they do it differently, one tester may cover areas not covered by the other tester and this will result in increased coverage"
    },
    {
        q: "Which of the following BEST describe the collaborative approach to user story writing?",
        options: [
            "User stories are created by testers and developers and then reviewed by business representatives",
            "User stories are created by business representatives, developers, and testers together",
            "User stories are created by business representatives and verified by developers and testers",
            "User stories are created in a way that they are independent, negotiable, valuable, estimable, small, and testable"
        ],
        correct: 1,
        explanation: "Collaborative user story writing means that all stakeholders create the user stories collaboratively, to obtain the shared vision"
    },
    {
        q: "Which collaborative user story writing practice enables the team to achieve a collective understanding of what needs to be delivered?",
        options: [
            "Planning poker, so that a team can achieve consensus on the effort needed to implement a user story",
            "Reviews, so that a team can detect inconsistencies and contradictions in a user story",
            "Iteration planning, so that user stories with the highest business value for a customer can be prioritized for implementation",
            "Conversation, so that team members can understand how the software will be used and often allows the team to define meaningful acceptance criteria, thus obtaining a shared vision of what should be delivered"
        ],
        correct: 3,
        explanation: "Conversation explains how the software will be used and often allows the team to define meaningful acceptance criteria, thus obtaining a shared vision of what should be delivered"
    },
    {
        q: "When using the 3 C's technique for user story development, what is the element that is created for the Confirmation aspect?",
        options: ["Test Approach", "Acceptance Criteria", "Entry Criteria", "Exit Criteria"],
        correct: 1,
        explanation: "The confirmation aspect of the 3 C's is the acceptance criteria."
    },
    {
        q: "Which of the following BEST describes the way acceptance criteria can be documented?",
        options: [
            "Performing retrospectives to determine the actual needs of the stakeholders regarding a given user story",
            "Using the given/when/then format to describe an example test condition related to a given user story",
            "Using verbal communication to reduce the risk of misunderstanding the acceptance criteria by others",
            "Documenting risks related to a given user story in a test plan to facilitate the risk-based testing of a given user story"
        ],
        correct: 1,
        explanation: "This is the standard way to document acceptance criteria"
    },
    {
        q: "Which of the following provides the BEST example of a scenario-oriented acceptance criterion?",
        options: [
            "The application must allow users to delete their account and all associated data upon request",
            "When a customer adds an item to their cart and proceeds to checkout, they should be prompted to log in or create an account if they haven't already done so",
            "IF (shopping/products(3).Name, product(s())) THEN print FALSE",
            "The website must comply with the ICT Accessibility 508 Standards and ensure that all content is accessible to users with disabilities"
        ],
        correct: 1,
        explanation: "This acceptance criterion describes how an action should be realized by the system. This is an example of a scenario-oriented acceptance criterion"
    },
    {
        q: "Consider the following acceptance criteria for a user story written from the perspective of an online store owner. Given that the user is logged in and on the homepage, When the user clicks on the 'Add Item' button, Then the 'Create Item' form should appear, And the user should be able to input a name and price for the new item. In what format is the acceptance criteria written?",
        options: ["Rule-oriented", "Scenario-oriented", "Product-oriented", "Process-oriented"],
        correct: 1,
        explanation: "This is a Given/When/Then format, which is scenario-oriented"
    },
    {
        q: "You are writing some acceptance criteria for a story. You have decided to make a list of all the likely inputs to the code and the expected outputs based on those inputs. What format are you using?",
        options: ["IPO chart", "Acceptance-based", "Rules-oriented", "Behavior-driven"],
        correct: 2,
        explanation: "This is a rules-oriented format."
    },
    {
        q: "You are using acceptance test-driven development and designing test cases based on the following user story: As a Regular or Special user, I want to be able to use my electronic floor card, to access specific floors. Acceptance Criteria: AC1: Regular users have access to floors 1 to 3, AC2: Floor 4 is only accessible to Special users, AC3: Special users have all the access rights of Regular users. Which test case is the MOST reasonable one to test AC3?",
        options: [
            "Check that a Regular user can access floors 1 and 3",
            "Check that a Regular user cannot access floor 4",
            "Check that a Special user can access floor 5",
            "Check that a Special user can access floors 1, 2 and 3"
        ],
        correct: 3,
        explanation: "This is the way we can check if a Special user can access floors which are accessible to a Regular user"
    },
    {
        q: "You have just started designing test cases for the following user story. As a customer, I want to be able to filter search results by price range, so that I can find products within my budget more easily. Acceptance criteria: 1. The filter should work for all versions of the application from version 3.0 upwards 2. The filter should allow the customer to set a price range with a minimum and a maximum price 3. The search results should update dynamically as the customer adjusts the price range filter. In all test cases the precondition is as follows: there are only two products available, products A and B. Product A costs $100 and product B costs $110. Which of the following is the BEST example of a test case for this user story?",
        options: [
            "Enter webpage and set filter to show prices between $90 and $100. Expected result: results show product A only. Set maximum price to $110. Expected result: results now include both products A and B",
            "Enter webpage. Expected result: the default minimum and maximum prices are $100 and $110 respectively. Select product C to stock, with price $120. Refresh the client's webpage. Expected result: the default maximum price changes to $120",
            "Enter webpage and set filter to show prices between $90 and $115. Expected result: results show both products A and B. Change currency from USD to EUR. Expected result: the filter range changes correctly to EUR values, according to the current exchange rate",
            "Enter webpage in three different browsers; Edge, Chrome and Opera. In each browser, set filter between $90 and $110. Expected result: results include both products A and B and the results layout is the same in all three browsers"
        ],
        correct: 0,
        explanation: "This test case is related to acceptance criteria 2 and 3, because we check if we can set price range (acceptance criterion 2) and if the results update dynamically after adjusting the price range filter (acceptance criterion 3)"
    },
    {
        q: "You are creating test cases for the following story, applying the ATDD approach. As a hotel owner I want to reserve all the rooms on a floor before moving to the next floor So I can maximize the efficiency of the housekeeping staff. You have decided to apply boundary value analysis to this requirement and have identified the following partitions for the occupancy of a floor: 0 | 1 - floor full | overbooked. You also want to be sure that the software is usable by the staff and that it performs quickly in determining which floors have availability. You have designed the following test cases: 1. Test with 1 occupant on the floor 2. Test with the floor full and ensure the next floor is made available for bookings 3. Test with 0 occupants on the floor and ensure that floor is only available when lower floors are fully booked. 4. Test the usability to ensure hotel staff will find the software usable 5. Test for response time when the system is at average load and the hotel is 80% occupied. What are you missing?",
        options: [
            "A test with a floor partially occupied but not fully occupied",
            "A test for performance",
            "A test for trying to assign someone to a floor that is full",
            "A test for usability"
        ],
        correct: 2,
        explanation: "The test that is missing is to try to see if you can allocate someone to a floor that is already fully booked. This is a negative test and should result in an error."
    },
    {
        q: "Consider the following user story: As an Editor I want to review content before it is published so that I can ensure the grammar is correct and its acceptance criteria: The user can log in to the content management system with 'Editor' role, The editor can view existing content pages, The editor can edit the page content, The editor can add markup comments, The editor can save changes, The editor can reassign to the 'content owner' role to make updates. Which of the following is the BEST example of an ATDD test case for user story?",
        options: [
            "Test if the editor can save the document after they edit the page content",
            "Test if the content owner can log in and make updates to the content",
            "Test if the editor can schedule the edited content for publishing",
            "Test if the editor can reassign to another editor to make updates"
        ],
        correct: 0,
        explanation: "This test covers two acceptance criteria: one about editing the document and one about saving changes"
    },
    {
        q: "Your team analyzes the following user story in order to define the acceptance criteria: As a registered customer, I want to be able to view my previous orders on the company's website, so that I can keep track of my purchases. Which of the following test cases will NOT be relevant for this user story?",
        options: [
            "Input: the customer logs into their account on the website and clicks the 'see order history' button Expected result: the system shows a list of all the customer's previous orders, including the date, order number, and total cost",
            "Input: the customer clicks on an order from the order list Expected result: the system displays the individual items purchased, along with their prices and quantities",
            "Input: the customer clicks 'Sort ascending' button on the order history screen Expected result: the system shows the order history sorted by order number in ascending order",
            "Input: an unregistered customer registers as a new customer with a valid e-mail address that does not already exist in the customer database Expected result: the system accepts the registration and creates the account"
        ],
        correct: 3,
        explanation: "The test case is related to the registration process, which is not discussed in the user story. The user story is about viewing previous orders"
    },
    {
        q: "You are creating test cases for the following story, applying the ATDD approach. As a hotel owner I want to reserve all the rooms on a floor before moving to the next floor So I can maximize the efficiency of the housekeeping staff. You have decided to apply equivalence partitioning to this requirement and have identified the following partitions for the occupancy of a floor: 0 | 1 - floor full | overbooked. You also want to be sure that the software is usable by the staff and that it performs quickly in determining which floors have availability. You have designed the following test cases: 1. Test with 1 occupant on the floor 2. Test with the floor full and ensure the next floor is made available for bookings 3. Test with 0 occupants on the floor and ensure that floor is only available when lower floors are fully booked 4. Test the usability to ensure hotel staff will find the software usable 5. Test for response time when the system is at average load and the hotel is 80% occupied. Given this information, what should be the priority order for the tests you will design?",
        options: [
            "0, 1-floor full, overbooked, usability, performance",
            "Performance, 1-floor full, usability, overbooked, 0",
            "Usability, performance, overbooked, 0, 1-floor full",
            "Overbooked, 0, 1-floor full, performance, usability"
        ],
        correct: 0,
        explanation: "The combination of likelihood and impact is normally used to determine the overall risk level (sometimes called the risk priority number)."
    },
    {
        q: "Consider the following user story of education system: As a parent, I want to get my child's exam results, so that I can be aware of his score in each exam. Acceptance criteria: The parent can search by the student ID which consists of 7 digits. The exam result page will be displayed after searching which consists a table having a separate row for each exam name and its score. Which is the BEST example of an Acceptance Test-Driven Development (ATDD) test for this user story?",
        options: [
            "Test that function GetStudentExamResults() returns array of integers",
            "Test that the results page opens within 5 seconds maximum",
            "Test searching by 3 invalid student IDs having 6-digit as follows: 111122, 111333, 111444",
            "Test that a parent searches by a 7-digit student ID that is not registered in the system"
        ],
        correct: 3,
        explanation: "ATDD focuses on collaboratively defining acceptance tests based on user requirements before development. This test validates the acceptance criteria (7-digit ID search), checks edge cases (unregistered ID), and mirrors real user behavior."
    }
];
