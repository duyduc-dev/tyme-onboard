import Layout from "../components/Layout";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";
import ConfettiExplosion from "react-confetti-explosion";
import { useState } from "react";
import clsx from "clsx";

const mdStr = `
# Introduction to JavaScript

## Overview
JavaScript is a versatile programming language used for web development.

## Key Topics
- Variables
- Data Types
- Operators
- Functions
- Loops

## Variables
Variables are containers for storing data values.

## Data Types
JavaScript supports multiple data types like:
- Strings
- Numbers
- Booleans

## Operators
Operators are used to perform operations:
- Arithmetic
- Comparison
- Logical

## Functions
Functions are blocks of code designed to perform tasks.

## Loops
Loops are used to repeat code execution.

## Error Handling
JavaScript handles errors using try-catch blocks.

## Best Practices
- Write clean code.
- Use meaningful variable names.

## Real-World Applications
JavaScript powers interactive web applications.

## Resources
Visit MDN for comprehensive documentation.

`.repeat(5);

const ModuleDetail = () => {
  const navigate = useNavigate();
  const [isCorrect, setIsCorrect] = useState(false);
  const [indexActive, setIndexActive] = useState(-1);

  const question = {
    question: "What do you think about this guide?",
    answers: [
      {
        text: "It's helpful",
        isCorrect: true,
      },
      {
        text: "It's confusing",
      },
      {
        text: "It's too long",
      },
    ],
  };

  return (
    <Layout data-color-mode="light">
      <div
        className="flex items-center gap-1 mb-4 font-bold cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <IoMdArrowBack size={20} />
        <span>Back</span>
      </div>
      <MarkdownEditor.Markdown
        className="!bg-transparent"
        source={mdStr}
        height="200px"
      />
      <div className="bg-white p-4 rounded-[8px] mt-4">
        <p className="text-[13px] italic">Question?</p>
        <p>{question.question}</p>
        <div>
          {isCorrect && (
            <ConfettiExplosion
              {...{
                force: 0.4,
                duration: 2200,
                particleCount: 30,
                width: 400,
              }}
            />
          )}
          {question.answers.map(({ text, isCorrect: isCorrectItem }, index) => (
            <div
              key={index}
              onClick={() => {
                setIndexActive(index);
                setIsCorrect(isCorrectItem);
              }}
              className={clsx(
                "bg-gray-100 px-4 py-2 rounded-[8px] mt-2 cursor-pointer hover:bg-gray-200 transition-all",
                isCorrectItem && index === indexActive && "!bg-green-100"
              )}
            >
              {index + 1} . {text}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ModuleDetail;
