import { GetText, GetTextError } from "./types"

export const getText = (e) => dispatch => {
  try {

    const reader = new FileReader()

    reader.onload = async (e) => {
      const text = (e.target.result)

      const lines = text.split("\n");

      let isMultiLineCommentOn = false;

      const finalArr = lines.map((line, index) => {
        if (!line.includes("//") && !line.includes("/*") && !isMultiLineCommentOn)
          return line;

        let newLine = "";
        let hasSkipped = false;

        for (let charIndex = 0; charIndex < line.length; charIndex++) {

          if (hasSkipped) {
            hasSkipped = false;
            continue;
          }

          const char = line.charAt(charIndex);

          if (char === "/") {
            const nextChar = line.charAt(charIndex + 1);

            if (nextChar === "/")
              break;

            if (nextChar === "*") {
              isMultiLineCommentOn = true;
              continue;
            }
          }

          if (isMultiLineCommentOn) {

            if (char === "*") {
              const nextChar = line.charAt(charIndex + 1);

              if (nextChar === "/") {
                isMultiLineCommentOn = false;
                hasSkipped = true
                continue;
              }
            }
          }

          if (!isMultiLineCommentOn)
            newLine += char
        }

        return newLine.trim();

      }).filter(row => !!row)

      const finalText = finalArr.join("")
asd
      dispatch({
        type: GetText,
        payload: finalText
      })
    };

    reader.readAsText(e.target.files[0])

  } catch (e) {
    dispatch({
      type: GetTextError,
      payload: console.log(e),
    })
  }
}