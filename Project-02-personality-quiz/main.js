const { questions } = require("./questions.js");

async function main() {
  try {
    const resultPart1 = await questions();
    if (resultPart1) {
      console.log(resultPart1);
    }
  } catch (error) {}
}

main();
