import Prompt from '../prompt';

export default class Embed {
  constructor (data) {
    this.el = document.createElement('div');
    this.el.classList.add('align-embed');
    this.el.insertAdjacentHTML('afterbegin', data);
  }

  static add (align) {
    const prompt = new Prompt(align, {
      message: 'Add an embedded:'
    });
    return new Promise((resolve, reject) => {
      prompt.onSubmit(() => {
        const data = prompt.inputs[0].value;
        if (!data) {
          reject('not a valid number');
        };
        resolve(new Embed(data));
      });
    });
  }
}
