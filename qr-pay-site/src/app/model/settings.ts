export class Settings {
  public qrdata = '';
  
  private reset() {
    this.qrdata = '';
  }

  constructor(values: object = {}) {
    this.reset();
    if (typeof values !== 'undefined') {
      Object.assign(this, values);
      if (typeof this.qrdata !== 'string') {
        this.qrdata = '';
      }
    }
  }

}
