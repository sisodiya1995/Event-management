var Events = require('../modals/events')

module.exports = {
    getLocationAndCatageory : function(req ,res ,next){
        Events.distinct("event_category", (err, cat) => {
            if (err) return next(err)
            Events.distinct("location", (err, loc) => {
                if (err) return next(err)
                res.locals.location = loc;
                res.locals.catageory = cat;
                next()
            });
          });
    }
}