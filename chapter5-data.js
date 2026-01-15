import React, { useState, useEffect } from 'react';
import { ChevronRight, Check, X, RotateCcw, Trophy } from 'lucide-react';

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
    correct: [0, 3],
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
  }
];

export default function ISTQBQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (showResults) {
      calculateScore();
    }
  }, [showResults]);

  const handleAnswer = (questionIndex, optionIndex) => {
    const question = questions[questionIndex];
    
    if (Array.isArray(question.correct)) {
      // Multiple selection question
      const current = selectedAnswers[questionIndex] || [];
      const newAnswers = current.includes(optionIndex)
        ? current.filter(i => i !== optionIndex)
        : [...current, optionIndex];
      
      setSelectedAnswers({
        ...selectedAnswers,
        [questionIndex]: newAnswers
      });
    } else {
      // Single selection question
      setSelectedAnswers({
        ...selectedAnswers,
        [questionIndex]: optionIndex
      });
    }
  };

  const isAnswerCorrect = (questionIndex) => {
    const question = questions[questionIndex];
    const userAnswer = selectedAnswers[questionIndex];
    
    if (Array.isArray(question.correct)) {
      if (!Array.isArray(userAnswer)) return false;
      return JSON.stringify(userAnswer.sort()) === JSON.stringify(question.correct.sort());
    }
    
    return userAnswer === question.correct;
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((_, index) => {
      if (isAnswerCorrect(index)) correct++;
    });
    setScore(correct);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const isOptionSelected = (questionIndex, optionIndex) => {
    const answer = selectedAnswers[questionIndex];
    if (Array.isArray(answer)) {
      return answer.includes(optionIndex);
    }
    return answer === optionIndex;
  };

  const getOptionStyle = (questionIndex, optionIndex) => {
    if (!showResults) {
      return isOptionSelected(questionIndex, optionIndex)
        ? 'border-blue-500 bg-blue-50'
        : 'border-gray-300 hover:border-blue-300';
    }

    const question = questions[questionIndex];
    const isCorrectOption = Array.isArray(question.correct)
      ? question.correct.includes(optionIndex)
      : question.correct === optionIndex;
    const isSelected = isOptionSelected(questionIndex, optionIndex);

    if (isCorrectOption) {
      return 'border-green-500 bg-green-50';
    }
    if (isSelected && !isCorrectOption) {
      return 'border-red-500 bg-red-50';
    }
    return 'border-gray-300 opacity-50';
  };

  const currentQ = questions[currentQuestion];
  const isMultipleChoice = Array.isArray(currentQ.correct);

  if (showResults) {
    const percentage = ((score / questions.length) * 100).toFixed(1);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <Trophy className="w-20 h-20 mx-auto text-yellow-500 mb-4" />
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Completed!</h2>
              <p className="text-xl text-gray-600">
                Your Score: <span className="font-bold text-blue-600">{score}/{questions.length}</span>
              </p>
              <p className="text-lg text-gray-500">({percentage}%)</p>
            </div>

            <div className="space-y-6 mb-8">
              {questions.map((q, qIndex) => {
                const userAnswer = selectedAnswers[qIndex];
                const correct = isAnswerCorrect(qIndex);
                
                return (
                  <div key={qIndex} className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                        correct ? 'bg-green-500' : 'bg-red-500'
                      }`}>
                        {correct ? (
                          <Check className="w-4 h-4 text-white" />
                        ) : (
                          <X className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-800 mb-2">Q{qIndex + 1}: {q.q}</p>
                        <div className="space-y-2">
                          {q.options.map((option, oIndex) => {
                            const isCorrectOption = Array.isArray(q.correct)
                              ? q.correct.includes(oIndex)
                              : q.correct === oIndex;
                            const isSelected = Array.isArray(userAnswer)
                              ? userAnswer.includes(oIndex)
                              : userAnswer === oIndex;
                            
                            return (
                              <div
                                key={oIndex}
                                className={`p-2 rounded text-sm ${getOptionStyle(qIndex, oIndex)}`}
                              >
                                {option}
                              </div>
                            );
                          })}
                        </div>
                        <p className="text-sm text-gray-600 mt-2 italic">{q.explanation}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={handleReset}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Restart Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">ISTQB Practice Quiz</h2>
              <span className="text-sm text-gray-500">
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="mb-8">
            <p className="text-lg text-gray-700 mb-6">{currentQ.q}</p>
            {isMultipleChoice && (
              <p className="text-sm text-blue-600 mb-4 font-medium">
                Select TWO answers
              </p>
            )}
            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(currentQuestion, index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${getOptionStyle(currentQuestion, index)}`}
                  disabled={showResults}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      isOptionSelected(currentQuestion, index)
                        ? 'border-blue-600 bg-blue-600'
                        : 'border-gray-400'
                    }`}>
                      {isOptionSelected(currentQuestion, index) && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <span className="text-gray-700">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-6 py-3 rounded-lg font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestion] === undefined}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
            >
              {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
