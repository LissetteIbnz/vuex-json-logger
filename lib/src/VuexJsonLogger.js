const { saveAs } = require('file-saver');

const vuexHistory = [];

const download = (content, filename, mime = "application/json") => {
  const blob = new Blob([JSON.stringify(content)], { type: mime });
  saveAs(blob, filename);
}

export default function logger(ref) {
  if (ref === void 0) ref = {};

  let filename = ref.filename;
  if (filename === void 0) filename = "state-dump.json";
  let mutationListener = ref.mutationListener;
  if (mutationListener === void 0) mutationListener = "exportToJson";

  return store => {
    store.subscribe((mutation, state) => {
      vuexHistory.push(mutation);

      if (mutation.type === mutationListener) {
        const formattedState = {
          payload: JSON.stringify(vuexHistory),
          state
        };

        download(formattedState, filename);
      }
    });
  };
}
