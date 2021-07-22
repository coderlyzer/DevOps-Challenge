//helper file to prepare responses.
const apiResponse = require('../helpers/apiResponse')

exports.GetSlugUrl = [
  (req, res) => {
    try {
      if (!req.query.venueName || !req.query.townName) {
        return apiResponse.validationErrorWithData(
          res,
          'town name and venue name must be supplied',
          {},
        )
      }
      let slugifyUrl = '/[t]-events/[v]'
      // replacing alpha numeric with hypehns
      let townName = req.query.townName.replace(/[\W_]+/g, '-')
      let venueName = req.query.venueName.replace(/[\W_]+/g, '-')
      townName = townName.toLowerCase()
      venueName = venueName.toLowerCase()
      // replacing the slugs
      slugifyUrl = slugifyUrl.replace('[t]', townName)
      slugifyUrl = slugifyUrl.replace('[v]', venueName)
      return apiResponse.successResponseWithData(
        res,
        'Url Generated Successfully',
        slugifyUrl,
      )

      // // Extract the validation errors from a request.
      // const errors = validationResult(req);
      // if (!errors.isEmpty()) {
      //   // Display sanitized values/errors messages.
      //   return apiResponse.validationErrorWithData(
      //     res,
      //     "Validation Error.",
      //     errors.array()
      //   );
      // } else {
      //   return apiResponse.successResponseWithData(
      //     res,
      //     "Registration Success.",
      //     {}
      //   );
      // }
    } catch (err) {
      //throw error in json response with status 500.
      return apiResponse.ErrorResponse(res, err)
    }
  },
]
