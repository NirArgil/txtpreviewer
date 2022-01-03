import { GetText, GetTextError } from "./types"

export const getText = (e) => dispatch => {
  try {
    const reader = new FileReader()
    reader.onload = async (e) => {
      const text = (e.target.result)

      const multiCommentsSliced = text.slice(text.indexOf("/*"), (text.indexOf("*/") + 2));

      const oneLineComments = text.slice(text.indexOf("//"), text.indexOf('.'));

      const a = text.split(multiCommentsSliced);
      const b = a.join('');
      const c = b.split(oneLineComments);

      const contentWithoutComments = c.join('');

      dispatch({
        type: GetText,
        payload: contentWithoutComments
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