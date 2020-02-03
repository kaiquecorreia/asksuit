const sinon = require('sinon');
const utils = require('../../../src/app/utils/search');
const mock = require('./mock');
const puppeteer = require('puppeteer');
describe('Search Utils', () => {
  it('should return  formated date', () => {
    const date = utils.formatDate('06/01/2020');
    expect(typeof date).toBe('string');
    expect(date).toBe('06012020');
  });
  it('should return url with data', () => {
    const url = utils.getUrl({
      checkin: '06/03/2020',
      checkout: '08/03/2020',
    });
    expect(typeof url).toBe('string');
    expect(url).toEqual(mock.url);
  });
  it('should return page content', () => {
    const newPageFn = jest.fn(() => {
      return {
        newPage: () => ({
          goto: () => {},
          setViewport: () => {},
          setRequestInterception: () => {},
          on: () => {},
          content: () => ({
            called: true,
          }),
        }),
      };
    });
    const browserFn = sinon.stub(puppeteer, 'launch').resolves(newPageFn());
    const data = utils.getPage();
    data.then(data => expect(data).toEqual({ called: true }));

    browserFn.restore();
  });
  it('should return data from html', () => {
    const returnedData = [
      {
        name: 'Magique Le Canton',
        image: 'https://myreservations.omnibees.com//Handlers/ImageLoader.ashx?sz=250x165&imageID=395849.jpg',
        description: 'O Hotel Magique description',
        price: 'R$ 1.002,25',
      },
      {
        name: 'Hotel Village Le Canton',
        image: 'https://myreservations.omnibees.com//Handlers/ImageLoader.ashx?sz=250x165&imageID=152248.jpg',
        description: 'Hotel Village description',
        price: 'R$ 1.045,00',
      },
    ];
    const data = utils.mountSearchData(mock.html);
    expect(typeof data).toBe('object');
    expect(data.length).toBe(2);
    expect(data).toEqual(returnedData);
  });
});
