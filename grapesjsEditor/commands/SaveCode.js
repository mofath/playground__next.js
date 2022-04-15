import { __ } from '../lang/I18n';
// import parse from "html-react-parser";

export default function () {
  return [
    {
      id: 'save-code',
      run: function (editor, sender) {
        sender && sender.set('active', 0);
        editor.store(async () => {
          console.log(sender);
          // const result = await axios.post(
          //   'http://localhost:5000/values',
          //   parse(editor.getHtml().toString()),
          // );
          // console.log(result);
        });

        editor.on('storage:load', function (e) {
          console.log('Loaded ', e);
        });

        editor.on('storage:store', function (e) {
          console.log('Stored ', e);
        });
      },
    },
  ];
}
