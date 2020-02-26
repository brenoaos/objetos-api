const typeorm = require('typeorm')
const _ = require('lodash')

module.exports.parserFilterLike = (filter) => {
    filter.like.forEach((l) => {
        let key = Object.keys(l)[0]
        filter.where.push({ [Object.keys(l)[0]]: typeorm.Like(`%${l[key]}%`) })
    });

    delete filter.like
    return filter;
}