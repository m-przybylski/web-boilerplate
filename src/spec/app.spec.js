describe('app', () => {
  let person;
  beforeEach(() => {
    this.person = new Person('Maciek');
  });
  it('should greet you', () => {
    expect(this.person).toBeEqualTo('hello from Maciek');
  });
});
