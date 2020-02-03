const utils = require('../utils/search');

class Search {
  async find({ body }, res) {
    try {
      const { checkin = '', checkout = '' } = body;
      const url = utils.getUrl({ checkin, checkout });

      const html = await utils.getPage(url);
      const result = utils.mountSearchData(html);
      return res.json(result);
    } catch (error) {
      console.log(error);
      return res.json({ message: error.message });
    }
  }
}

module.exports = new Search();
