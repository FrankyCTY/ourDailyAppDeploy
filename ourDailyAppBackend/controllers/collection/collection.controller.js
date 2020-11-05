const withCatchErrAsync = require("../../utils/error/withCatchErrorAsync");
const Collection = require("../../models/collection/collection.model");
const QueryStringHandler = require("../../helpers/QueryStringHandler");
const OperationalErr = require("../../helpers/OperationalErr");
const UserService = require("../../services/User.service");
const AuthService = require("../../services/Auth.service");

exports.createCollection = withCatchErrAsync(async (req, res, next) => {

  const {id} = req.user;
  const {name} = req.body;
  
  const collectionDoc = await Collection.create({name, owner: id});

  console.log({collectionDoc})

  return res.status(201).json({
    status: "success",
    data: {
      collection: collectionDoc,
    }
  })
})

exports.getAllCollections = withCatchErrAsync(async (req, res) => {
  const {id} = req.user;

  // ) EXCUTE QUERY
  const queryParamFeature = new QueryStringHandler(Collection.find({owner: id}), req.query)
  .filter()
  .sort()
  .limitFields()
  .paginate();

  const collectionDocs = await queryParamFeature.query;

  return res.status(200).json({
      status: "success",
      results: collectionDocs.length,
      data: {
          collections: collectionDocs,
      },
  });
});