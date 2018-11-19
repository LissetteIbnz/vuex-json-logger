const { saveAs } = require('file-saver');

const download = (content, fileName, mime = "application/json") => {
  const blob = new Blob([JSON.stringify(content)], { type: mime });
  saveAs(blob, fileName);
};

const vuexHistory = [];

export default function(options) {
  if (options === void 0) options = {};

  let fileName = options.fileName;
  if (fileName === void 0) fileName = "state-dump.json";
  let mutationListener = options.mutationListener;
  if (mutationListener === void 0) mutationListener = "exportToJson";

  return store => {
    store.subscribe((mutation, state) => {
      vuexHistory.push(mutation);

      if (mutation.type === mutationListener) {
        const formattedState = {
          payload: JSON.stringify(vuexHistory),
          state
        };

        download(formattedState, fileName);
      }
    });
  };
}
