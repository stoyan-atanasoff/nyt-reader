describe('Entry point', () => {
  it('should render and match the snapshot', () => {
    document.body.innerHTML = '<div id="root"></div>';
    const index = require('../index');
    expect(index).toMatchSnapshot();
  });
});

