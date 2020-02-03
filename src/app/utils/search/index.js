const puppeteer = require('puppeteer');
const $ = require('cheerio');

const getUrl = ({ checkin, checkout }) => {
  const formatCheckin = formatDate(checkin);
  const formatCheckout = formatDate(checkout);
  return `https://myreservations.omnibees.com/chain.aspx?c=2983&lang=pt-br&ad=2&_ga=2.35420449.1094503460.1580646946-2046231073.1580646946&version=MyReservation&sid=68780cfa-ebd4-4a0b-b672-be767033c7f4#/hotel=&hotelname=&CheckIn=${formatCheckin}&CheckOut=${formatCheckout}&Code=&group_code=&loyality_card=&NRooms=1&ad=2&ch=0&ag=-`;
};

const getPage = async url => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.setViewport({ width: 1920, height: 1080 });
  await page.setRequestInterception(true);

  page.on('request', req => {
    if (req.resourceType() === 'image') {
      req.abort();
    } else {
      req.continue();
    }
  });

  return await page.content();
};

const mountSearchData = html => {
  let data = [];
  $('.entry', html)
    .not('.not_available')
    .each((i, elem) => {
      data.push({
        name: $('.stars_0', elem).attr('title'),
        image: 'https://myreservations.omnibees.com/' + $('.image_tooltip img', elem).attr('src'),
        description: $('.tab_1 p', elem).text(),
        price: $('.price h5', elem).text(),
      });
    });
  return data;
};

const formatDate = date => {
  return date.split('/').join('');
};

exports.getUrl = getUrl;
exports.getPage = getPage;
exports.mountSearchData = mountSearchData;
exports.formatDate = formatDate;
