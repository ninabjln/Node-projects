const { select } = require("@inquirer/prompts");

async function questions() {
  let resultsI = 0;
  let resultsE = 0;

  try {
    const question1 = await select({
      message: "When you are tired, how do you prefer to recharge?",
      choices: [
        {
          name: "Spend time with other people",
          value: "E",
        },
        {
          name: "Spend time alone",
          value: "I",
        },
      ],
    });

    if (question1 === "I") {
      resultsI++;
      console.log(`introvert: ${resultsI}`);
    } else if (question1 === "E") {
      resultsE++;
      console.log(`Entrovert: ${resultsE}`);
    } else {
      throw new Error();
    }

    const question2 = await select({
      message: "When you enter a new group of people, what do you usually do?",
      choices: [
        {
          name: "Start talking and introducing yourself",
          value: "E",
        },
        {
          name: "Observe the group first and talk later",
          value: "I",
        },
      ],
    });

    if (question2 === "I") {
      resultsI++;
    } else if (question2 === "E") {
      resultsE++;
    } else {
      throw new Error("Invalid answer.");
    }
    const question3 = await select({
      message: "How do you usually prefer to spend your free time?",
      choices: [
        {
          name: "Going out or doing something with others",
          value: "E",
        },
        {
          name: "Staying home and doing something by yourself",
          value: "I",
        },
      ],
    });

    if (question3 === "I") {
      resultsI++;
    } else if (question3 === "E") {
      resultsE++;
    } else {
      throw new Error("Invalid answer.");
    }
    const question4 = await select({
      message: "When you have an interesting idea, what do you usually do",
      choices: [
        {
          name: "Talk about it with someone",
          value: "E",
        },
        {
          name: "Think about it by yourself first",
          value: "I",
        },
      ],
    });

    if (question4 === "I") {
      resultsI++;
    } else if (question4 === "E") {
      resultsE++;
    } else {
      throw new Error("Invalid answer.");
    }
    const question5 = await select({
      message:
        "After spending several hours with other people, how do you usually feel?",
      choices: [
        {
          name: "Energized and ready to do more",
          value: "E",
        },
        {
          name: "Tired and in need of some alone time",
          value: "I",
        },
      ],
    });

    if (question5 === "I") {
      resultsI++;
    } else if (question5 === "E") {
      resultsE++;
    } else {
      throw new Error("Invalid answer.");
    }
    const question6 = await select({
      message:
        "If you are going to an event where you know very few people, what sounds more natural to you?",
      choices: [
        {
          name: "Meet new people and start conversations",
          value: "E",
        },
        {
          name: "Stay with the few people you know or observe quietly",
          value: "I",
        },
      ],
    });

    if (question6 === "I") {
      resultsI++;
    } else if (question6 === "E") {
      resultsE++;
    } else {
      throw new Error("Invalid answer.");
    }
    const question7 = await select({
      message:
        "When you are working on a difficult problem, what helps you more?",
      choices: [
        {
          name: "Talking it through with someone",
          value: "E",
        },
        {
          name: "Having quiet time to think about it",
          value: "I",
        },
      ],
    });

    if (question7 === "I") {
      resultsI++;
    } else if (question7 === "E") {
      resultsE++;
    } else {
      throw new Error("Invalid answer.");
    }
    const question8 = await select({
      message: "How do you usually feel about being the center of attention?",
      choices: [
        {
          name: "I am generally comfortable with it",
          value: "E",
        },
        {
          name: "I usually prefer not to be the center of attention",
          value: "I",
        },
      ],
    });

    if (question8 === "I") {
      resultsI++;
    } else if (question8 === "E") {
      resultsE++;
    } else {
      throw new Error("Invalid answer.");
    }
    const question9 = await select({
      message: "When you meet someone new, what usually happens?",
      choices: [
        {
          name: "I quickly become comfortable talking to them",
          value: "E",
        },
        {
          name: "I need some time before I feel comfortable",
          value: "I",
        },
      ],
    });

    if (question9 === "I") {
      resultsI++;
    } else if (question9 === "E") {
      resultsE++;
    } else {
      throw new Error("Invalid answer.");
    }
    const question10 = await select({
      message:
        "If you have an entire day with no plans, which sounds more appealing?",
      choices: [
        {
          name: "Make plans and spend the day with other people",
          value: "E",
        },
        {
          name: "Enjoy the day at my own pace and have plenty of alone time",
          value: "I",
        },
      ],
    });

    if (question10 === "I") {
      resultsI++;
    } else if (question10 === "E") {
      resultsE++;
    } else {
      throw new Error("Invalid answer.");
    }
  } catch (error) {
    console.log(error.message);
  }
  return {
  resultsE,
  resultsI
};
}

module.exports = {
  questions,
};
